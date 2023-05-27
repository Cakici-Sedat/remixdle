import { GameBoard } from "~/components/GameBoard";
import type { V2_MetaFunction } from "@remix-run/node";
export const meta: V2_MetaFunction = () => {
  return [{ title: "Remixdle" }];
};

export default function Index() {
  return (
        <GameBoard />
  );
}
