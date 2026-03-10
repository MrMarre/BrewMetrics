import Image from "next/image";
import balancingCups from "@public/assets/images/nathan-dumlao.jpg";
import { Button } from "../ui/button";
import Link from "next/link";
import { Heading } from "../ui/heading";
export default function Hero() {
  return (
    <section className="max-w-full flex flex-col md:flex-row justify-between items-center gap-5 mt-6 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl p-8  bg-[var(--secondary)]">
      <div className="w-full md:w-7/12 flex flex-col items-start gap-5 ">
        <article className="flex flex-col gap-5">
          <Heading
            as="h1"
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-serif text-left"
          >
            BrewMetrics: Perfect Your Coffee
          </Heading>
          <Heading
            as="h3"
            className="text-lg md:text-xl lg:text-xl xl:text-3xl text-left"
          >
            Every coffee enthusiast&#39;s journey leads to moments of pursuit —
            the quest for the perfectly balanced cup. That&#39;s where the Brew
            Ratio Calculator steps in.
          </Heading>
        </article>
        <div className="flex flex-row md:flex-col items-center gap-3 w-full md:w-auto">
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
            {/* bg-emerald-600 text-white px-6 py-3 rounded-full
  hover:bg-emerald-700 transition-all duration-200 shadow */}
            <Link href="/calculator" className="w-full block text-center">
              Start Brewing Smarter
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="hidden md:inline-flex bg-[var(--accent)] text-[var(--foreground)] hover:bg-[var(--accent-light)] font-semibold"
          >
            <Link href="/about" className="w-full md:w-auto block text-center">
              Learn More
            </Link>
          </Button>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <Image
          src={balancingCups}
          priority
          alt="Cups balancing on a table"
          className="rounded"
        />
      </div>
    </section>
  );
}
