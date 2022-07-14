import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { PostDto } from 'src/dtos/post.dto';
import { UserDto } from 'src/dtos/user.dto';
import { UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async getUsers(): Promise<UserDto[]> {
    const users = await this.userRepository.find();
    return users.map((user) => plainToClass(UserDto, user));
  }

  async getUsersPosts(id: number): Promise<PostDto[]> {
    const user = await this.userRepository.findOneBy({ id });
    const userPosts = await user.posts;
    return (
      userPosts.map((post) => ({
        ...plainToClass(PostDto, post),
        userId: id,
      })) || []
    );
  }
}
