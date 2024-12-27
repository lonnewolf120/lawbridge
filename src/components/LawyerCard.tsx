import * as React from "react";
import { LawyerCardProps } from "../app/types";

export const LawyerCard: React.FC<LawyerCardProps> = ({
  image,
  name,
  title,
}) => {
  return (
    <div className="flex flex-col items-center text-base tracking-tight text-center text-black max-md:mt-10">
      <img
        loading="lazy"
        src={image}
        alt={name}
        className="object-contain self-stretch w-full rounded-full aspect-[1.02]"
      />
      <div className="mt-7 font-bold">{name}</div>
      <div className="mt-5">{title}</div>
    </div>
  );
};
