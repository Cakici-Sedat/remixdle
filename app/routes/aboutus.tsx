import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [{ title: "About us" }];
};

export default function aboutus () {
  return (
    <div className="m-auto bg-w">About us</div>
  )
}