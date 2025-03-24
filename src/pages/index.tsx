import SectionCard from "@/components/common/SectionCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <main className="container mx-auto flex flex-col gap-12">
        {/* Top Section: 50% Button / 50% Image */}
        <SectionCard
          disableDefaultMaxWidth
          className="max-w-full flex flex-col md:flex-row justify-between items-center"
        >
          <div className="w-full md:w-1/2">
            <p>
              In each coffee enthusiast&#39;s journey, there comes a time when
              they want to brew the perfect cup of coffee. This is where the
              Brew Ratio Calculator comes in.
            </p>
            <Button className="bg-[var(--accent)] text-[var(--foreground)] transition-colors duration-300 hover:bg-[var(--accent-light)]">
              <Link href="/calculator">To Calculator</Link>
            </Button>
          </div>
          <div>
            {/* Replace with your image path */}
            <img
              src="/path/to/your/image.jpg"
              alt="Coffee illustration"
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
        </SectionCard>

        {/* Grid Section 1: Three Columns */}
        <SectionCard disableDefaultMaxWidth className="max-w-full md:flex-row">
          <article className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-100 rounded">Item 1</div>
            <div className="p-4 bg-gray-100 rounded">Item 2</div>
            <div className="p-4 bg-gray-100 rounded">Item 3</div>
          </article>
        </SectionCard>
        <SectionCard disableDefaultMaxWidth className="max-w-full md:flex-row">
          {/* Grid article 2: Two Columns */}
          <article className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div className="p-4 bg-gray-100 rounded">Item 4</div>
            <div className="p-4 bg-gray-100 rounded">Item 5</div>
          </article>
        </SectionCard>
        {/* Grid article 3: Three Columns */}
        <SectionCard disableDefaultMaxWidth className="max-w-full md:flex-row">
          <article className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-100 rounded">Item 6</div>
            <div className="p-4 bg-gray-100 rounded">Item 7</div>
            <div className="p-4 bg-gray-100 rounded">Item 8</div>
          </article>
        </SectionCard>
      </main>
    </div>
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
