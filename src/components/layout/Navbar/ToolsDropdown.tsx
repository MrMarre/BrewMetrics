import Link from "next/link";
import { Hammer } from "lucide-react";

interface ToolsDropdownProps {
  onClose: () => void;
}

export default function ToolsDropdown({ onClose }: ToolsDropdownProps) {
  return (
    <div
      className="
        absolute 
        right-0 
        mt-2
        translate-x-0
        w-max min-w-[12rem]
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
            onClick={onClose}
            className="block px-4 py-2 transition-colors duration-300 hover:bg-violet-400"
          >
            Brew Ratio Calculator
          </Link>
        </li>
        <li>
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center px-4 py-2 transition-colors duration-300 hover:bg-red-300"
          >
            Brew Timer <Hammer className="ml-auto h-4.5 w-4.5" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
