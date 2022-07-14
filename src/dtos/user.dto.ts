import { Exclude, Expose } from 'class-transformer';
import { IsNumber, IsString, IsOptional, IsEmail } from 'class-validator';
import { PostDto } from './post.dto';

@Exclude()
export class UserDto {
  @Expose()
  @IsNumber()
  @IsOptional()
  id: number;

  @Expose()
  @IsEmail()
  email: string;

  @Expose()
  @IsString()
  firstName: string;

  @Expose()
  @IsString()
  lastName: string;

  @Expose()
  @IsOptional()
  posts: PostDto[];
}
