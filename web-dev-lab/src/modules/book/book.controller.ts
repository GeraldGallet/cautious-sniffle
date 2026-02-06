import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateBookDto } from 'src/modules/book/book.dto';
import type { BookId } from 'src/modules/book/book.entity';
import { BookService } from 'src/modules/book/book.service';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  public async getBooks() {
    return this.bookService.getBooks();
  }

  @Get(':id')
  public async getBookById(@Param('id') id: BookId) {
    return this.bookService.getBookById(id);
  }

  @Post()
  public async createBook(@Body() input: CreateBookDto) {
    return this.bookService.createBook(input);
  }

  @Patch(':id')
  public async updateBookById(
    @Param('id') id: BookId,
    @Body() input: CreateBookDto,
  ) {
    return this.bookService.updateBookById(id, input);
  }

  @Delete(':id')
  public async deleteBookById(@Param('id') id: string) {
    return this.bookService.deleteBookById(id);
  }
}
