import { Connection, getManager } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { PostEntity } from '../../entities/post.entity';
import { UserEntity } from '../../entities/user.entity';

export default class InitialDatabaseSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    // clean db
    await getManager().query('delete from posts');
    await getManager().query('delete from users');

    // users
    const users = await factory(UserEntity)().createMany(10);

    // posts
    await factory(PostEntity)()
      .map(async (post) => {
        post.user = users[Math.floor(Math.random() * users.length)];
        return post;
      })
      .createMany(100);
  }
}
