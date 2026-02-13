import { createFileRoute } from "@tanstack/react-router";
import { BookList } from "../books/BookList";

export const Route = createFileRoute("/books")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <BookList />
    </div>
  );
}
