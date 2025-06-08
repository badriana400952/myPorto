import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { HeroUIProvider } from "@heroui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HeroUIProvider>
      <Component {...pageProps} />
    </HeroUIProvider>
  );
}
