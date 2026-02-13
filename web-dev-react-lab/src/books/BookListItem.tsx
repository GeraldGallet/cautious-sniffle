import { useState } from "react";
import type { BookModel, UpdateBookModel } from "./BookModel";

interface BookListItemProps {
  book: BookModel;
  onDelete(): void;
  onUpdate(input: UpdateBookModel): void;
}

export function BookListItem({ book, onDelete, onUpdate }: BookListItemProps) {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>(book.title);

  const onCancel = () => {
    setNewTitle(book.title);
    setEditMode(false);
  };

  const onSave = () => {
    onUpdate({ title: newTitle });
    setEditMode(false);
  };

  return (
    <li>
      <div>
        {editMode ? (
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        ) : (
          <b>{book.title}</b>
        )}
        {editMode ? (
          <>
            <button onClick={onSave}>Save</button>
            <button onClick={onCancel}>Cancel</button>
          </>
        ) : (
          <button onClick={() => setEditMode(true)}>Edit</button>
        )}
        <button onClick={onDelete}>Delete</button>
      </div>
    </li>
  );
}
