import React from "react";
import { Button, Image } from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-between py-16 md:py-32 gap-12"
    >
      <div className="flex-1 space-y-6">
        <div className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-500 font-medium text-sm">
          Frontend Developer
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          Building <span className="text-primary">digital products</span> with
          exceptional user experiences
        </h1>
        <p className="text-foreground-500 text-lg max-w-xl">
          I design and develop services for customers of all sizes, specializing
          in creating stylish, modern websites, web services and online stores.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <Button
            color="primary"
            size="lg"
            endContent={<Icon icon="lucide:arrow-right" />}
            className="font-medium"
          >
            View My Work
          </Button>
          <Button
            variant="bordered"
            size="lg"
            className="font-medium"
            startContent={<Icon icon="lucide:download" />}
          >
            <Link href="https://drive.google.com/file/d/1ZIB_uBw893-y23lGRGlcOGXTSqy70oG4/view?usp=sharing">
              {" "}
              Download CV
            </Link>
          </Button>
        </div>
        <div className="flex items-center gap-6 pt-6">
          <a
            href="https://github.com/badriana400952/"
            className="text-foreground-500 hover:text-primary transition-colors"
          >
            <Icon icon="logos:github-icon" width={24} height={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/badriana-badrian?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_appC"
            className="text-foreground-500 hover:text-primary transition-colors"
          >
            <Icon icon="logos:linkedin-icon" width={24} height={24} />
          </a>
          <a
            href="https://x.com/badrun952"
            className="text-foreground-500 hover:text-primary transition-colors"
          >
            <Icon icon="logos:twitter" width={24} height={24} />
          </a>
          <a
            href="https://www.instagram.com/badrian____?igsh=MTYybHRnZHY4dGIzMA=="
            className="text-foreground-500 hover:text-primary transition-colors"
          >
            <Icon icon="skill-icons:instagram" width={24} height={24} />
          </a>
        </div>
      </div>
      <div className="flex-1 flex justify-center md:justify-end">
        <div className="w-full max-w-screen-lg mx-auto">
          <Image
            removeWrapper
            src="./badri.png"
            alt="Developer Portrait"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};
