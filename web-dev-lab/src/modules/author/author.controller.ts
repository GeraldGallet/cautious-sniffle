import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateAuthorDto } from 'src/modules/author/author.dto';
import { CreateAuthorModel } from 'src/modules/author/author.model';
import { AuthorService } from 'src/modules/author/author.service';

@Controller('authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Get()
  public async listAuthors() {
    return this.authorService.findAllAuthors();
  }

  @Post()
  public async createAuthor(@Body() input: CreateAuthorDto) {
    return this.authorService.createAuthor(input);
  }
}
