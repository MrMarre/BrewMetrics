import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export default function Home() {
	return (
		<div
			className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
		>
			
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start ">
				<h1 className="text-lg">
					Welcome to my page, lets brew the perfect cup of coffee
				</h1>

				<div className="flex gap-4 items-center  flex-col sm:flex-row font-semibold">
					<Link
						href="/calculator"
						className="rounded-full border border-solid transition-colors bg-[--primary] flex items-center justify-center  gap-2 bg-[--accent] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
					>
						Join me
					</Link>
				</div>
				
			</main>
		</div>
	);
}
