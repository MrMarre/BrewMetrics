import React from "react";
import { CoffeeIcon } from "lucide-react";
import MobileDrawer from "./MobileDrawer";

export default function MobileNav() {
  return (
    <div className="flex items-center justify-between w-full sm:hidden p-2">
      <MobileDrawer />
      <CoffeeIcon className=" ml-auto h-7 w-7" />
    </div>
  );
}
