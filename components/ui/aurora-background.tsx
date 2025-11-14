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
    <div className={cn("relative w-full min-h-screen overflow-hidden", className)} {...props}>
      {/* Gradient Aurora */}
      <div
        className={cn(
          `fixed inset-0 z-0 pointer-events-none
          after:animate-aurora absolute -inset-[10px]
          [background-image:var(--white-gradient),var(--aurora)]
          [background-size:300%,_200%] [background-position:50%_50%,50%_50%]
          opacity-50 blur-[10px] invert filter will-change-transform
          [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
          [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
          [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
          after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)]
          after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-difference
          after:content-[""] dark:[background-image:var(--dark-gradient),var(--aurora)] dark:invert-0
          after:dark:[background-image:var(--dark-gradient),var(--aurora)]
        `,
          showRadialGradient &&
            `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
        )}
        style={
          {
            "--blue-300": "#93c5fd",
            "--blue-400": "#60a5fa",
            "--blue-500": "#3b82f6",
            "--indigo-300": "#a5b4fc",
            "--violet-200": "#ddd6fe",
            "--black": "#000",
            "--white": "#fff",
            "--transparent": "transparent",
          } as React.CSSProperties
        }
      ></div>

      {/* Konten */}
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen">
        {children}
      </div>
    </div>
  );
};
