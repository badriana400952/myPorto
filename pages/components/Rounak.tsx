"use client";
import { CodeBlock } from "@/components/ui/code-block";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { mapLogos } from "@/utils/iconMapLogos";
import { iconMapRounak } from "@/utils/iconMapRounak-Bose-soscial";
import {
  ModalContent as ModalContents,
  ModalHeader,
  Modal as Modlas,
  ModalBody as ModlasBodys,
  useDisclosure,
} from "@heroui/react";
import { motion } from "framer-motion";
import { FC, SVGProps, useEffect, useState } from "react";
import ReactDOMServer from "react-dom/server";
import Pagination from "./pagination";

export interface IconItem {
  name: string;
  icons: FC<SVGProps<SVGSVGElement>>;
  iconName: string;
}

interface IconItemFromBaserow {
  name: string;
  icons: string;
  iconName: string;
}

const Index = () => {
  const [icons, setIcons] = useState<IconItem[]>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [iconName, setIconName] = useState<IconItem[]>([
    { name: "", icons: () => <svg></svg>, iconName: "" },
  ]);

  const [copiedType, setCopiedType] = useState<"jsx" | "svg" | null>(null);

  const {
    isOpen: isIconModalOpen,
    onOpen: onIconOpen,
    onOpenChange: onIconOpenChange,
  } = useDisclosure();

  const token = process.env.NEXT_PUBLIC_BASEROW_TOKEN!;

  useEffect(() => {
    const handleGet = async () => {
      try {
        const res = await fetch(
          `https://api.baserow.io/api/database/rows/table/732078/?user_field_names=true&page=${page}&filter__name__contains=${search}`,
          {
            headers: { Authorization: `Token ${token}` },
          }
        );
        const data = await res.json();
        if (data.results) {
          const mappedIcons: IconItem[] = data.results.map(
            (item: IconItemFromBaserow) => {
              let Component: FC<SVGProps<SVGSVGElement>> | null = null;
              const roun = { ...iconMapRounak, ...mapLogos };
              Component = roun[item.icons as keyof typeof roun];
              return {
                name: item.name,
                icons: Component || (() => <svg />),
                iconName: item.icons,
              };
            }
          );
          setTotalPages(Math.ceil(data.count / 100));
          setIcons(mappedIcons);
        }
      } catch (err) {
        console.error("Failed to fetch icons", err);
      }
    };

    handleGet();
  }, [page, token, search]);

  const placeholders = [
    "Cari ikon Rounak & Logos (e.g. Github, React, Google)...",
    "Ketik nama brand / logo...",
    "Temukan ikon logo brand siap pakai...",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    if (e.target.value) {
      setPage(1);
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleCopy = (text: string, type: "jsx" | "svg") => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-8 text-slate-900 dark:text-slate-100 min-h-screen">
      {/* Hero Search Header Card */}
      <div className="relative bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/10 rounded-3xl p-6 sm:p-12 mb-10 text-center backdrop-blur-2xl shadow-xl overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-violet-500/10 blur-3xl rounded-full pointer-events-none"></div>

        <span className="inline-block px-3.5 py-1 text-xs font-bold rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20 mb-4 tracking-wide uppercase">
          Logos & Brand Icons Collection
        </span>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3">
          Rounak Logos Explorer
        </h1>

        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mb-8">
          Koleksi ikon logo brand popular, tech stack, dan social media icons dengan detail SVG tinggi.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <code className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-[#0b0f19] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-violet-400 text-xs sm:text-sm font-mono shadow-inner">
            npm install badrian-icon@latest
          </code>
          <code className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-[#0b0f19] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-emerald-300 text-xs sm:text-sm font-mono shadow-inner">
            {"import { ReactIcon } from \"badrian-icon/logos\""}
          </code>
        </div>

        <div className="max-w-xl mx-auto">
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
        </div>
      </div>

      {/* Icon Grid Section */}
      <div className="w-full mb-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3 sm:gap-4">
          {icons.map((item, index) => {
            const IconComp = item.icons;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.06, y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => {
                  onIconOpen();
                  setIconName([
                    {
                      name: item.name,
                      icons: item.icons,
                      iconName: item.iconName,
                    },
                  ]);
                }}
                className="group relative bg-white/80 dark:bg-slate-900/80 hover:bg-slate-50 dark:hover:bg-slate-800/90 border border-slate-200/80 dark:border-white/10 hover:border-violet-500/50 dark:hover:border-violet-500/50 rounded-2xl p-4 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-violet-500/10"
              >
                <div className="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 group-hover:bg-violet-500/10 text-slate-700 dark:text-slate-200 transition-colors">
                  <IconComp className="w-9 h-9 object-contain" />
                </div>
                <span className="text-[11px] font-mono font-medium text-slate-600 dark:text-slate-400 group-hover:text-violet-600 dark:group-hover:text-violet-300 truncate w-full text-center mt-2.5 px-1 transition-colors">
                  {item.name || item.iconName}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Pagination Bar */}
        <div className="mt-10 flex justify-center items-center">
          <Pagination
            totalPages={totalPages}
            currentPage={page}
            onPageChange={setPage}
          />
        </div>
      </div>

      {/* Inspector Modal */}
      <Modlas
        isOpen={isIconModalOpen}
        onOpenChange={onIconOpenChange}
        size="4xl"
        backdrop="blur"
      >
        <ModalContents className="bg-white/95 dark:bg-slate-950/95 border border-slate-200 dark:border-white/15 backdrop-blur-2xl rounded-3xl text-slate-900 dark:text-white shadow-2xl">
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1 border-b border-slate-200 dark:border-white/10 px-6 py-4">
                <span className="text-xs font-bold text-violet-600 dark:text-violet-400 uppercase tracking-wider">
                  Logo Inspector
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {iconName[0]?.name || iconName[0]?.iconName}
                </h3>
              </ModalHeader>

              <ModlasBodys className="p-6">
                {iconName.map((item, index) => {
                  const IconComponent = item.icons;
                  const iconNameText = item.iconName || "Icon";
                  const iconCode = `<${iconNameText} className="w-8 h-8" />`;

                  const svgString = ReactDOMServer.renderToStaticMarkup(
                    <IconComponent className="w-8 h-8" />
                  );

                  return (
                    <div
                      key={index}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
                    >
                      {/* Left Column: Icon Preview */}
                      <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10">
                        <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-2xl bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-white/10 flex items-center justify-center p-6 shadow-inner relative group">
                          <IconComponent className="w-28 h-28 object-contain" />
                        </div>
                      </div>

                      {/* Right Column: Code Snippets & Copy Buttons */}
                      <div className="lg:col-span-7 space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-1.5">
                            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                              React JSX Component
                            </span>
                            <button
                              onClick={() => handleCopy(iconCode, "jsx")}
                              className="px-3 py-1 text-xs font-semibold rounded-lg bg-violet-500/20 hover:bg-violet-500/30 text-violet-600 dark:text-violet-400 border border-violet-500/30 transition-all cursor-pointer"
                            >
                              {copiedType === "jsx" ? "✓ Copied!" : "Salin JSX"}
                            </button>
                          </div>
                          <CodeBlock
                            language="jsx"
                            filename={`${iconNameText}.jsx`}
                            highlightLines={[1]}
                            code={iconCode}
                          />
                        </div>

                        <div>
                          <div className="flex justify-between items-center mb-1.5">
                            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                              Pure SVG Code
                            </span>
                            <button
                              onClick={() => handleCopy(svgString, "svg")}
                              className="px-3 py-1 text-xs font-semibold rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 transition-all cursor-pointer"
                            >
                              {copiedType === "svg" ? "✓ Copied!" : "Salin SVG"}
                            </button>
                          </div>
                          <CodeBlock
                            language="html"
                            filename={`${iconNameText}.svg`}
                            highlightLines={[1]}
                            code={svgString}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </ModlasBodys>
            </>
          )}
        </ModalContents>
      </Modlas>
    </div>
  );
};

export default Index;
