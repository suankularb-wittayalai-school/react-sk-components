import { CSSProperties, FC, ReactNode } from "react";

export type LinkElement = FC<{
  // (@SiravitPhokeed)
  // next/link is being a stubborn baby and won’t accept the fact that `href` has to be a string
  // so we’re using `any` here. Blame the Vercel people.
  // P.S. If Vercel is reading this, I apologize, please don’t not hire me.
  href: string | any;
  children: ReactNode;
}>;

export type SKComponent = {
  className?: string;
  style?: CSSProperties;
};
