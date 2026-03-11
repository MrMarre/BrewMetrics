import React from "react";
import { CoffeeIcon } from "lucide-react";
import MobileDrawer from "./MobileDrawer";

export default function MobileNav() {
  return (
    <div className="flex items-center justify-between w-full sm:hidden">
      <MobileDrawer />
      <CoffeeIcon className="mb-2 ml-auto h-7 w-7" />
    </div>
  );
}
