import type { V2_MetaFunction } from "@remix-run/node";
import { Header } from "../components/Header"

export const meta: V2_MetaFunction = () => {
  return [{ title: "Remixdle" }];
};

export default function Index() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white selection:text-black selection:bg-consolvis ">
      <Header/>
    </div>
  );
}
