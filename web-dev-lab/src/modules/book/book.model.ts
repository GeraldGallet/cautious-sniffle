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
  author: BookAuthorModel;
};

export type UpdateBookModel = Partial<CreateBookModel>;
