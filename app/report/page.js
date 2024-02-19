import { AbuseForm } from "@/components/AbuseForm";
import { Spacer } from "@nextui-org/react";
import Head from "next/head";

export default function Report() {
  return (
    <>
      <Head>
        <meta content="CloutCard | Report" property="og:title" />
        <meta name="description" content="Report a page"></meta>
      </Head>
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
