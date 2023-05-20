import stylesheet from "./styles/tailwind.css";
import type { LinksFunction } from "@remix-run/node";
import { Header } from "./components/Header"
import { Footer } from "./components/Footer";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-gradient-to-br from-slate-700 to-slate-950 text-trex  selection:text-trex selection:bg-slate-900 h-screen w-screen">
        <Header />
        <div className="flex h-[90%] justify-center gap-16 px-6 w-auto">
          <Outlet />
        </div>
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
