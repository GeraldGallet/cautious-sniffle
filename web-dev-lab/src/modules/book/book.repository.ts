import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorEntity } from 'src/modules/book/author.entity';
import { CreateBookDto } from 'src/modules/book/book.dto';
import { BookEntity, BookId } from 'src/modules/book/book.entity';
import {
  BookModel,
  CreateBookModel,
  UpdateBookModel,
} from 'src/modules/book/book.model';
import { ILike, In, Like, Repository } from 'typeorm';
import { v4 } from 'uuid';

@Injectable()
export class BookRepository {
  constructor(
    @InjectRepository(BookEntity)
    private readonly bookRepository: Repository<BookEntity>,
    @InjectRepository(AuthorEntity)
    private readonly authorRepository: Repository<AuthorEntity>,
  ) {}

  private books: BookModel[] = [];

  public async getBooks(): Promise<BookModel[]> {
    const books = await this.bookRepository.find({
      relations: { author: true },
    });

    return books;
  }

  public async getBookById(id: BookId): Promise<BookModel | null> {
    const book = await this.bookRepository.findOne({ where: { id } });

    if (!book) {
      throw new Error('Book not found');
    }

    const author = await this.authorRepository.findOne({
      where: { id: book.authorId },
    });

    if (!author) {
      throw new Error('Author not found');
    }

    return {
      ...book,
      author,
    };
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
    id: BookId,
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
