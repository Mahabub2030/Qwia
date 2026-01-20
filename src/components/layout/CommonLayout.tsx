import WorkPolicy from "@/pages/WorkPolicy";
import { ReactNode } from "react";
import Home from "./Home";

interface IProps {
  children: ReactNode;
}

export default function CommonLayout({ children }: IProps) {
  return (
    <div className=" min-h-screen flex flex-col">
      <div>
        <Home />
      </div>
      <div className="grow-1 mb-7">
        <WorkPolicy />
      </div>
      <div className="grow-1">{children}</div>
    </div>
  );
}
