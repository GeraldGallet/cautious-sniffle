import { useEffect } from "react";
import { BookListItem } from "./BookListItem";
import { CreateBookForm } from "./CreateBookForm";
import { useBookProvider } from "./useBookProvider";

export function BookList() {
  const { books, isLoading, onCreate, loadBooks, deleteBook, updateBook } =
    useBookProvider();

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <>
      <h1>Book's list</h1>
      <CreateBookForm onCreate={onCreate} />
      {isLoading ? <h2>Loading ...</h2> : <h2>Loaded.</h2>}
      {!isLoading && (
        <ul>
          {books.map((book) => {
            return (
              <BookListItem
                book={book}
                key={book.id}
                onDelete={() => deleteBook(book.id)}
                onUpdate={(input) => updateBook(book.id, input)}
              />
            );
          })}
        </ul>
      )}
    </>
  );
}
