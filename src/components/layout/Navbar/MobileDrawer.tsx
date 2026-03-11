import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";
import { ChevronRight, CoffeeIcon, Menu } from "lucide-react";

//Mobile navigation
export default function MobileDrawer() {
  return (
    <Drawer direction="top">
      <DrawerTrigger className="px-2 py-2 mb-2 border rounded-md sm:hidden">
        <Menu />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <CoffeeIcon className="mx-auto" />
        </DrawerHeader>
        <DrawerFooter className="flex flex-col">
          <DrawerClose className="flex" asChild>
            <Link
              href="/"
              className="block w-full text-left bg-[var(--tertiary)] px-4 py-4 shadow-md"
            >
              Home <ChevronRight className="ml-auto" />
            </Link>
          </DrawerClose>

          <DrawerClose className="flex" asChild>
            <Link
              href="/about"
              className="block w-full px-4 py-4 text-left text-gray-800 shadow-md bg-violet-300"
            >
              About <ChevronRight className="ml-auto" />
            </Link>
          </DrawerClose>
          <DrawerClose className="flex" asChild>
            <Link
              href="/calculator"
              className="block w-full text-left px-4 py-4 bg-[var(--tertiary)] shadow-md"
            >
              Calculator <ChevronRight className="ml-auto" />
            </Link>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
