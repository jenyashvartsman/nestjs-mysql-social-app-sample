import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'nestjs-mysql-social-app-sample',
      password: 'nestjs-mysql-social-app-sample',
      database: 'nestjs-mysql-social-app-sample',
      entities: [__dirname + '/../**/*.entity.js'],
      synchronize: true,
    }),
    PostModule,
  ],
})
export class AppModule {}
