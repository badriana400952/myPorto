"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface ModernBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
}

export const ModernBackground = ({
  className,
  children,
  ...props
}: ModernBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative w-full min-h-screen bg-slate-50 dark:bg-[#080d1a] text-slate-900 dark:text-slate-100 overflow-x-hidden",
        className
      )}
      {...props}
    >
      {/* 1. Subtle Dot Matrix Grid */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-60"></div>

      {/* 2. Top-Right Emerald Mesh Glow */}
      <div className="fixed -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-emerald-500/15 via-teal-500/10 to-transparent blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* 3. Bottom-Left Cyan Mesh Glow */}
      <div className="fixed -bottom-40 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/15 via-blue-500/10 to-transparent blur-[120px] rounded-full pointer-events-none z-0"></div>

      {/* 4. Vignette Shadow Overlay for Depth */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(15,23,42,0.05)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_30%,rgba(2,6,23,0.6)_100%)]"></div>

      {/* Content */}
      <div className="relative z-10 w-full min-h-screen">
        {children}
      </div>
    </div>
  );
};
