import * as React from "react";
import { StatisticProps } from "../app/types";

export const Statistic: React.FC<StatisticProps> = ({ value, label }) => {
  return (
    <div className="flex flex-col">
      <div className="text-8xl tracking-tighter max-md:text-4xl">{value}</div>
      <div className="mt-16 text-2xl tracking-tight max-md:mt-10">{label}</div>
    </div>
  );
};
