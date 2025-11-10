import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import NavbarDemo from "@/components/NavbarIcons";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { HeroUIProvider } from "@heroui/react";
import { Else, ElseIf, If, Then } from "copong-utils";
import { motion } from "motion/react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const noSidebarRoutes = ["/"];
  const badrianIconRoutes = [
    "/badrian-icons",
    "/badrian-icons/dokumentasi-icon",
  ];

  const isNoSidebar = noSidebarRoutes.includes(router.pathname);
  const isIcon = badrianIconRoutes.includes(router.pathname);

  return (
    <HeroUIProvider>
      <If condition={isNoSidebar}>
        <Then>
          <Component {...pageProps} />
        </Then>

        <ElseIf condition={isIcon}>
          <AuroraBackground>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
              className="flex flex-col gap-4 items-center justify-center"
            >
              <NavbarDemo>
                <Component {...pageProps} />
              </NavbarDemo>
            </motion.div>
          </AuroraBackground>
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
