import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IsString, MinLength } from 'class-validator';
import { UserEntity } from './user.entity';

@Entity({ name: 'posts' })
export class PostEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  @MinLength(1)
  @IsString()
  post: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.posts, { lazy: true })
  user: UserEntity;
}
