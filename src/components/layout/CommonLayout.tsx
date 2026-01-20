import { ReactNode } from "react";
import Home from "./Home";

interface IProps {
  children: ReactNode;
}

export default function CommonLayout({ children }: IProps) {
  return (
    <div className=" min-h-screen flex flex-col">
      <Home />
      <div className="grow-1">{children}</div>
    </div>
  );
}
