import * as React from "react";
import { NavItemProps } from "../app/types";

export const NavItem: React.FC<NavItemProps> = ({ text, isActive }) => {
  return (
    <div className="flex flex-col self-stretch my-auto whitespace-nowrap">
      <div className="gap-2.5 self-stretch">{text}</div>
      {isActive && (
        <div className="shrink-0 mt-2.5 h-px border border-black border-solid" />
      )}
    </div>
  );
};
