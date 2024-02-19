import "./globals.css";
import { Providers } from "./providers";
import { GeistSans } from "geist/font/sans";
import classNames from "classnames";
import { Navigation } from "@/components/Navigation";
import Head from "next/head";

export const metadata = {
  title: "CloutCard",
  description: "Link-in-bio service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={classNames("dark", GeistSans.className)}>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          content="https://cloutcard.io/pexels-nicholas-derio-palacios-19556998.jpg"
          property="og:image"
        />
        <meta property="og:site_name" content="CloutCard" />
      </Head>
      <body>
        <Navigation />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
