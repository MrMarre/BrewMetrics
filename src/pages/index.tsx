import { Heading } from "@/components/ui/heading";
import SvgImage from "@/components/common/SvgImage";
import { coffeeMaker, coffeeScale } from "@public/assets/svg";
import SeoHead from "@/components/common/SeoHead";
import Hero from "@/components/common/Hero";
import NewSectionCard from "@/components/common/NewSectionCard";

export default function Home() {
  return (
    <>
      <SeoHead
        title="BrewMetrics | The Perfect Brew Ratio Calculator"
        description="Calculate the perfect coffee-to-water ratio for your brew with our simple, intuitive, and flexible tools."
        keywords="coffee, brew ratio, calculator, perfect brew, coffee measurement, recipe, tools, tooling, coffee brewing, coffee brewing tools"
        url="https://brew-metrics.vercel.app/"
      />
      <main className="container mx-auto flex flex-col gap-12 w-full sm:w-3/4 md:w-3/4  px-4 py-8">
        <Heading as="h1" className="text-4xl font-serif">
          BrewMetrics
        </Heading>
        <Hero />

        <NewSectionCard
          title="Welcome!"
          disableDefaultMaxWidth
          className="max-w-full"
        >
          <article className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex  items-center flex-col gap-4">
              <SvgImage
                src={coffeeMaker}
                alt="auto drip brewer"
                height={60}
                width={60}
              />
              <p className="self-start">
                Looks like you&apos;ve stumbled upon coffee paradise! Get ready
                to tweak, sip, and perfect your brew with our easy-to-use
                tools—because life&apos;s too short for bad coffee!
              </p>
            </div>
            <div className="flex  items-center flex-col gap-4">
              <SvgImage src={coffeeScale} alt="scale" height={60} width={60} />
              <p className="rounded self-start">
                Brewing perfections starts here. Our intuitive coffee-to-water
                ratio calculator empowers you to fine-tune every cup to your
                taste. Effortlessly adjust serving sizes and strength to unlock
                the perfect brew.
              </p>
            </div>
          </article>
        </NewSectionCard>
        <NewSectionCard
          title="About the Trusty Coffee Spoon"
          disableDefaultMaxWidth
          className="max-w-full md:flex-row"
        >
          <article className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p className="">
              The habitual act of using a coffee scoop as a measurement may lead
              to unwanted inconsistencies in regards to the variance of roast
              levels, grind sizes but mainly depending on the human factor
              <span className="font-bold">
                - it&apos;s basically impossible to measure coffee consistently
                by hand.
              </span>
            </p>
            <p className="">
              Ditching the coffee scoop in favor of weighing your coffee and
              water leads to more consistent and better-tasting brews. By using
              a scale, you ensure consistent coffee-to-water ratio, leading to
              balanced flavors and eliminating guesswork.
            </p>
          </article>
        </NewSectionCard>

        <NewSectionCard
          title="Purpose"
          disableDefaultMaxWidth
          className="max-w-full md:flex-row"
        >
          <article className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <p>
              This site is dedicated to helping coffee lovers brew better coffee
              with precision and confidence. Whether you&apos;re a beginner or
              an experienced home barista, you&apos;ll find tools and tips to
              elevate your coffee-making skills.
            </p>
            <p>
              We emphasize the importance of accuracy in coffee brewing by
              promoting the use of scales, proper ratios, and consistent
              techniques. Our site offers an easy-to-use calculator and
              step-by-step instructions to help you fine-tune your process. By
              understanding the science behind coffee extraction, you can
              achieve a balanced and flavorful brew every time.
            </p>
            <p>
              Beyond brewing, this site is a community for coffee enthusiasts to
              explore new methods, share insights, and refine their craft.
              Whether you&apos;re experimenting with grind size, water
              temperature, or brewing time, we aim to be your go-to resource for
              all things coffee. Join us in making every cup count!
            </p>
          </article>
        </NewSectionCard>
      </main>
    </>
  );
}
