import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IsEmail, IsString, MaxLength } from 'class-validator';
import { PostEntity } from './post.entity';

@Entity({ name: 'users' })
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  @IsString()
  @MaxLength(50)
  firstName: string;

  @Column()
  @IsString()
  @MaxLength(50)
  lastName: string;

  @OneToMany(() => PostEntity, (post) => post.user, { lazy: true })
  posts?: PostEntity[];
}
