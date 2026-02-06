import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { BookRepository } from 'src/modules/book/book.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorEntity } from 'src/modules/book/author.entity';
import { BookEntity } from 'src/modules/book/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AuthorEntity, BookEntity])],
  controllers: [BookController],
  providers: [BookRepository, BookService],
})
export class BookModule {}
