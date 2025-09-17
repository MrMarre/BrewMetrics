import React, { useEffect, useRef, useState } from "react";
import ToolsDropdown from "./ToolsDropdown";
import NavLink from "./NavLink";

export default function DesktopNav() {
  const [toolsOpen, setToolsOpen] = useState(false);
  const toolsRef = useRef<HTMLLIElement>(null);

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
    <nav className="hidden sm:flex ml-auto">
      <ul className="flex items-center">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>

        <li ref={toolsRef} className="relative">
          <button
            onClick={() => setToolsOpen((prev) => !prev)}
            className="px-3 py-2.5 rounded-md transition-colors duration-300 hover:bg-violet-400"
          >
            Tools
          </button>
          {toolsOpen && <ToolsDropdown onClose={() => setToolsOpen(false)} />}
        </li>
      </ul>
    </nav>
  );
}
