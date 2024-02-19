import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import { FaGithub } from "react-icons/fa";

export const Navigation = () => {
  return (
    <Navbar maxWidth="xl">
      <NavbarBrand>
        <h5 className="text-xl font-bold dark:text-white">
          <Link href="/">CloutCard</Link>
        </h5>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            color="foreground"
            target="_blank"
            href="https://github.com/MrWebMD/cloutcard"
          >
            <FaGithub fontSize={40} />
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/guide">Guide</Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/register" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
