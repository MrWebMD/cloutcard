import Image from "next/image";
import classNames from "classnames";
import { HeroSlider } from "@/components/HeroSlider";
import { Button, Input } from "@nextui-org/react";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import {
  FaChartBar,
  FaGithub,
  FaLink,
  FaPencilAlt,
  FaUser,
} from "react-icons/fa";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import Marquee from "react-fast-marquee";
import Link from "next/link";

export const metadata = {
  title: "CloutCard - Register",
  description: "Create an account",
};

export default function Home() {
  return (
    <>
      <main className="boundary formPage">
        <div>
          <h1 className="text-5xl font-bold text-center">CloutCard</h1>
          <br />
          <Card isBlurred={false} className="loginForm">
            <CardHeader>
              <h4 className="text-2xl font-bold dark:text-white flex flex-row items-center gap-2 justify-center w-full">
                <FaUser />
                Register
              </h4>
            </CardHeader>
            <CardBody>
              <Divider />
              <br />
              <Input
                type="email"
                label="Email"
                placeholder="Enter your email"
              />
              <br />
              <Input
                type="password"
                label="Password"
                placeholder="Enter your password"
              />
              <br />
              <Input
                type="password"
                label="Password"
                placeholder="Confirm your password"
              />
              <br />
              <Button
                color="primary"
                variant="solid"
                size="lg"
                className="header__ctaButton"
                displayRipple={true}
                displayAnimation={true}
                startContent={<FaUser />}
              >
                Register
              </Button>
              <br />
              <p className="text-center underline underline-offset-4">
                <Link href="/login">Already have an account? Login.</Link>
              </p>
            </CardBody>
          </Card>
        </div>
      </main>
    </>
  );
}
