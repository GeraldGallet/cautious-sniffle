import { Link } from "@tanstack/react-router";
import { Route as aboutRoute } from "./routes/about";
import { Route as booksRoute } from "./routes/books";
import { Route as indexRoute } from "./routes/index";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <div
        style={{
          textAlign: "left",
          width: "100%",
          backgroundColor: "#395E66",
          color: "white",
        }}
      >
        <h2 style={{ marginTop: "0" }}>Babel&apos;s Library</h2>
        <Link to={indexRoute.to}>Home</Link>
        <Link to={aboutRoute.to}>About</Link>
        <Link to={booksRoute.to}>Books</Link>
      </div>
      <div style={{ width: "100%", overflowY: "scroll" }}>{children}</div>
    </div>
  );
}
