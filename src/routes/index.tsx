import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return <h1 className="text-3xl font-bold">Welcome to the Book App</h1>;
}
