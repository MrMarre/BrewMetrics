import Image from "next/image";
import balancingCups from "@public/assets/images/nathan-dumlao.jpg";
import { Button } from "../ui/button";
import Link from "next/link";
import { Heading } from "../ui/heading";
export default function Hero() {
  return (
    <section className="max-w-full flex flex-col md:flex-row justify-between items-center gap-5 mt-6 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl p-8  bg-[var(--secondary)]">
      <div className="flex flex-col items-start w-full gap-5 md:w-7/12 ">
        {/* fix here for spacing of the left container */}
        <aside className="w-full gap-6 space-between">
          <Heading
            as="h1"
            className="font-serif text-2xl text-left md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl"
          >
            BrewMetrics: Perfect Your Coffee
          </Heading>
          <Heading
            as="h3"
            className="text-lg text-left md:text-xl lg:text-xl xl:text-3xl"
          >
            Every coffee enthusiast&#39;s journey leads to moments of pursuit —
            the quest for the perfectly balanced cup. That&#39;s where the Brew
            Ratio Calculator steps in.
          </Heading>
        </aside>
        <div className="flex flex-row items-start w-full gap-3 md:flex-col md:w-auto">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full md:w-auto font-semibold bg-[var(--accent)]  
            text-[var(--foreground)] transition-colors duration-300
             hover:bg-[var(--accent-light)] rounded-lg shadow-md 
             hover:shadow-lg transform hover:-translate-y-0.5
             h-12 md:h-14 lg:h-16 px-6 md:px-8 lg:px-10 text-base md:text-lg lg:text-xl "
          >
            <Link href="/calculator" className="block w-full">
              Start Brewing Smarter
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="hidden md:inline-flex justify-start bg-[var(--accent)] text-[var(--foreground)] hover:bg-[var(--accent-light)] font-semibold"
          >
            <Link href="/about" className="block w-full text-center md:w-auto">
              Learn More
            </Link>
          </Button>
        </div>
      </div>
      <aside className="w-full md:w-1/2">
        <Image
          src={balancingCups}
          priority
          alt="Cups balancing on a table"
          className="rounded"
        />
      </aside>
    </section>
  );
}
