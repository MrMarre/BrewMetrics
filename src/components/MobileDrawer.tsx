import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";
import { ChevronRight, Menu } from "lucide-react";

export default function MobileDrawer() {
  return (
    <Drawer direction="top">
      <DrawerTrigger className="sm:hidden border px-2 py-2 rounded-md mb-2">
        <Menu />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-center font-light text-xl m-5">
            BrewMetrics
          </DrawerTitle>
        </DrawerHeader>
        <DrawerFooter className="flex flex-col">
          <DrawerClose className="flex" asChild>
            <Link
              href="/"
              className="block w-full text-left bg-[var(--tertiary)] px-4 py-2 shadow-md rounded-xs"
            >
              Home <ChevronRight className="ml-auto" />
            </Link>
          </DrawerClose>

          <DrawerClose className="flex" asChild>
            <Link
              href="/"
              className="block w-full text-left text-gray-800 px-4 py-2 bg-violet-300 shadow-md rounded-xs "
            >
              About <ChevronRight className="ml-auto" />
            </Link>
          </DrawerClose>
          <DrawerClose className="flex" asChild>
            <Link
              href="/calculator"
              className="block w-full text-left px-4 py-2 bg-[var(--tertiary)] shadow-md rounded-xs"
            >
              Calculator <ChevronRight className="ml-auto" />
            </Link>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
