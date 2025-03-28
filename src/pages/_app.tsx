import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NavBar } from "@/components/layout/Navbar";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={`${roboto.className} ${roboto.variable}`}>
        <NavBar />
        <Component {...pageProps} />
      </div>
    </>
  );
}
