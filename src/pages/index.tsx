import SectionCard from "@/components/common/SectionCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import balancingCups from "@public/assets/images/nathan-dumlao.jpg";
import Link from "next/link";
import { Heading } from "@/components/ui/heading";

export default function Home() {
  return (
    <main className="container p-8 mx-auto flex flex-col gap-12 w-full md:w-3/4">
      <section className="max-w-full flex flex-col md:flex-row justify-between items-center gap-5">
        <div className="w-full md:w-1/2 flex flex-col gap-5">
          <article className="prose max-w-prose font-">
            <Heading as="h3" className="text-2xl text-left">
              Every coffee enthusiast&#39;s journey leads to a moment of pursuit
              — the quest for the perfectly balanced cup. That&#39;s where the
              Brew Ratio Calculator steps in.
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
          <Image src={balancingCups} alt="Cups balancing on a table" />
        </div>
      </section>

      <SectionCard disableDefaultMaxWidth className="max-w-full md:flex-row">
        <article className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-100 rounded">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
            sapiente pariatur, eos repudiandae id consequatur inventore est
            deleniti laborum alias ipsam autem temporibus adipisci dolores, ex
            nam ipsum?
          </div>
          <div className="bg-gray-100 rounded">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            provident dicta rem officia doloremque nulla, fugiat ducimus quas,
            numquam excepturi laboriosam ex deleniti cum maiores harum. Illo,
            corporis cupiditate incidunt architecto soluta quam sapiente,
            maiores praesentium fugit eum voluptas saepe quas natus recusandae
            iste ratione?
          </div>
          <div className="bg-gray-100 rounded">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi eaque
            aliquid animi perspiciatis ut iusto dolore, non consequatur velit ad
            impedit labore optio assumenda laborum. Deserunt labore numquam eos
            amet exercitationem iure porro sapiente odit, esse expedita autem
            aspernatur atque?
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
            blanditiis amet? Totam nesciunt doloribus sunt impedit magnam quasi
            est officia.
          </div>
          <div className=" bg-gray-100 rounded">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
            veniam rem error, sit ea eveniet dolorum consequuntur suscipit magni
            ipsam obcaecati inventore perferendis quae velit ratione ipsum neque
            soluta temporibus!
          </div>
          <div className=" bg-gray-100 rounded">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            ab nulla, laborum omnis quis voluptate.
          </div>
        </article>
      </SectionCard>
    </main>
  );
}

// return (
// 	<div
// 	  className={
// 		"grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20"
// 	  }
// 	>
// 	  <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start ">
// 		<h1 className="text-xl">
// 		  Welcome to my page, lets brew the perfect cup of coffee
// 		</h1>

// 		<div className="flex gap-4 items-center  flex-col sm:flex-row font-semibold">
// 		  <Link
// 			href="/calculator"
// 			className="rounded-full border border-solid transition-colors bg-[var(--accent)] flex items-center justify-center  gap-2  dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
// 		  >
// 			To Calculator
// 		  </Link>
// 		</div>
// 	  </main>
// 	</div>
//   );
// }
