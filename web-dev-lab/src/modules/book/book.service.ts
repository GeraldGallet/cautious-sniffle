import { Injectable } from '@nestjs/common';
import { CreateBookDto } from 'src/modules/book/book.dto';
import { BookId } from 'src/modules/book/book.entity';
import {
  BookModel,
  CreateBookModel,
  UpdateBookModel,
} from 'src/modules/book/book.model';
import { BookRepository } from 'src/modules/book/book.repository';
import { v4 } from 'uuid';

@Injectable()
export class BookService {
  constructor(private readonly bookRepository: BookRepository) {}

  public async getBooks(): Promise<BookModel[]> {
    return this.bookRepository.getBooks();
  }

  public async getBookById(id: BookId): Promise<BookModel | null> {
    return this.bookRepository.getBookById(id);
  }

  public async createBook(input: CreateBookModel): Promise<BookModel> {
    return this.bookRepository.createBook(input);
  }

  public async updateBookById(
    id: BookId,
    input: UpdateBookModel,
  ): Promise<BookModel | undefined> {
    return this.bookRepository.updateBookById(id, input);
  }

  public async deleteBookById(id: string) {
    return this.bookRepository.deleteBookById(id);
  }
}
