import { Badge, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import Image from "next/image";

type Props = {
  name: string;
  description: string;
  version: string;
  weeklyDownloads: number;
  stars: number;
  repoUrl: string;
  npmUrl: string;
};

export const NpmPackageCard = ({
  name,
  description,
  version,
  weeklyDownloads,
  stars,
  repoUrl,
  npmUrl,
}: Props) => {
  return (
    <section
      id="package"
      className="group relative overflow-hidden p-6 sm:p-8 rounded-2xl border transition-all duration-300 transform hover:-translate-y-2 bg-white/70 dark:bg-slate-950/40 border-slate-200/80 dark:border-slate-800/80 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 hover:shadow-[0_15px_30px_rgba(6,182,212,0.15)] dark:hover:shadow-[0_15px_30px_rgba(6,182,212,0.08)] backdrop-blur-md"
    >
      {/* Cyber Grid Overlay Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      {/* Decorative Glowing Accent Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Logo Container with Glowing Aura */}
      <div className="relative flex justify-center py-4 bg-slate-50 dark:bg-slate-900/40 rounded-xl border border-slate-100 dark:border-slate-800/50 overflow-hidden">
        <div className="absolute inset-0 bg-cyan-500/5 dark:bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
        <Image
          src="/logos.png"
          alt="Logo"
          width={180}
          height={90}
          className="object-contain relative z-10 transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="space-y-4 mt-6">
        {/* Title & Version Badge */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h3 className="text-xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent group-hover:from-cyan-500 group-hover:to-cyan-300 transition-colors duration-300">
            {name}
          </h3>
          <Badge className="border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-semibold px-2 py-0.5 rounded text-xs">
            v{version}
          </Badge>
        </div>

        {/* Description */}
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed min-h-[60px]">
          {description}
        </p>

        {/* Stats HUD Block */}
        <div className="grid grid-cols-2 gap-3 py-3 px-4 rounded-xl bg-slate-50/50 dark:bg-slate-900/20 border border-slate-100 dark:border-slate-800/30 text-sm text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <Icon icon="lucide:download" className="text-cyan-500 w-4 h-4 shrink-0" />
            <div className="leading-none">
              <span className="font-semibold block text-slate-800 dark:text-slate-200">
                {weeklyDownloads.toLocaleString()}
              </span>
              <span className="text-xs text-slate-400">downloads/wk</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Icon icon="lucide:star" className="text-amber-500 w-4 h-4 fill-amber-500/20 shrink-0" />
            <div className="leading-none">
              <span className="font-semibold block text-slate-800 dark:text-slate-200">
                {stars}
              </span>
              <span className="text-xs text-slate-400">stars</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3 pt-2">
          <Button
            as="a"
            href={npmUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 min-w-[120px] bg-slate-900 dark:bg-slate-800 text-white font-medium hover:bg-slate-800 dark:hover:bg-slate-700 shadow-sm border border-transparent dark:border-slate-700/50 transition-colors"
            size="sm"
          >
            View on NPM
          </Button>

          {name === "badrian-icon" ? (
            <Button
              as="a"
              href="/components/Introduction"
              className="flex-1 min-w-[120px] border border-cyan-500/50 hover:border-cyan-400 bg-transparent text-cyan-600 dark:text-cyan-400 font-medium transition-colors"
              size="sm"
              variant="bordered"
            >
              Lihat Icons
            </Button>
          ) : (
            <Button
              as="a"
              href={repoUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-1 min-w-[120px] border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-transparent text-slate-600 dark:text-slate-400 font-medium transition-colors"
              size="sm"
              variant="bordered"
            >
              Source Code
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

