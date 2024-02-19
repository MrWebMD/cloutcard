import { Button, Input } from "@nextui-org/react";
import { Spacer } from "@nextui-org/react";
import { FaUser } from "react-icons/fa";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import Link from "next/link";

export const metadata = {
  title: "CloutCard - Register",
  description: "Create an account",
};

export default function Register() {
  return (
    <>
      <main className="boundary formPage">
        <div className="w-full">
          <Spacer y={4} />
          <h1 className="text-5xl font-bold text-center">CloutCard</h1>
          <Spacer y={4} />
          <Card isBlurred={false} className="loginForm p-3">
            <CardHeader>
              <h4 className="text-2xl font-bold dark:text-white flex flex-row items-center gap-2 justify-center w-full">
                <FaUser />
                Register
              </h4>
            </CardHeader>
            <CardBody>
              <Divider />
              <Spacer y={4} />
              <Input
                type="email"
                label="Email"
                placeholder="Enter your email"
                autoFocus
              />
              <Spacer y={4} />
              <Input
                type="password"
                label="Password"
                placeholder="Enter your password"
              />
              <Spacer y={4} />
              <Input
                type="password"
                label="Password"
                placeholder="Confirm your password"
              />
              <Spacer y={4} />
              <Button
                color="primary"
                variant="solid"
                size="lg"
                className="header__ctaButton"
                startContent={<FaUser />}
              >
                Register
              </Button>
              <Spacer y={4} />
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
