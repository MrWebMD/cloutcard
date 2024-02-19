import { Button, Input } from "@nextui-org/react";
import { FaExclamationTriangle, FaPencilAlt, FaUser } from "react-icons/fa";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import Link from "next/link";
import { Spacer } from "@nextui-org/react";

export const metadata = {
  title: "CloutCard - Login",
  description: "Sign in to your account",
};

export default function Report() {
  return (
    <>
      <main className="boundary formPage">
        <div className="w-full">
          <Spacer y={4} />
          <h1 className="text-5xl font-bold text-center">CloutCard</h1>
          <Spacer y={4} />
          <Card isBlurred={false} className="loginForm">
            <CardHeader>
              <h4 className="text-2xl font-bold dark:text-white flex flex-row items-center gap-2 justify-center w-full">
                <FaExclamationTriangle />
                Report
              </h4>
            </CardHeader>
            <CardBody>
              <Divider />
              <Spacer y={4} />
              <p>Please enter the link of the offending page</p>
              <Spacer y={4} />
              <Input
                type="text"
                label="Page URL"
                placeholder="https://cloutcard.io/u/username"
                autoFocus
              />
              <Spacer y={4} />
              <Button
                color="primary"
                variant="solid"
                size="lg"
                className="header__ctaButton"
                startContent={<FaPencilAlt />}
              >
                Submit Report
              </Button>
              <Spacer y={4} />
            </CardBody>
          </Card>
        </div>
      </main>
    </>
  );
}
