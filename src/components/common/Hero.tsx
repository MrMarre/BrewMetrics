import Image from "next/image";
import balancingCups from "@public/assets/images/nathan-dumlao.jpg";
import { Button } from "../ui/button";
import Link from "next/link";
import { Heading } from "../ui/heading";

export default function Hero() {
  return (
    <section className="max-w-full flex flex-col md:flex-row justify-between items-center gap-5 mt-6">
      <div className="w-full md:w-1/2 flex flex-col gap-5">
        <article className="prose max-w-prose font-">
          <Heading as="h3" className="text-2xl text-left">
            Every coffee enthusiast&#39;s journey leads to moments of pursuit —
            the quest for the perfectly balanced cup. That&#39;s where the Brew
            Ratio Calculator steps in.
          </Heading>
        </article>
        <Button
          variant="outline"
          className="bg-[var(--accent)] text-[var(--foreground)] transition-colors duration-300 hover:bg-[var(--accent-light)] font-semibold py-4 w-full md:w-1/2"
        >
          <Link href="/calculator">To Calculator</Link>
        </Button>
      </div>
      <div className="w-full md:w-1/2">
        <Image
          src={balancingCups}
          alt="Cups balancing on a table"
          className="rounded"
        />
      </div>
    </section>
  );
}
