import React from "react";
import { CoffeeIcon } from "lucide-react";
import MobileDrawer from "./MobileDrawer";

export default function MobileNav() {
  return (
    <div className="flex sm:hidden w-full items-center justify-between">
      <MobileDrawer />
      <CoffeeIcon className="ml-auto mb-2 h-7 w-7" />
    </div>
  );
}
