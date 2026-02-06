import { Injectable } from '@nestjs/common';
import { CreateBookDto } from 'src/modules/book/book.dto';
import { BookId } from 'src/modules/book/book.entity';
import {
  BookModel,
  CreateBookModel,
  FilterBooksModel,
  UpdateBookModel,
} from 'src/modules/book/book.model';
import { BookRepository } from 'src/modules/book/book.repository';
import { v4 } from 'uuid';

@Injectable()
export class BookService {
  constructor(private readonly bookRepository: BookRepository) {}

  public async getBooks(
    input: FilterBooksModel,
  ): Promise<[BookModel[], number]> {
    return this.bookRepository.getBooks(input);
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

  public deleteBooks(ids: string[]) {
    return this.bookRepository.deleteBooks(ids);
  }
}
