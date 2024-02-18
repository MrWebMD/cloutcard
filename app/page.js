import Image from "next/image";
import classNames from "classnames";
import { HeroSlider } from "@/components/HeroSlider";
import { Button } from "@nextui-org/react";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import { FaChartBar, FaGithub, FaLink, FaPencilAlt } from "react-icons/fa";
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
          <br />
          <br />
          <h1 className="text-5xl font-extrabold dark:text-white">
            <span style={{ color: "#66AAF9" }}>Amplify</span> Your Online
            Presence
          </h1>
          <br />
          <h4 className="text-2xl font-bold dark:text-white">
            Free Link-in-bio services tailored for musicians, artists, and
            gamers.
          </h4>
          <br />
          <Button
            color="primary"
            variant="solid"
            size="lg"
            className="header__ctaButton"
            displayRipple={true}
            displayAnimation={true}
            endContent={<HiOutlineChevronDoubleRight />}
          >
            Get Started for Free
          </Button>
        </div>
        <div className="twoColGrid__item">
          <HeroSlider />
        </div>
      </header>
      <main className="boundary">
        <div class="banner">
          <img
            className="banner__image"
            src="milad-fakurian-seA-FPPXL-M-unsplash.jpg"
          />
        </div>
        <br />

        <h3 class="text-3xl font-bold dark:text-white">
          Empowering creators everywhere with a rich set of features
        </h3>
        <br />
        <Divider />
        <br />
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4 ">
          <Card isBlurred={false}>
            <CardHeader>
              <h4 class="text-2xl font-bold dark:text-white flex flex-row items-center gap-2">
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
              <h4 class="text-2xl font-bold dark:text-white flex flex-row items-center gap-2">
                <FaLink />
                Up to 5 free links
              </h4>
            </CardHeader>
            <CardBody>
              <Divider />
              <br />
              <p>
                Create and share up to 5 free landing pages at no cost. Perfect
                for individuals and creators.
              </p>
            </CardBody>
          </Card>
          <Card isBlurred={false}>
            <CardHeader>
              <h4 class="text-2xl font-bold dark:text-white flex flex-row items-center gap-2">
                <FaChartBar />
                Real Time Analytics
              </h4>
            </CardHeader>
            <CardBody>
              <Divider />
              <br />
              <p>Explore how your audience interacts with your links.</p>
            </CardBody>
          </Card>
        </div>
        <br />
        <Button
          color="primary"
          variant="solid"
          size="lg"
          className="ctaButton"
          displayRipple={true}
          displayAnimation={true}
          endContent={<HiOutlineChevronDoubleRight />}
        >
          Start now
        </Button>
        <br />
        <br />
        <h3 class="text-3xl font-bold dark:text-white text-center">
          Connect with the brands you care about
        </h3>
        <br />
        <Divider />
        <Marquee>
          <div className="brandLogo">
            <img class="brandLogo__image" src="/reddit.svg" />
          </div>
          <div className="brandLogo">
            <img class="brandLogo__image" src="/tiktok.svg" />
          </div>
          <div className="brandLogo">
            <img class="brandLogo__image" src="/tumblr.svg" />
          </div>
          <div className="brandLogo">
            <img class="brandLogo__image" src="/twitter.svg" />
          </div>
          <div className="brandLogo">
            <img class="brandLogo__image" src="/youtube.svg" />
          </div>
          <div className="brandLogo">
            <img class="brandLogo__image" src="/instagram.svg" />
          </div>
          <div className="brandLogo">
            <img class="brandLogo__image" src="/twitch.svg" />
          </div>
          <div className="brandLogo">
            <img class="brandLogo__image" src="/meta.svg" />
          </div>
          <div className="brandLogo">
            <img class="brandLogo__image" src="/dribbble.svg" />
          </div>
        </Marquee>
        <br />
        <br />
        <div className="grid grid-cols-2 gap-4">
          <div className="flex align-middle flex-col justify-center">
            <h3 class="text-3xl font-bold dark:text-white">
              By the way, we're Open-Source.
            </h3>
            <br />
            <p>
              You can learn how to clone this application yourself on github.
            </p>
            <br />
            <Button
              color="primary"
              variant="solid"
              size="lg"
              className="ctaButton"
              displayRipple={true}
              displayAnimation={true}
              endContent={<FaGithub />}
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
              />
            </div>
          </div>
        </div>

        <br />
      </main>
    </>
  );
}
