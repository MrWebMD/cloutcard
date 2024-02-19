import { AbuseForm } from "@/components/AbuseForm";
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
          <AbuseForm />
        </div>
      </main>
    </>
  );
}
