import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import Link from "next/link";
import { useState } from "react";
import { ChevronRight, Menu } from "lucide-react";

export default function MobileDrawer() {
  return (
    <Drawer direction="top">
      <DrawerTrigger className="sm:hidden border px-2 py-2 rounded-md mb-2">
        <Menu className="" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-center">BrewMetrics</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose className="flex" asChild>
            <Link
              href="/"
              className="block w-full text-left px-4 py-2 rounded-md bg-[var(--accent)] "
            >
              Home <ChevronRight className="ml-auto" />
            </Link>
          </DrawerClose>

          <DrawerClose className="flex" asChild>
            <Link
              href="/"
              className="block w-full text-left px-4 py-2 rounded-md bg-[var(--accent)] "
            >
              About <ChevronRight className="ml-auto" />
            </Link>
          </DrawerClose>
          <DrawerClose className="flex" asChild>
            <Link
              href="/calculator"
              className="block w-full text-left px-4 py-2 rounded-md bg-[var(--accent)]"
            >
              Calculator <ChevronRight className="ml-auto" />
            </Link>
          </DrawerClose>
          {/* <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose> */}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
