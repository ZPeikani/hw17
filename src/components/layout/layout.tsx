// import { ReactNode } from "react";
import Carts from "../carts/carts";
import { Header } from "./header";

// type Prop = {
//   children: ReactNode;
// };
export function Layout() {
  return (
    <div>
      <Header />
      <Carts />
    </div>
  );
}
