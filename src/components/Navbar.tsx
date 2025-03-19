import React, { useEffect, useRef, useState } from "react"

import Link from "next/link";

export function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const toolsRef = useRef<HTMLLIElement>(null);

  
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (toolsRef.current && !toolsRef.current.contains(event.target as Node)) {
        setToolsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="border-b px-4 sm:px-10 lg:px-18">
      <div className="flex items-center justify-between">
        {/* Desktop Navigation */}
        <nav className="hidden sm:flex ml-auto">
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/" className="px-3 py-2 rounded-md hover:bg-[var(--accent)]">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="px-3 py-2 rounded-md hover:bg-[var(--accent)]"
              >
                About
              </Link>
            </li>
            <li ref={toolsRef} className="relative">
              <button
                onClick={() => setToolsOpen((prev) => !prev)}
                className="px-3 py-2 rounded-md focus:outline-none hover:bg-[var(--accent)]"
              >
                Tools
              </button>
              {toolsOpen && (
                <div
                  className="
                    absolute 
                    left-1/2 
                    transform 
                    -translate-x-1/2 
                    mt-2 
                    w-48 
                    bg-white 
                    border 
                    rounded-md 
                    shadow-lg 
                    z-10
                  "
                >
                  <ul>
                    <li>
                      <Link
                        href="/calculator"
                        className="block px-4 py-2 hover:bg-[var(--accent)]"
                      >
                        Brew Ratio Calculator
                      </Link>
                    </li>
                    <li>
                      <Link href="/"
                      className="block px-4 py-2 hover:bg-[var(--accent)]">
                        Brew Timer</Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="sm:hidden px-2 py-1 border rounded-md"
          aria-label="Toggle Menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileOpen && (
        <nav className="sm:hidden mt-4">
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                href="/"
                className="px-3 py-2 rounded-md hover:bg-[var(--accent)]"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="px-3 py-2 rounded-md hover:bg-[var(--accent)]"
                onClick={() => setMobileOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <button
                onClick={() => setToolsOpen((prev) => !prev)}
                className="px-3 py-2 rounded-md w-full text-left hover:bg-[var(--accent)] focus:outline-none"
              >
                Tools
              </button>
              {toolsOpen && (
                <ul className="ml-4 mt-2 border-l pl-2">
                  <li>
                    <Link
                      href="/calculator"
                      className="block px-3 py-2 hover:bg-[var(--accent)]"
                      onClick={() => {
                        setMobileOpen(false);
                        setToolsOpen(false);
                      }}
                    >
                      Brew Ratio Calculator
                    </Link>
                  </li>
                  {/* Additional mobile tool links go here */}
                </ul>
              )}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

// export function NavBar() {
//   const [mobileOpen, setMobileOpen] = useState(false)

//   return (
//     <header className="border-b px-4 sm:px-10 lg:px-18">
//       <div className="flex items-center justify-between">
//         {/* Desktop Navigation */}
//         <nav className="ml-auto hidden sm:block">
//           <NavigationMenu>
//             <NavigationMenuList className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
//               <NavigationMenuItem>
//                 <NavigationMenuLink href="/">Home</NavigationMenuLink>
//               </NavigationMenuItem>
//               <NavigationMenuItem>
//                 <NavigationMenuLink href="/about">About</NavigationMenuLink>
//               </NavigationMenuItem>
//               <NavigationMenuItem>
//                 <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
//                 <NavigationMenuContent>
//                   <NavigationMenuLink href="/calculator">
//                     Brew Ratio Calculator
//                   </NavigationMenuLink>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>
//             </NavigationMenuList>
//             <NavigationMenuIndicator />
//           </NavigationMenu>
//         </nav>

       
//         <button
//           className="block sm:hidden"
//           aria-label="Open Menu"
//           onClick={() => setMobileOpen(!mobileOpen)}
//         >
//           {mobileOpen ? "Close" : "Menu"}
//         </button>
//       </div>

      
//       {mobileOpen && (
//         <nav className="sm:hidden mt-4">
//           <NavigationMenu>
//             <NavigationMenuList className="flex flex-col items-center gap-2">
//               <NavigationMenuItem>
//                 <NavigationMenuLink href="/" onClick={() => setMobileOpen(false)}>
//                   Home
//                 </NavigationMenuLink>
//               </NavigationMenuItem>
//               <NavigationMenuItem>
//                 <NavigationMenuLink href="/about" onClick={() => setMobileOpen(false)}>
//                   About
//                 </NavigationMenuLink>
//               </NavigationMenuItem>
//               <NavigationMenuItem>
//                 <NavigationMenuLink href="/calculator" onClick={() => setMobileOpen(false)}>
//                   Brew Ratio Calculator
//                 </NavigationMenuLink>
//               </NavigationMenuItem>
//             </NavigationMenuList>
//           </NavigationMenu>
//         </nav>
//       )}
//     </header>
//   )
// }