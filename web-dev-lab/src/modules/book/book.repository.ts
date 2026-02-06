import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorEntity } from 'src/modules/book/author.entity';
import { CreateBookDto } from 'src/modules/book/book.dto';
import { BookEntity, BookId } from 'src/modules/book/book.entity';
import {
  BookModel,
  CreateBookModel,
  FilterBooksModel,
  UpdateBookModel,
} from 'src/modules/book/book.model';
import { ILike, In, Like, Repository } from 'typeorm';
import { DataSource } from 'typeorm';
import { v4 } from 'uuid';

@Injectable()
export class BookRepository {
  constructor(
    @InjectRepository(BookEntity)
    private readonly bookRepository: Repository<BookEntity>,
    @InjectRepository(AuthorEntity)
    private readonly authorRepository: Repository<AuthorEntity>,
    private readonly dataSource: DataSource,
  ) {}

  public async getBooks(
    input: FilterBooksModel,
  ): Promise<[BookModel[], number]> {
    const sort = {
      [input.sort?.property ?? 'title']: input.sort?.direction ?? 'ASC',
    };

    const books = await this.bookRepository.findAndCount({
      skip: input.offset,
      take: input.limit,
      relations: { author: true },
      order: sort,
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
    const result = await this.bookRepository.save(
      this.bookRepository.create(input),
    );

    return result;
  }

  public async updateBookById(
    id: BookId,
    input: UpdateBookModel,
  ): Promise<BookModel | undefined> {
    const oldBook = await this.getBookById(id);

    if (!oldBook) {
      return undefined;
    }

    await this.bookRepository.update(id, input);

    const newBook = {
      ...oldBook,
      ...input,
    };

    return newBook;
  }

  public async deleteBookById(id: string) {
    await this.bookRepository.delete(id);
  }

  public async deleteBooks(ids: string[]) {
    await this.dataSource.transaction(async (manager) => {
      await manager.delete(BookEntity, { id: In(ids) });
    });
  }
}
