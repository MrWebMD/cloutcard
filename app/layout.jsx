import "./globals.css";
import { Providers } from "./providers";
import { GeistSans } from "geist/font/sans";
import classNames from "classnames";
import { Navigation } from "@/components/Navigation";

export const metadata = {
  title: "CloutCard",
  description: "Link-in-bio service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={classNames("dark", GeistSans.className)}>
      <body>
        <Navigation />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
