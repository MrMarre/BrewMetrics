import SectionCard from "@/components/common/SectionCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import Link from "next/link";
import { Heading } from "@/components/ui/heading";
import SvgImage from "@/components/common/SvgImage";
import { coffeeMaker, coffeeScale } from "@public/assets/svg";
import Head from "next/head";
import SeoHead from "@/components/common/SeoHead";
import Hero from "@/components/common/Hero";

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

        <SectionCard disableDefaultMaxWidth className="max-w-full ">
          <article className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex justify-center items-center flex-col md:flex-row gap-4">
              <p className="self-start">
                Brewing perfections starts here. Our intuitive coffe-to-water
                ratio calculator empowers you to fine-tune every cup to your
                taste. Effortlessly adjust serving sizes and strength to unlock
                the perfect brew.
              </p>
              <SvgImage
                src={coffeeMaker}
                alt="auto drip brewer"
                height={60}
                width={60}
              />
            </div>
            <div className="flex justify-center items-center flex-col md:flex-row gap-4">
              <p className="bg-gray-100 rounded self-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                magnam distinctio cum voluptatem, cupiditate, explicabo unde
                repudiandae, consequatur delectus omnis quod veniam dolores
                veritatis id dolore.
              </p>
              <SvgImage src={coffeeScale} alt="scale" height={60} width={60} />
            </div>
          </article>
        </SectionCard>
        <SectionCard disableDefaultMaxWidth className="max-w-full md:flex-row">
          <article className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div className=" bg-gray-100 rounded">Item 4</div>
            <div className=" bg-gray-100 rounded">Item 5</div>
          </article>
        </SectionCard>

        <SectionCard disableDefaultMaxWidth className="max-w-full md:flex-row">
          <article className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className=" bg-gray-100 rounded">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
              blanditiis amet? Totam nesciunt doloribus sunt impedit magnam
              quasi est officia.
            </div>
            <div className=" bg-gray-100 rounded">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
              veniam rem error, sit ea eveniet dolorum consequuntur suscipit
              magni ipsam obcaecati inventore perferendis quae velit ratione
              ipsum neque soluta temporibus!
            </div>
            <div className=" bg-gray-100 rounded">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias ab nulla, laborum omnis quis voluptate.
            </div>
          </article>
        </SectionCard>
      </main>
      );
    </>
  );
}
