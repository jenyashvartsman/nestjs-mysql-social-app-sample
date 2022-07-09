import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IsString, MaxLength, MinLength } from 'class-validator';

@Entity({ name: 'posts' })
export class PostEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  @MinLength(1)
  @MaxLength(255)
  @IsString()
  post: string;

  @CreateDateColumn()
  createdAt: Date;
}
