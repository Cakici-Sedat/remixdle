import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Login" }];
};

export default function Index() {
  return (
    <div className=" ">
        <div>
            This is the login page
        </div>
    </div>
  );
}
