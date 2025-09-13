import React, { useEffect, useRef, useState } from "react";

import Link from "next/link";
import MobileDrawer from "./MobileDrawer";
import { CoffeeIcon, Hammer } from "lucide-react";

export function NavBar() {
  const [toolsOpen, setToolsOpen] = useState(false);
  const toolsRef = useRef<HTMLLIElement>(null);

  // handles click outside of dropdown in desktop view
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        toolsRef.current &&
        !toolsRef.current.contains(event.target as Node)
      ) {
        setToolsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="border-b px-4 bg-[var(--tertiary)] sticky top-0 z-50">
      <div className="flex items-center justify-center  pt-2 pb-2 gap-2">
        {/* Desktop Navigation */}
        <div className="hidden sm:block">
          <CoffeeIcon className="mr-auto" />
        </div>
        <nav className="hidden sm:flex ml-auto">
          <ul className="flex items-center ">
            <li className="h-full">
              <Link
                href="/"
                className="flex items-center h-full px-3 py-3 rounded-lg transition-all duration-300 hover:bg-violet-400"
              >
                Home
              </Link>
            </li>
            <li className="h-full">
              <Link
                href="/about"
                className="flex items center px-3 py-3 rounded-lg transition-colors duration-300 hover:bg-violet-400"
              >
                About
              </Link>
            </li>
            <li ref={toolsRef} className="relative">
              <button
                onClick={() => setToolsOpen((prev) => !prev)}
                className="px-3 py-2.5 rounded-md transition-colors duration-300 hover:bg-violet-400"
              >
                Tools
              </button>
              {toolsOpen && (
                <div
                  className="
                    absolute 
                    left-[-113px]
                    top-10
                    mt-2 
                    w-48
                    bg-white 
                    border 
                    rounded-md 
                    shadow-lg 
                    z-10
                  "
                >
                  <ul className="shadow-lg">
                    <li>
                      <Link
                        href="/calculator"
                        onClick={() => setToolsOpen(false)}
                        className="block px-4 py-2 transition-colors duration-300 hover:bg-violet-400"
                      >
                        Brew Ratio Calculator
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        onClick={() => setToolsOpen(false)}
                        className="flex items-center px-4 py-2 transition-colors duration-300 hover:bg-red-300"
                      >
                        Brew Timer <Hammer className="ml-auto h-4.5 w-4.5" />
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex sm:hidden w-full items-center justify-between">
        {/* Renders on smaller units */}
        <MobileDrawer />
        <CoffeeIcon className="ml-auto mb-2 h-7 w-7" />
      </div>
    </header>
  );
}
