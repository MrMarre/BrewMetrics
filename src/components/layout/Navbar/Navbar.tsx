import React from "react";
import Link from "next/link";
import { CoffeeIcon } from "lucide-react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export function NavBar() {
  return (
    <header className="border-b px-4 bg-[var(--tertiary)] sticky top-0 z-50">
      <div className="flex items-center justify-center  gap-2">
        <div className="hidden sm:block">
          <Link href="/">
            <CoffeeIcon className="mr-auto md:size-9 lg:size-10 auto cursor-pointer" />
          </Link>
        </div>
        <DesktopNav />
      </div>

      <MobileNav />
    </header>
  );
}
