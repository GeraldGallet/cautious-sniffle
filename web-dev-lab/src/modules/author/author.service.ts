import { Injectable } from '@nestjs/common';
import {
  AuthorModel,
  CreateAuthorModel,
} from 'src/modules/author/author.model';
import { AuthorRepository } from 'src/modules/author/author.repository';

@Injectable()
export class AuthorService {
  constructor(private readonly authorRepository: AuthorRepository) {}

  public async findAllAuthors(): Promise<AuthorModel[]> {
    return this.authorRepository.findAllAuthors();
  }

  public async createAuthor(input: CreateAuthorModel): Promise<AuthorModel> {
    return this.authorRepository.createAuthor(input);
  }
}
