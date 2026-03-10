import Image from "next/image";
import balancingCups from "@public/assets/images/nathan-dumlao.jpg";
import { Button } from "../ui/button";
import Link from "next/link";
import { Heading } from "../ui/heading";
export default function Hero() {
  return (
    <section className="max-w-full flex flex-col md:flex-row justify-between items-center gap-5 mt-6">
      <div className="w-full md:w-1/2 flex flex-col gap-5 shadow-xl rounded-2xl p-8 md:p-12 bg-[var(--secondary)]">
        {/* rounded-3xl

          shadow-xl (soft, diffused) 

          bg-white or a subtle tinted color (#fefbf7, #faf4ef, etc.)

          p-8 md:p-12 */}
        <article className="flex flex-col gap-5">
          <Heading
            as="h1"
            className="text-2xl md:text-4xl lg:text-4xl font-serif text-left"
          >
            BrewMetrics: Perfect Your Coffee
          </Heading>
          <Heading as="h3" className="text-1xl md:text-3xl text-left">
            Every coffee enthusiast&#39;s journey leads to moments of pursuit —
            the quest for the perfectly balanced cup. That&#39;s where the Brew
            Ratio Calculator steps in.
          </Heading>
        </article>
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full md:w-auto font-semibold bg-[var(--accent)] text-[var(--foreground)] transition-colors duration-300 hover:bg-[var(--accent-light)]"
          >
            <Link href="/calculator" className="w-full block text-center">
              Start Brewing Smarter
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="hidden bg-[var(--accent)] font-semibold lg:inline-flex"
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
