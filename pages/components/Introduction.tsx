"use client";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import { Npm } from "badrian-icon/logos";
import { IconPlayground } from "@/components/IconPlayground";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function Dokumentasi() {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const [packageManager, setPackageManager] = useState<"npm" | "yarn" | "pnpm" | "bun">("npm");

  const copyToClipboard = (text: string, sectionId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionId);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const getInstallCmd = () => {
    switch (packageManager) {
      case "yarn":
        return "yarn add badrian-icon@latest";
      case "pnpm":
        return "pnpm add badrian-icon@latest";
      case "bun":
        return "bun add badrian-icon@latest";
      default:
        return "npm install badrian-icon@latest";
    }
  };

  const tailwindCode = `module.exports = {\n  content: [\n    "./src/**/*.{js,ts,jsx,tsx}",\n    "./node_modules/badrian-icon/**/*.js"\n  ],\n  safelist: [\n    {\n      pattern: /(bg|text|border)-(red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|slate|gray|zinc|neutral|stone)-(50|100|200|300|400|500|600|700|800|900|950)/,\n    },\n  ],\n  theme: { extend: {} },\n  plugins: [],\n}`;

  const usageCode = `import { Add, Trash } from "badrian-icon/kriston";\nimport { Edit } from "badrian-icon/leonid";\n\nexport default function Example() {\n  return (\n    <div className="flex items-center gap-4">\n      <Add className="w-6 h-6 text-emerald-500" />\n      <Edit className="w-6 h-6 text-cyan-500" />\n      <Trash className="w-6 h-6 text-rose-500" />\n    </div>\n  );\n}`;

  return (
    <div className={`w-full max-w-6xl mx-auto p-4 sm:p-8 text-slate-900 dark:text-slate-100 ${inter.className}`}>
      {/* Hero Banner */}
      <div className="relative bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/10 rounded-3xl p-6 sm:p-12 mb-12 shadow-xl backdrop-blur-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emerald-500/10 via-cyan-500/10 to-transparent blur-3xl rounded-full pointer-events-none"></div>

        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3.5 py-1 text-xs font-bold rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 tracking-wide uppercase">
            NPM Package v2.1.26
          </span>
          <span className="px-3.5 py-1 text-xs font-bold rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 tracking-wide uppercase">
            TypeScript & React 19 Ready
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
              Instalasi badrian-icon
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              Koleksi ikon React ultra-ringan, presisi, dan sepenuhnya disesuaikan untuk Next.js 15, Remix, Vite, atau Tailwind CSS.
            </p>
          </div>
          <a
            href="https://www.npmjs.com/package/badrian-icon"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 dark:from-white dark:to-slate-100 hover:opacity-90 transition-all text-white dark:text-slate-900 font-bold text-sm shadow-xl hover:scale-[1.02]"
          >
            <Npm className="w-8 h-8" />
            <span>Lihat di NPM</span>
          </a>
        </div>
      </div>

      {/* Feature Bento Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/10 shadow-lg backdrop-blur-md hover:border-emerald-500/50 transition-all group">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xl mb-5 group-hover:scale-110 transition-transform">
            ⚡
          </div>
          <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-2">Zero Runtime</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            Semua ikon berbasis komponen SVG React murni tanpa dependensi JavaScript tambahan yang memperlambat browser.
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/10 shadow-lg backdrop-blur-md hover:border-cyan-500/50 transition-all group">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold text-xl mb-5 group-hover:scale-110 transition-transform">
            📦
          </div>
          <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-2">Tree-Shakeable</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            Dikelola dengan modul monorepo terpisah sehingga hanya ikon yang Anda gunakan yang masuk ke bundle produksi.
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/10 shadow-lg backdrop-blur-md hover:border-violet-500/50 transition-all group">
          <div className="w-12 h-12 rounded-2xl bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center font-bold text-xl mb-5 group-hover:scale-110 transition-transform">
            🎨
          </div>
          <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-2">Tailwind Native</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            Langsung mendukung utility class Tailwind CSS untuk warna, ukuran, dan animasi seperti <code className="text-emerald-600 dark:text-emerald-400 font-mono">text-emerald-500 w-6 h-6</code>.
          </p>
        </div>
      </div>

      {/* Interactive Quickstart Steps */}
      <div className="space-y-10">
        {/* Step 01 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/10 shadow-lg">
          <div className="lg:col-span-4 space-y-2">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">
              Langkah 01
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Instalasi Package</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Pilih package manager proyek Anda dan jalankan perintah instalasi di terminal.
            </p>
          </div>

          <div className="lg:col-span-8 flex flex-col justify-between">
            {/* Package Manager Tabs */}
            <div className="flex items-center gap-2 mb-3">
              {(["npm", "yarn", "pnpm", "bun"] as const).map((pm) => (
                <button
                  key={pm}
                  onClick={() => setPackageManager(pm)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold font-mono transition-all ${
                    packageManager === pm
                      ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/20"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {pm}
                </button>
              ))}
            </div>

            {/* Code Box */}
            <div className="relative group">
              <button
                onClick={() => copyToClipboard(getInstallCmd(), "step1")}
                className="absolute top-3.5 right-3.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 transition-all cursor-pointer z-10"
              >
                {copiedSection === "step1" ? "✓ Copied!" : "Copy"}
              </button>
              <pre className="bg-slate-950 text-emerald-400 rounded-2xl p-5 text-sm overflow-x-auto border border-slate-800 font-mono shadow-inner">
                <code>{getInstallCmd()}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Step 02 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/10 shadow-lg">
          <div className="lg:col-span-4 space-y-2">
            <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 tracking-wider uppercase">
              Langkah 02
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Konfigurasi Tailwind CSS</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Tambahkan path <code className="text-cyan-600 dark:text-cyan-400 font-mono">badrian-icon</code> ke dalam <code className="text-slate-800 dark:text-slate-200 font-mono">tailwind.config.js</code> agar warna dan dynamic class terdeteksi secara otomatis.
            </p>
          </div>

          <div className="lg:col-span-8 relative">
            <button
              onClick={() => copyToClipboard(tailwindCode, "step2")}
              className="absolute top-3.5 right-3.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-600 dark:text-cyan-400 border border-cyan-500/30 transition-all cursor-pointer z-10"
            >
              {copiedSection === "step2" ? "✓ Copied!" : "Copy"}
            </button>
            <pre className="bg-slate-950 text-cyan-300 rounded-2xl p-5 text-sm overflow-x-auto border border-slate-800 font-mono shadow-inner">
              <code>{tailwindCode}</code>
            </pre>
          </div>
        </div>

        {/* Step 03 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/10 shadow-lg">
          <div className="lg:col-span-4 space-y-2">
            <span className="text-xs font-bold text-amber-600 dark:text-amber-400 tracking-wider uppercase">
              Langkah 03
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">Penggunaan Komponen</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Impor ikon yang Anda butuhkan langsung dari sub-module library (seperti <code className="text-amber-600 dark:text-amber-400 font-mono">/kriston</code>, <code className="text-amber-600 dark:text-amber-400 font-mono">/leonid</code>, dll).
            </p>
          </div>

          <div className="lg:col-span-8 relative">
            <button
              onClick={() => copyToClipboard(usageCode, "step3")}
              className="absolute top-3.5 right-3.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-600 dark:text-amber-400 border border-amber-500/30 transition-all cursor-pointer z-10"
            >
              {copiedSection === "step3" ? "✓ Copied!" : "Copy"}
            </button>
            <pre className="bg-slate-950 text-amber-300 rounded-2xl p-5 text-sm overflow-x-auto border border-slate-800 font-mono shadow-inner">
              <code>{usageCode}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Embedded Live Playground */}
      <div className="mt-16">
        <IconPlayground />
      </div>

      {/* License Footer */}
      <div className="mt-16 text-center border-t border-slate-200 dark:border-white/10 pt-8">
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          <b>badrian-icon</b> dirilis di bawah lisensi <b>MIT</b> — Bebas digunakan untuk proyek pribadi maupun komersial.
        </p>
      </div>
    </div>
  );
}
