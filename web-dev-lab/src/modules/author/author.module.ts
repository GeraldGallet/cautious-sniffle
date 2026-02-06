import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorController } from 'src/modules/author/author.controller';
import { AuthorRepository } from 'src/modules/author/author.repository';
import { AuthorService } from 'src/modules/author/author.service';
import { AuthorEntity } from 'src/modules/book/author.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AuthorEntity])],
  controllers: [AuthorController],
  providers: [AuthorRepository, AuthorService],
})
export class AuthorModule {}
