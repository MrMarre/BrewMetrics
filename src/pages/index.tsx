import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <main className="container mx-auto flex flex-col gap-12">
        {/* Top Section: 50% Button / 50% Image */}
        <section className="grid grid-cols-2 gap-4 items-center">
          <div className="flex justify-center">
            <Link
              href="/calculator"
              className="block w-[vw-50] text-center rounded-full border transition-colors bg-[var(--accent)] 
							 dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 py-2"
            >
              To Calculator
            </Link>
          </div>
          <div>
            {/* Replace with your image path */}
            <img
              src="/path/to/your/image.jpg"
              alt="Coffee illustration"
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
        </section>

        {/* Grid Section 1: Three Columns */}
        <section className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-gray-100 rounded">Item 1</div>
          <div className="p-4 bg-gray-100 rounded">Item 2</div>
          <div className="p-4 bg-gray-100 rounded">Item 3</div>
        </section>

        {/* Grid Section 2: Two Columns */}
        <section className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-gray-100 rounded">Item 4</div>
          <div className="p-4 bg-gray-100 rounded">Item 5</div>
        </section>

        {/* Grid Section 3: Three Columns */}
        <section className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-gray-100 rounded">Item 6</div>
          <div className="p-4 bg-gray-100 rounded">Item 7</div>
          <div className="p-4 bg-gray-100 rounded">Item 8</div>
        </section>
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
