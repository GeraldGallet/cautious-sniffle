import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  AuthorModel,
  CreateAuthorModel,
} from 'src/modules/author/author.model';
import { AuthorEntity } from 'src/modules/book/author.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorRepository {
  constructor(
    @InjectRepository(AuthorEntity)
    private readonly authorRepository: Repository<AuthorEntity>,
  ) {}

  public async findAllAuthors(): Promise<AuthorModel[]> {
    return this.authorRepository.find();
  }

  public async createAuthor(input: CreateAuthorModel): Promise<AuthorModel> {
    const result = await this.authorRepository.save(
      this.authorRepository.create(input),
    );

    return result;
  }
}
