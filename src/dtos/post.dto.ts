import { Exclude, Expose } from 'class-transformer';
import { IsNumber, IsString, IsOptional, IsDate } from 'class-validator';

@Exclude()
export class PostDto {
  @Expose()
  @IsNumber()
  @IsOptional()
  id: number;

  @Expose()
  @IsString()
  post: string;

  @Expose()
  @IsDate()
  createdAt: Date;

  @Expose()
  userId: number;
}
