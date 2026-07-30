import React from "react";
import { Button, Image } from "@heroui/react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { TerminalHero } from "./TerminalHero";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="flex flex-col-reverse lg:flex-row items-center justify-between py-12 md:py-24 gap-12"
    >
      {/* Left Column: Greeting and Call to Action */}
      <div className="flex-1 space-y-6 text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-semibold text-xs tracking-wider uppercase animate-pulse">
          <span className="w-2 h-2 rounded-full bg-cyan-500" />
          Quantum Frontend Engineer
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
          Building <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent glow-cyan">digital interfaces</span> that define the future.
        </h1>
        
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-xl leading-relaxed">
          I design and develop high-performance, futuristic web architectures with exceptional user experiences. Specializing in React, Next.js, and sleek vanilla styling systems.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 pt-2">
          <Button
            color="primary"
            size="lg"
            endContent={<Icon icon="lucide:arrow-right" className="group-hover:translate-x-1 transition-transform" />}
            className="font-semibold bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white shadow-lg shadow-cyan-500/20 transition-all duration-300"
          >
            <a href="#projects">View My Work</a>
          </Button>
          <Button
            variant="bordered"
            size="lg"
            className="font-semibold border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 hover:bg-cyan-500/5 dark:hover:bg-cyan-500/5 transition-all"
            startContent={<Icon icon="lucide:download" />}
          >
            <Link href="https://drive.google.com/file/d/1ZIB_uBw893-y23lGRGlcOGXTSqy70oG4/view?usp=sharing" target="_blank">
              Download CV
            </Link>
          </Button>
        </div>

        {/* Social Link Badges */}
        <div className="flex items-center gap-4 pt-4">
          {[
            { icon: "logos:github-icon", url: "https://github.com/badriana400952/" },
            { icon: "logos:linkedin-icon", url: "https://www.linkedin.com/in/badriana-badrian?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_appC" },
            { icon: "logos:twitter", url: "https://x.com/badrun952" },
            { icon: "skill-icons:instagram", url: "https://www.instagram.com/badrian____?igsh=MTYybHRnZHY4dGIzMA==" }
          ].map((soc, idx) => (
            <a
              key={idx}
              href={soc.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-xl border border-slate-200/60 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/40 hover:border-cyan-500/40 dark:hover:border-cyan-500/40 hover:scale-110 transition-all duration-200"
            >
              <Icon icon={soc.icon} width={20} height={20} />
            </a>
          ))}
        </div>
      </div>

      {/* Right Column: Avatar & Interactive Terminal Console */}
      <div className="flex-1 flex flex-col gap-6 items-center lg:items-end justify-center">
        {/* Glowing Profile Avatar */}
        <div className="w-40 h-40 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-cyan-500/30 dark:border-cyan-500/20 shadow-[0_0_30px_rgba(6,182,212,0.15)] relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
          <Image
            removeWrapper
            src="./badri.png"
            alt="Developer Portrait"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ objectPosition: "center 5%" }}
          />
        </div>
        {/* Terminal console HUD */}
        <TerminalHero />
      </div>
    </section>
  );
};
