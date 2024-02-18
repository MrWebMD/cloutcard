import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import classNames from "classnames";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import { FaGithub } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CloutCard",
  description: "Link-in-bio service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={classNames("dark", GeistSans.className)}>
      <body className={inter.className}>
        <Providers>
          <Navbar maxWidth="xl">
            <NavbarBrand>
              <h5 class="text-xl font-bold dark:text-white">CloutCard</h5>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
              <NavbarItem>
                <Link color="foreground" href="https://github.com/MrWebMD">
                  <FaGithub fontSize={40} />
                </Link>
              </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
              <NavbarItem className="hidden lg:flex">
                <Link href="#">Guide</Link>
              </NavbarItem>
              <NavbarItem className="hidden lg:flex">
                <Link href="#">Login</Link>
              </NavbarItem>
              <NavbarItem>
                <Button as={Link} color="primary" href="#" variant="flat">
                  Sign Up
                </Button>
              </NavbarItem>
            </NavbarContent>
          </Navbar>
          {children}
        </Providers>
      </body>
    </html>
  );
}
