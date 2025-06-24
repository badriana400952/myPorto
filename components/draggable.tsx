import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import { Avatar } from "@heroui/react";
import { Icon } from "@iconify/react";
import { HeroHighlight, Highlight } from "./ui/hero-highlight.tsx";

export function DraggableCard() {
  const items = [
    {
      title: "Hypertext Markup Language",
      image: "logos:html-5",
      className:
        "absolute top-10 left-[10%] sm:left-[20%] md:left-[25%] rotate-[-5deg]",
    },
    {
      title: "Cascading Style Sheets",
      image: "logos:css-3",
      className:
        "absolute top-40 left-[15%] sm:left-[25%] md:left-[30%] rotate-[-7deg]",
    },
    {
      title: "Javascript",
      image: "logos:javascript",
      className:
        "absolute top-5 left-[35%] sm:left-[40%] md:left-[45%] rotate-[8deg]",
    },
    {
      title: "Typescript",
      image: "logos:typescript-icon",
      className:
        "absolute top-32 left-[50%] sm:left-[55%] md:left-[60%] rotate-[10deg]",
    },
    {
      title: "Mantine css",
      image: "logos:mantine-icon",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
    {
      title: "Chakra Ui",
      image: "devicon:chakraui",
      className: "absolute top-12 left-[20%] sm:left-[30%] rotate-[4deg]",
    },
    {
      title: "Bootstrap",
      image: "logos:bootstrap",
      className: "absolute top-16 left-[40%] rotate-[4deg]",
    },
    {
      title: "Ant Design",
      image: "devicon:antdesign",
      className: "absolute top-20 left-[50%] rotate-[4deg]",
    },
    {
      title: "Shadcn Ui",
      image: "simple-icons:shadcnui",
      className: "absolute top-24 left-[35%] rotate-[4deg]",
    },
    {
      title: "Redux Toolkit",
      image: "logos:redux",
      className: "absolute top-28 left-[25%] rotate-[4deg]",
    },
    {
      title: "TanStack",
      image: "logos:react-query-icon",
      className: "absolute top-32 left-[20%] rotate-[4deg]",
    },
    {
      title: "Remix js",
      image: "lineicons:remix-js",
      className: "absolute top-36 left-[45%] rotate-[4deg]",
    },
    {
      title: "React",
      image: "logos:react",
      className: "absolute top-20 right-[25%] rotate-[2deg]",
    },
    {
      title: "Next js",
      image: "logos:nextjs-icon",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Tailwind css",
      image: "logos:tailwindcss-icon",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];

  return (
    <>
      <HeroHighlight className="w-full">
        <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
          <div className="w-full flex items-start justify-center -mt-40">
            <Avatar
              className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 text-large m-auto"
              src="satus.png"
            />
          </div>
          {items.map((item, index) => (
            <DraggableCardBody key={index} className={item.className}>
              <Icon
                icon={item.image}
                className="w-32 h-32 sm:w-36 sm:h-36 md:w-28 md:h-28 lg:w-56 lg:h-56 transition-all m-auto duration-300 group-hover:brightness-125"
              />
              <Highlight className="mt-4 text-center text-base sm:text-lg md:text-xl font-bold text-neutral-700 dark:text-neutral-300">
                {item.title}
              </Highlight>
            </DraggableCardBody>
          ))}
        </DraggableCardContainer>
      </HeroHighlight>
    </>
  );
}
