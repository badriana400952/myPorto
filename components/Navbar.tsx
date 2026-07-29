"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { ModernBackground } from "@/components/ui/modern-background";
import { motion } from "framer-motion";

interface NavbarProps {
  children?: React.ReactNode;
}

export default function Navbar({ children }: NavbarProps) {
  const pathname = usePathname();
  const [filterQuery, setFilterQuery] = useState("");

  const docMenus = [
    {
      title: "Introduction",
      href: "/components/Introduction",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      badge: "Docs",
    },
  ];

  const iconMenus = [
    {
      title: "Kriston",
      href: "/components/Kriston",
      count: "4,900+",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      title: "Leonid",
      href: "/components/Leonid",
      count: "3,800+",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Bendera",
      href: "/components/Bendera",
      count: "500+",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
        </svg>
      ),
    },
    {
      title: "Rounak",
      href: "/components/Rounak",
      count: "Logos",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      title: "Kalm",
      href: "/components/Kalm",
      count: "Calm",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: "Instagram",
      href: "/components/Instagram",
      count: "Social",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
    {
      title: "Food",
      href: "/components/Food",
      count: "F&B",
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
    },
  ];

  const filteredIconMenus = iconMenus.filter((item) =>
    item.title.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <div className="flex h-screen font-sans bg-slate-100 dark:bg-[#080d1a] text-slate-900 dark:text-slate-100 overflow-hidden">
      {/* SIDEBAR CONTAINER */}
      <aside className="w-64 sm:w-72 bg-white/90 dark:bg-[#0b1329]/90 border-r border-slate-200/80 dark:border-white/10 p-4 h-screen flex flex-col justify-between backdrop-blur-2xl shadow-xl relative z-30 shrink-0 select-none">
        <div className="space-y-4">
          {/* WORKSPACE HEADER BRAND */}
          <Link href="/" className="group block px-2 py-1">
            <div className="flex items-center gap-3">
              <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 via-cyan-500 to-emerald-400 p-[1.5px] shadow-md shadow-emerald-500/15 group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Image
                    src="/logos2.png"
                    alt="Porto Logo"
                    width={22}
                    height={22}
                    className="w-5.5 h-5.5 rounded-full"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold tracking-tight text-slate-900 dark:text-white">
                    badrian-icon
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                </div>
                <span className="text-[10px] font-mono font-medium text-slate-500 dark:text-slate-400">
                  UI Library v2.1.26
                </span>
              </div>
            </div>
          </Link>

          {/* FILTER SEARCH INPUT */}
          <div className="px-1">
            <div className="relative">
              <svg
                className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
                placeholder="Cari katalog..."
                className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/10 text-slate-800 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all font-sans"
              />
            </div>
          </div>

          {/* NAVIGATION LIST */}
          <div className="space-y-4 overflow-y-auto max-h-[calc(100vh-230px)] px-1 custom-scroll">
            {/* GETTING STARTED */}
            <div>
              <span className="block px-2 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1.5">
                Dokumentasi
              </span>
              <div className="space-y-0.5">
                {docMenus.map((menu, index) => {
                  const isActive = pathname === menu.href;
                  return (
                    <Link
                      key={index}
                      href={menu.href}
                      className={`group relative flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all duration-150 ${
                        isActive
                          ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold"
                          : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-white/5"
                      }`}
                    >
                      {isActive && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-emerald-500 rounded-r-full"></div>
                      )}
                      <div className="flex items-center gap-2.5">
                        <span className={isActive ? "text-emerald-500" : "text-slate-400 dark:text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300"}>
                          {menu.icon}
                        </span>
                        <span>{menu.title}</span>
                      </div>
                      {menu.badge && (
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20">
                          {menu.badge}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* ICON LIBRARIES */}
            <div>
              <span className="block px-2 text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1.5">
                Koleksi Ikon ({filteredIconMenus.length})
              </span>
              <div className="space-y-0.5">
                {filteredIconMenus.map((menu, index) => {
                  const isActive = pathname === menu.href;
                  return (
                    <Link
                      key={index}
                      href={menu.href}
                      className={`group relative flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all duration-150 ${
                        isActive
                          ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold"
                          : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/80 dark:hover:bg-white/5"
                      }`}
                    >
                      {isActive && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-emerald-500 rounded-r-full"></div>
                      )}
                      <div className="flex items-center gap-2.5">
                        <span className={isActive ? "text-emerald-500" : "text-slate-400 dark:text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300"}>
                          {menu.icon}
                        </span>
                        <span>{menu.title}</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300">
                        {menu.count}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER CARD */}
        <div className="pt-3 border-t border-slate-200/80 dark:border-white/10 space-y-2">
          <a
            href="https://saweria.co/badriana"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between w-full px-3 py-2 rounded-xl bg-gradient-to-r from-pink-500/10 via-rose-500/10 to-amber-500/10 border border-pink-500/20 text-pink-600 dark:text-pink-400 hover:border-pink-500/40 text-xs font-semibold transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-2">
              <span className="text-sm">💖</span>
              <span>Dukung via Saweria</span>
            </div>
            <svg
              className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </aside>

      {/* MAIN CONTENT WRAPPER WITH MODERN BACKGROUND */}
      <main className="flex-1 overflow-y-auto relative min-h-screen">
        <ModernBackground>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.4, ease: "easeOut" }}
            className="w-full min-h-screen p-4 sm:p-8"
          >
            {children}
          </motion.div>
        </ModernBackground>
      </main>
    </div>
  );
}
