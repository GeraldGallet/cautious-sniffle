import { Type } from 'class-transformer';
import { IsInt, IsString, Max, Min } from 'class-validator';

class CreateBookAuthorDto {
  @IsString()
  lastName: string;

  @IsString()
  firstName: string;
}

export class CreateBookDto {
  @IsString()
  title: string;

  @IsInt()
  @Max(2025)
  @Min(1500)
  yearPublished: number;

  @Type(() => CreateBookAuthorDto)
  author: CreateBookAuthorDto;
}
