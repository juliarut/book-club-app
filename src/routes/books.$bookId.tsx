import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/books/$bookId")({
  component: BookDetail,
});

function BookDetail() {
  const { bookId } = Route.useParams();
  return <h1 className="text-2xl">Book ID: {bookId}</h1>;
}
