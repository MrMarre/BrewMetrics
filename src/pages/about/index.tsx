import NewSectionCard from "@/components/common/NewSectionCard";
import SvgImage from "@/components/common/SvgImage";
import { Button } from "@/components/ui/button";
import { coffeeMugHeart } from "@public/assets/svg";
import Link from "next/link";

export default function About() {
  return (
    <div className="container flex flex-col items-center justify-center w-full px-4 py-8 mx-auto lg:w-3/4 ">
      <NewSectionCard
        title="About"
        disableDefaultMaxWidth
        className="flex flex-col items-center w-full gap-4"
      >
        <p>
          My coffee journey started with a simple realization—some cups tasted
          great, while others fell flat. I was using the same coffee and brewing
          method, yet the results were inconsistent. That curiosity led me to a
          small but powerful change: weighing my coffee and water. Almost
          instantly, my brews improved, and I started to understand the impact
          of precision.
        </p>
        <p>
          That sparked a deeper interest in brewing techniques and how small
          adjustments could transform a cup of coffee. I dove into learning
          about grind size, extraction, and brewing ratios, eager to refine my
          process. Eventually, I took the next step and bought my first manual
          coffee grinder, unlocking a whole new level of control over flavor and
          freshness. As my passion grew, I started experimenting with different
          brewing methods—pour-overs, AeroPress, Moka pots and a manual espresso
          maker—each offering its own unique experience and challenges.
        </p>
        <p>
          This site is a reflection of that journey—a place to share what
          I&apos;ve learned and help others discover the joy of making
          consistently great coffee. Whether you&apos;re just starting out or
          looking to fine-tune your skills, I hope this space helps you brew
          with confidence and curiosity. Let&apos;s make every cup count!
        </p>

        <Button
          variant="outline"
          className="bg-[var(--accent)] text-[var(--foreground)] transition-colors duration-300 hover:bg-[var(--accent-light)] font-semibold py-4 w-full md:w-1/2 my-5"
        >
          <Link href="/calculator">To Calculator</Link>
        </Button>
        <SvgImage
          src={coffeeMugHeart}
          alt="coffee mug with heart"
          width={100}
          height={100}
        />
      </NewSectionCard>
    </div>
  );
}
