import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NavBar } from "@/components/Navbar"; 

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <NavBar/>
    <Component {...pageProps} />
    </>
);
}
