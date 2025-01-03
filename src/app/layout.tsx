import { ReactNode } from "react";
import "./globals.css";

type Props = {
  children: ReactNode;
};

// TODO: add robots, sitemap, etc.
export default function RootLayout({ children }: Props) {
  return children;
}
