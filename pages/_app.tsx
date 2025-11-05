import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { HeroUIProvider } from "@heroui/react";
import { If, Then, Else, ElseIf } from "copong-utils";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const noSidebarRoutes = ["/"]; // tambahkan juga "/about", "/portfolio" kalau perlu
  const badrianIconRoutes = ["/badrian-icons"];

  const isNoSidebar = noSidebarRoutes.includes(router.pathname);
  const isIcon = badrianIconRoutes.includes(router.pathname);
  console.log(isIcon)
  return (
    <HeroUIProvider>

      <If condition={isNoSidebar}>
        <Then>
          <Component {...pageProps} />
        </Then>
        <ElseIf condition={isIcon}>
          <Component {...pageProps} />
        </ElseIf>
        <Else>
          <Navbar>
            <Component {...pageProps} />
          </Navbar>
        </Else>
      </If>
    </HeroUIProvider>
  );
}
