import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { PostModule } from './api/post/post.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'nestjs-mysql-social-app-sample',
      password: 'nestjs-mysql-social-app-sample',
      database: 'nestjs-mysql-social-app-sample',
      entities: ['/src/entities/**/*{.ts,.js}'],
      synchronize: true,
    }),
    PostModule,
  ],
})
export class AppModule {}
