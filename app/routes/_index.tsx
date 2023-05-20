import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Remixdle" }];
};

export default function Index() {
  return (
    <div className="bg-slate-600 text-white">
      <h1>Welcome to Remixdle</h1>
      <ul>
        <li>
          <Link rel="stylesheet" to="/tutorials">
            15m Quickstart Blog Tutorial
          </Link>
        </li>
      </ul>
    </div>
  );
}
