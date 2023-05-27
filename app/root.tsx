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
      <body className="bg-gradient-to-br from-slate-700 to-slate-950 text-trex  selection:text-trex selection:bg-slate-900 lg:h-screen h-max lg:w-screen w-auto">
        <Header />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-[90%]">
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
