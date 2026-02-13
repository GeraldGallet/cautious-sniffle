import axios from "axios";
import { useState } from "react";
import { v4 } from "uuid";
import type { BookModel, CreateBookModel, UpdateBookModel } from "./BookModel";

export const useBookProvider = () => {
  const [books, setBooks] = useState<BookModel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadBooks = async () => {
    setIsLoading(true);
    setTimeout(async () => {
      const response = await axios.get("http://localhost:3001/books");
      setBooks(response.data.data);
      setIsLoading(false);
    }, 1000);
  };

  const updateBook = (id: string, input: UpdateBookModel) => {
    axios.patch(`http://localhost:3001/books/${id}`, input);
    setBooks((prev) => {
      return prev.map((book) => {
        return {
          ...book,
          ...(book.id === id ? input : {}),
        };
      });
    });
  };

  const deleteBook = (id: string) => {
    axios.delete(`http://localhost:3001/books/${id}`);
    setBooks((prev) => prev.filter((book) => book.id !== id));
  };

  const onCreate = (input: CreateBookModel) => {
    const tempId = v4();
    axios
      .post("http://localhost:3001/books", {
        ...input,
        authorId: "2e07ead9-932f-4a53-8936-c50601829113",
        yearPublished: 1960,
      })
      .then((response) => {
        setBooks((prev) =>
          prev.map((book) => (book.id === tempId ? response.data : book)),
        );
      })
      .catch(() => {
        setBooks((prev) => prev.filter((book) => book.id !== tempId));
      });

    setBooks((prev) => [...prev, { id: tempId, ...input } as BookModel]);
  };

  return {
    books,
    isLoading,
    loadBooks,
    deleteBook,
    onCreate,
    updateBook,
  };
};
