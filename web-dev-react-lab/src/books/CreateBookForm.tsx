import { useState } from "react";
import type { CreateBookModel } from "./BookModel";

interface CreateBookFormProps {
  onCreate(input: CreateBookModel): void;
}

export function CreateBookForm({ onCreate }: CreateBookFormProps) {
  const [title, setTitle] = useState<string>("");

  const onValidate = () => {
    onCreate({ title, yearPublished: 1960, authorId: "1" });
    setTitle("");
  };

  return (
    <>
      (<input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={onValidate} disabled={!title?.length}>
        Create book
      </button>
      )
    </>
  );
}
