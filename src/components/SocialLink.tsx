import * as React from "react";
import { SocialLinkProps } from "../app/types";

export const SocialLink: React.FC<SocialLinkProps> = ({
  icon,
  href,
  ariaLabel,
}) => {
  return (
    <a href={href} aria-label={ariaLabel}>
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 w-6 aspect-square"
      />
    </a>
  );
};
