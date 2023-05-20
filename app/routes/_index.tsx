import type { V2_MetaFunction } from "@remix-run/node";
import { Link, Links } from "@remix-run/react";
export const meta: V2_MetaFunction = () => {
  return [{ title: "Remixdle" }];
};

export default function Index() {
  return (

        <Link to="/wordle" prefetch="intent" className="m-auto bg-w">
          Inhalt hier!
        </Link>

  );
}
