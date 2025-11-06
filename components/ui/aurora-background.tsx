"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
   <div
  className={cn(
    "transition-bg relative min-h-screen flex flex-col items-center justify-center bg-zinc-50 text-slate-950 dark:bg-zinc-900",
    className,
  )}
  {...props}
>
  <div
    className="fixed inset-0 -z-10 overflow-hidden"
    style={{
      "--aurora":
        "repeating-linear-gradient(100deg,#3b82f6_10%,#a5b4fc_15%,#93c5fd_20%,#ddd6fe_25%,#60a5fa_30%)",
      "--dark-gradient":
        "repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)",
      "--white-gradient":
        "repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)",
      "--blue-300": "#93c5fd",
      "--blue-400": "#60a5fa",
      "--blue-500": "#3b82f6",
      "--indigo-300": "#a5b4fc",
      "--violet-200": "#ddd6fe",
      "--black": "#000",
      "--white": "#fff",
      "--transparent": "transparent",
    } as React.CSSProperties}
  >
    <div
      className={cn(
        `after:animate-aurora pointer-events-none absolute inset-0 
        [background-image:var(--white-gradient),var(--aurora)]
        [background-size:300%,_200%] opacity-50 blur-[10px]
        invert filter will-change-transform
        after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)]
        after:[background-size:200%,_100%] after:[background-attachment:fixed]
        after:mix-blend-difference after:content-[""]
        dark:[background-image:var(--dark-gradient),var(--aurora)] 
        after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,
        showRadialGradient &&
          `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
      )}
    />
  </div>
  {children}
</div>

    </main>
  );
};
