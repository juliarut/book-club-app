import { createRootRoute, Outlet, Link } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <header className="p-4 bg-gray-800 text-white">
        <nav className="flex gap-4">
          <Link to="/" activeProps={{ className: "font-bold" }}>
            Home
          </Link>
          <Link to="/about" activeProps={{ className: "font-bold" }}>
            About
          </Link>
        </nav>
      </header>
      <main className="p-4">
        <Outlet />
      </main>
      <footer className="p-4 bg-gray-100 text-center">© 2024 Book App</footer>
      <TanStackRouterDevtools position="bottom-right" />
    </>
  ),
});
