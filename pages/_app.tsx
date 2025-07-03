import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { HeroUIProvider } from "@heroui/react";

import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const noSidebarRoutes = ["/"]; // tambahkan juga "/about", "/portfolio" kalau perlu

  const isNoSidebar = noSidebarRoutes.includes(router.pathname);

  return (
    <HeroUIProvider>
      {isNoSidebar ? (
        <Component {...pageProps} />
      ) : (
        // <SidebarDemo>
        <Navbar>
          <Component {...pageProps} />
        </Navbar>
        // </SidebarDemo>
      )}
    </HeroUIProvider>
  );
}
