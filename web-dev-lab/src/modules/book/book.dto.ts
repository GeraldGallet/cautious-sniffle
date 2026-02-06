import { Type } from 'class-transformer';
import {
  IsArray,
  IsInt,
  IsNumber,
  IsString,
  IsUUID,
  Max,
  Min,
} from 'class-validator';
import { type AuthorId } from 'src/modules/book/author.entity';

export class CreateBookDto {
  @IsString()
  title: string;

  @IsInt()
  @Max(2025)
  @Min(1500)
  yearPublished: number;

  @IsUUID()
  authorId: AuthorId;
}

export class GetBooksQueryDto {
  @IsInt()
  limit: number;

  @IsInt()
  offset: number;

  @IsString()
  sort?: string;
}

export class DeleteBooksDto {
  @IsUUID(4, { each: true })
  @IsArray()
  ids: string[];
}
