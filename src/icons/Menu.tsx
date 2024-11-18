import { type FC, type SVGAttributes } from "react";

export const Menu: FC<SVGAttributes<SVGElement>> = (properties) => (
  <svg
    width={16}
    height={12}
    viewBox="0 0 16 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...properties}
  >
    <path fill="#004A80" d="M0 0H12V2H0z" />
    <path fill="#004A80" d="M4 5H16V7H4z" />
    <path fill="#004A80" d="M0 10H12V12H0z" />
  </svg>
);
