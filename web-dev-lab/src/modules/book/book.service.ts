import { Injectable } from '@nestjs/common';
import { CreateBookDto } from 'src/modules/book/book.dto';
import {
  BookModel,
  CreateBookModel,
  UpdateBookModel,
} from 'src/modules/book/book.model';
import { v4 } from 'uuid';

@Injectable()
export class BookService {
  private books: BookModel[] = [];

  public async getBooks(): Promise<BookModel[]> {
    return this.books;
  }

  public async getBookById(id: string): Promise<BookModel | undefined> {
    return this.books.find((book) => book.id === id);
  }

  public async createBook(input: CreateBookModel): Promise<BookModel> {
    const newBook = {
      ...input,
      id: v4(),
    };
    this.books.push(newBook);
    return newBook;
  }

  public async updateBookById(
    id: string,
    input: UpdateBookModel,
  ): Promise<BookModel | undefined> {
    const oldBook = await this.getBookById(id);

    if (!oldBook) {
      return undefined;
    }

    const newBook = {
      ...oldBook,
      ...input,
    };

    this.books = this.books.map((book) => {
      return book.id === id ? newBook : book;
    });

    return newBook;
  }

  public async deleteBookById(id: string) {
    this.books = this.books.filter((book) => book.id !== id);
  }
}
