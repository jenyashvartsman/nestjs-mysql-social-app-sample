import { faker as Faker } from '@faker-js/faker';
import { PostEntity } from '../../entities/post.entity';
import { define } from 'typeorm-seeding';

define(PostEntity, (faker: typeof Faker) => {
  const post = new PostEntity();
  post.post = faker.lorem.words(5);
  post.createdAt = faker.date.recent();
  return post;
});
