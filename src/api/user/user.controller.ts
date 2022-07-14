import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PostDto } from 'src/dtos/post.dto';
import { UserDto } from 'src/dtos/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getUsers(): Promise<UserDto[]> {
    return await this.userService.getUsers();
  }

  @Get(':id/posts')
  async getUserPosts(@Param('id', ParseIntPipe) id): Promise<PostDto[]> {
    return await this.userService.getUsersPosts(id);
  }
}
