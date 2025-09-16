import Link from "next/link";
import React, { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <li className="h-full">
      <Link
        href={href}
        className="flex items-center h-full px-3 py-3 rounded-lg transition-all duration-300 hover:bg-violet-400"
      >
        {children}
      </Link>
    </li>
  );
}
