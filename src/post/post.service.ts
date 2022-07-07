import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
  ) {}

  async getPosts(): Promise<Post[]> {
    return await this.postRepository.find();
  }

  async getPost(id: number): Promise<Post> {
    return this.postRepository.findOneBy({ id });
  }

  async createPost(post: Post): Promise<void> {
    this.postRepository.save(post);
  }

  async deletePost(id: number): Promise<void> {
    this.postRepository.delete(id);
  }

  async editPost(id: number, post: Post): Promise<Post> {
    const postToEdit = await this.postRepository.findOneBy({ id });
    if (!postToEdit) {
      throw new NotFoundException(`post id: ${id}, not found`);
    }

    postToEdit.post = post.post;
    await postToEdit.save();
    return postToEdit;
  }
}
