import * as React from "react";
import { BlogPostProps } from "../app/types";

export const BlogPost: React.FC<BlogPostProps> = ({
  image,
  title,
  width = "37%",
}) => {
  return (
    <div className="flex flex-col" style={{ width }}>
      <div className="flex flex-col text-lg tracking-tight text-white max-md:mt-10">
        <img
          loading="lazy"
          src={image}
          alt={title}
          className="object-contain w-full aspect-[0.81]"
        />
        <div className="mt-2 mr-7 max-md:mr-2.5">{title}</div>
      </div>
    </div>
  );
};
