import { faker as Faker } from '@faker-js/faker';
import { UserEntity } from '../../entities/user.entity';
import { define } from 'typeorm-seeding';

define(UserEntity, (faker: typeof Faker) => {
  const user = new UserEntity();
  user.email = faker.internet.email();
  user.firstName = faker.name.firstName();
  user.lastName = faker.name.lastName();
  return user;
});
