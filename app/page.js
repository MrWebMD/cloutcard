import Image from "next/image";
import classNames from "classnames";
import { HeroSlider } from "@/components/HeroSlider";
import { Button } from "@nextui-org/react";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import { FaChartBar, FaGithub, FaLink, FaPencilAlt } from "react-icons/fa";
import Link from "next/link";
import { Spacer } from "@nextui-org/react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
} from "@nextui-org/react";
import Marquee from "react-fast-marquee";
export default function Home() {
  return (
    <>
      <header className="header boundary grid grid-cols-2 gap-4">
        <div className="twoColGrid__item">
          <Spacer y={4} />

          <h1 className="text-5xl font-extrabold dark:text-white">
            <span style={{ color: "#66AAF9" }}>Amplify</span> Your Online
            Presence
          </h1>
          <Spacer y={4} />
          <h4 className="text-2xl font-bold dark:text-white">
            Free Link-in-bio services tailored for musicians, artists, and
            gamers.
          </h4>
          <Spacer y={4} />
          <Button
            color="primary"
            variant="solid"
            size="lg"
            className="header__ctaButton"
            endContent={<HiOutlineChevronDoubleRight />}
            as={Link}
            href="/register"
          >
            Get Started for Free
          </Button>
        </div>
        <div className="twoColGrid__item">
          <HeroSlider />
        </div>
      </header>
      <main className="boundary">
        <div className="banner">
          <img
            className="banner__image"
            src="milad-fakurian-seA-FPPXL-M-unsplash.jpg"
            alt="A bright blue and dark blue gradient"
          />
        </div>
        <Spacer y={4} />

        <h3 className="text-3xl font-bold dark:text-white">
          Empowering creators everywhere with a rich set of features
        </h3>
        <Spacer y={4} />
        <Divider />
        <br />
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4 ">
          <Card isBlurred={false}>
            <CardHeader>
              <h4 className="text-2xl font-bold dark:text-white flex flex-row items-center gap-2">
                <FaPencilAlt />
                Landing Page Designer
              </h4>
            </CardHeader>
            <CardBody>
              <Divider />
              <br />
              <p>
                Choose from 10 different design elements to easily tailor your
                landing page to your audience.
              </p>
            </CardBody>
          </Card>
          <Card isBlurred={false}>
            <CardHeader>
              <h4 className="text-2xl font-bold dark:text-white flex flex-row items-center gap-2">
                <FaLink />
                Up to 5 free links
              </h4>
            </CardHeader>
            <CardBody>
              <Divider />
              <Spacer y={4} />
              <p>
                Create and share up to 5 free landing pages at no cost. Perfect
                for individuals and creators.
              </p>
            </CardBody>
          </Card>
          <Card isBlurred={false}>
            <CardHeader>
              <h4 className="text-2xl font-bold dark:text-white flex flex-row items-center gap-2">
                <FaChartBar />
                Real Time Analytics
              </h4>
            </CardHeader>
            <CardBody>
              <Divider />
              <Spacer y={4} />
              <p>Explore how your audience interacts with your links.</p>
            </CardBody>
          </Card>
        </div>
        <Spacer y={4} />
        <Button
          color="primary"
          variant="solid"
          size="lg"
          className="ctaButton"
          endContent={<HiOutlineChevronDoubleRight />}
          as={Link}
          href="/register"
        >
          Start now
        </Button>
        <Spacer y={4} />
        <h3 className="text-3xl font-bold dark:text-white text-center">
          Connect with the brands you care about
        </h3>
        <Spacer y={4} />
        <Divider />
        <Marquee>
          <div className="brandLogo">
            <img
              className="brandLogo__image"
              src="/reddit.svg"
              alt="Reddit logo"
            />
          </div>
          <div className="brandLogo">
            <img
              className="brandLogo__image"
              src="/tiktok.svg"
              alt="Tiktok logo"
            />
          </div>
          <div className="brandLogo">
            <img
              className="brandLogo__image"
              src="/tumblr.svg"
              alt="Tumblr logo"
            />
          </div>
          <div className="brandLogo">
            <img
              className="brandLogo__image"
              src="/twitter.svg"
              alt="Twitter logo"
            />
          </div>
          <div className="brandLogo">
            <img
              className="brandLogo__image"
              src="/youtube.svg"
              alt="Youtube logo"
            />
          </div>
          <div className="brandLogo">
            <img
              className="brandLogo__image"
              src="/instagram.svg"
              alt="Instagram logo"
            />
          </div>
          <div className="brandLogo">
            <img
              className="brandLogo__image"
              src="/twitch.svg"
              alt="Twitch logo"
            />
          </div>
          <div className="brandLogo">
            <img className="brandLogo__image" src="/meta.svg" alt="Meta logo" />
          </div>
          <div className="brandLogo">
            <img
              className="brandLogo__image"
              src="/dribbble.svg"
              alt="Dribbble logo"
            />
          </div>
        </Marquee>
        <Spacer y={4} />
        <div className="grid grid-cols-2 gap-4">
          <div className="flex align-middle flex-col justify-center">
            <h3 className="text-3xl font-bold dark:text-white">
              By the way, we're Open-Source.
            </h3>
            <Spacer y={4} />
            <p>
              You can learn how to clone this application yourself on github.
            </p>
            <Spacer y={4} />
            <Button
              color="primary"
              variant="solid"
              size="lg"
              className="ctaButton"
              endContent={<FaGithub />}
              as={Link}
              href="https://github.com/MrWebMD/cloutcard"
              target="_blank"
            >
              Github
            </Button>
          </div>
          <div>
            <div
              style={{
                border: "5px solid #0070f0",
              }}
              className="imageFrame"
            >
              <img
                className="imageFrame__image"
                src="pankaj-patel-_SgRNwAVNKw-unsplash.jpg"
                alt="Javascript code displayed on a laptop screen"
              />
            </div>
          </div>
        </div>

        <Spacer y={4} />
      </main>
    </>
  );
}
