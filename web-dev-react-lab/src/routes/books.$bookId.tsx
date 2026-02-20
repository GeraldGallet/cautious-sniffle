import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/books/$bookId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { bookId } = Route.useParams();

  return <div>Hello {bookId}!</div>;
}
