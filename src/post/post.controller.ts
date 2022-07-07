import {
  Controller,
  Get,
  Post,
  Param,
  ParseIntPipe,
  Body,
  Delete,
  Patch,
} from '@nestjs/common';
import { PostDto } from './post.dto';
import { PostEntity } from './post.entity';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  async getPosts(): Promise<PostDto[]> {
    return await this.postService.getPosts();
  }

  @Get(':id')
  async getPost(@Param('id', ParseIntPipe) id): Promise<PostDto> {
    return await this.postService.getPost(id);
  }

  @Post()
  async createPost(@Body() post: PostDto): Promise<PostDto> {
    return await this.postService.createPost(post);
  }

  @Patch(':id')
  async editPost(
    @Param('id', ParseIntPipe) id,
    @Body() post: PostEntity,
  ): Promise<PostDto> {
    return await this.postService.editPost(id, post);
  }

  @Delete(':id')
  async deletePost(@Param('id', ParseIntPipe) id): Promise<PostDto> {
    return await this.postService.deletePost(id);
  }
}
