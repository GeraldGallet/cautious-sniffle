import { AuthorId } from 'src/modules/book/author.entity';

export type BookAuthorModel = {
  firstName: string;
  lastName: string;
};

export type BookModel = {
  id: string;
  title: string;
  yearPublished: number;
  author: BookAuthorModel;
};

export type CreateBookModel = {
  title: string;
  yearPublished: number;
  authorId: AuthorId;
};

export type UpdateBookModel = Partial<CreateBookModel>;

export const sortDirections = ['ASC', 'DESC'] as const;
// -> typeof sortDirections === ('ASC' | 'DESC')[]
// -> typeof sortDirections[number] === ('ASC' | 'DESC')
export type SortDirection = (typeof sortDirections)[number];

export const sortProperties = ['title', 'yearPublished'] as const;
export type SortProperty = (typeof sortProperties)[number];

export type FilterBooksModel = {
  limit: number;
  offset: number;
  sort?: {
    direction?: SortDirection;
    property?: SortProperty;
  };
};

export type GetBooksModel = {
  data: BookModel[];
  totalCount: number;
};
