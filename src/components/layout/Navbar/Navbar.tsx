import React from "react";
import Link from "next/link";
import { CoffeeIcon } from "lucide-react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export function NavBar() {
  return (
    <header className="border-b px-4 bg-[var(--tertiary)] sticky top-0 z-50">
      <div className="flex items-center justify-center  gap-2">
        {/* Desktop Navigation */}
        <div className="hidden sm:block">
          <Link href="/">
            <CoffeeIcon className="mr-auto cursor-pointer" />
          </Link>
        </div>
        <DesktopNav />
      </div>

      {/* Mobile Navigation */}
      <MobileNav />
    </header>
  );
}
