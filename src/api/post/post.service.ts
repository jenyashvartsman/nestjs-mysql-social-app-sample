import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';
import { PostDto } from '../../dtos/post.dto';
import { PostEntity } from '../../entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>,
  ) {}

  async getPosts(): Promise<PostDto[]> {
    const posts = await this.postRepository.find();
    return posts.map((post) => plainToClass(PostDto, post));
  }

  async getPost(id: number): Promise<PostDto> {
    const post = await this.postRepository.findOneBy({ id });
    if (post) {
      return plainToClass(PostDto, post);
    } else {
      throw new NotFoundException(`Could not find post id ${id}`);
    }
  }

  async createPost(post: PostDto): Promise<PostDto> {
    const newPost = await this.postRepository.save(
      plainToClass(PostEntity, post),
    );
    return {
      ...post,
      id: newPost.id,
    };
  }

  async deletePost(id: number): Promise<PostDto> {
    const deleteToPost = await this.postRepository.findOneBy({ id });
    if (deleteToPost) {
      await this.postRepository.delete({ id });
      return plainToClass(PostDto, deleteToPost);
    } else {
      throw new NotFoundException(`Could not delete post id ${id}`);
    }
  }

  async editPost(id: number, post: PostEntity): Promise<PostDto> {
    const postToEdit = await this.postRepository.findOneBy({ id });
    if (postToEdit) {
      postToEdit.post = post.post;
      await postToEdit.save();
      return plainToClass(PostDto, postToEdit);
    } else {
      throw new NotFoundException(`Could not edit post id ${id}`);
    }
  }
}
