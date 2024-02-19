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
      <main className="boundary">
        <div>
          <h1 className="text-5xl font-bold text-center">Guide</h1>
          <br />
        </div>
      </main>
    </>
  );
}
