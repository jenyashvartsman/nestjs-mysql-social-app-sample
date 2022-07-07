import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  ParseIntPipe,
  Body,
  Delete,
} from '@nestjs/common';
import { Post as PostEntity } from './post.entity';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  async getPosts(): Promise<PostEntity[]> {
    return await this.postService.getPosts();
  }

  @Get(':id')
  async getPost(@Param('id', ParseIntPipe) id): Promise<PostEntity> {
    return await this.postService.getPost(id);
  }

  @Post()
  async createPost(@Body() post: PostEntity): Promise<void> {
    await this.postService.createPost(post);
  }

  @Put(':id')
  async editPost(
    @Param('id', ParseIntPipe) id,
    @Body() post: PostEntity,
  ): Promise<void> {
    await this.postService.editPost(id, post);
  }

  @Delete(':id')
  async deletePost(@Param('id', ParseIntPipe) id): Promise<void> {
    await this.postService.deletePost(id);
  }
}
