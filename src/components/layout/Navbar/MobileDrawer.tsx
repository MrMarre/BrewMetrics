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
      <DrawerTrigger className="sm:hidden border px-2 py-2 rounded-md mb-2">
        <Menu />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <CoffeeIcon className="mx-auto" />
          {/* <DrawerTitle className="text-center text-2xl m-5 font-light">
            BrewMetrics
          </DrawerTitle> */}
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
              className="block w-full text-left text-gray-800 px-4 py-4 bg-violet-300 shadow-md"
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
