import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { HeroUIProvider } from "@heroui/react";
import { If, Then, Else, ElseIf } from "copong-utils";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import { AuroraBackground, } from "@/components/ui/aurora-background";
import { motion } from "motion/react";
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
          <AuroraBackground>
            <motion.div
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="relative flex flex-col gap-4 items-center justify-center"
            >
            <Component {...pageProps} />
          </motion.div>
        </AuroraBackground>

      </ElseIf>
      <Else>
        <Navbar>
          <Component {...pageProps} />
        </Navbar>
      </Else>
    </If>
    </HeroUIProvider >
  );
}
