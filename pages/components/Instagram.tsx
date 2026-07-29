"use client";
import { CodeBlock } from "@/components/ui/code-block";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { colors, shades } from "@/utils/data";
import { iconMapInstagram } from "@/utils/iconMapInstagram";
import {
  Button,
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

export interface Iselected {
  color: string | null;
  shade: number | null;
}

const Index = () => {
  const [icons, setIcons] = useState<IconItem[]>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [selected, setSelected] = useState<Iselected>({
    color: "pink",
    shade: 500,
  });

  const [iconName, setIconName] = useState<IconItem[]>([
    { name: "", icons: () => <svg></svg>, iconName: "" },
  ]);

  const [copiedType, setCopiedType] = useState<"jsx" | "svg" | null>(null);

  const {
    isOpen: isIconModalOpen,
    onOpen: onIconOpen,
    onOpenChange: onIconOpenChange,
  } = useDisclosure();

  const {
    isOpen: isColorModalOpen,
    onOpen: onColorOpen,
    onOpenChange: onColorOpenChange,
  } = useDisclosure();

  const token = process.env.NEXT_PUBLIC_BASEROW_TOKEN!;

  useEffect(() => {
    const handleGet = async () => {
      try {
        const res = await fetch(
          `https://api.baserow.io/api/database/rows/table/740028/?user_field_names=true&page=${page}&filter__name__contains=${search}`,
          {
            headers: { Authorization: `Token ${token}` },
          }
        );
        const data = await res.json();
        if (data.results) {
          const mappedIcons: IconItem[] = data.results.map(
            (item: IconItemFromBaserow) => {
              let Component: FC<SVGProps<SVGSVGElement>> | null = null;
              Component =
                iconMapInstagram[item.icons as keyof typeof iconMapInstagram];
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
    "Cari ikon Instagram...",
    "Ketik nama ikon...",
    "Temukan ikon media sosial...",
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-pink-500/10 blur-3xl rounded-full pointer-events-none"></div>

        <span className="inline-block px-3.5 py-1 text-xs font-bold rounded-full bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-500/20 mb-4 tracking-wide uppercase">
          Instagram Icon Collection
        </span>

        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3">
          Instagram Icon Explorer
        </h1>

        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mb-8">
          Koleksi ikon bergaya UI Instagram (Heart, Comment, Share, Bookmark) untuk aplikasi sosial.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <code className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-[#0b0f19] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-pink-400 text-xs sm:text-sm font-mono shadow-inner">
            npm install badrian-icon@latest
          </code>
          <code className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-[#0b0f19] border border-slate-200 dark:border-white/10 text-slate-800 dark:text-emerald-300 text-xs sm:text-sm font-mono shadow-inner">
            {"import { Heart } from \"badrian-icon/instagram\""}
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
                className="group relative bg-white/80 dark:bg-slate-900/80 hover:bg-slate-50 dark:hover:bg-slate-800/90 border border-slate-200/80 dark:border-white/10 hover:border-pink-500/50 dark:hover:border-pink-500/50 rounded-2xl p-4 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-pink-500/10"
              >
                <div className="p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 group-hover:bg-pink-500/10 text-slate-700 dark:text-slate-200 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                  <IconComp
                    className={`w-8 h-8 text-${selected?.color}-${selected?.shade}`}
                  />
                </div>
                <span className="text-[11px] font-mono font-medium text-slate-600 dark:text-slate-400 group-hover:text-pink-600 dark:group-hover:text-pink-300 truncate w-full text-center mt-2.5 px-1 transition-colors">
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
                <span className="text-xs font-bold text-pink-600 dark:text-pink-400 uppercase tracking-wider">
                  Icon Inspector
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {iconName[0]?.name || iconName[0]?.iconName}
                </h3>
              </ModalHeader>

              <ModlasBodys className="p-6">
                {iconName.map((item, index) => {
                  const IconComponent = item.icons;
                  const iconNameText = item.iconName || "Icon";
                  const iconCode = `<${iconNameText} className={"w-8 h-8 text-${selected?.color}-${selected?.shade}"} />`;

                  const svgString = ReactDOMServer.renderToStaticMarkup(
                    <IconComponent
                      className={`w-8 h-8 text-${selected?.color}-${selected?.shade}`}
                    />
                  );

                  return (
                    <div
                      key={index}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
                    >
                      {/* Left Column: Icon Preview & Swatches */}
                      <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10">
                        <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-2xl bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-white/10 flex items-center justify-center p-6 shadow-inner relative group">
                          <IconComponent
                            className={`w-28 h-28 text-${selected?.color}-${selected?.shade} transition-all duration-300`}
                          />
                        </div>

                        {/* Inline Swatches */}
                        <div className="mt-6 w-full text-center">
                          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-3">
                            Pilih Warna Akses Cepat:
                          </p>
                          <div className="flex flex-wrap justify-center gap-2">
                            {[
                              { color: "pink", shade: 500, bg: "bg-pink-500" },
                              { color: "rose", shade: 500, bg: "bg-rose-500" },
                              { color: "purple", shade: 500, bg: "bg-purple-500" },
                              { color: "fuchsia", shade: 500, bg: "bg-fuchsia-500" },
                              { color: "red", shade: 500, bg: "bg-red-500" },
                              { color: "orange", shade: 500, bg: "bg-orange-500" },
                              { color: "slate", shade: 200, bg: "bg-slate-200" },
                            ].map((swatch, i) => (
                              <button
                                key={i}
                                onClick={() =>
                                  setSelected({
                                    color: swatch.color,
                                    shade: swatch.shade,
                                  })
                                }
                                className={`w-7 h-7 rounded-full ${swatch.bg} border-2 ${
                                  selected?.color === swatch.color
                                    ? "border-pink-500 scale-110 shadow-md"
                                    : "border-transparent opacity-70 hover:opacity-100"
                                } transition-all cursor-pointer`}
                              />
                            ))}
                          </div>

                          <button
                            onClick={onColorOpen}
                            className="mt-4 px-4 py-2 text-xs font-semibold rounded-xl bg-slate-200/80 dark:bg-white/10 hover:bg-slate-300/80 dark:hover:bg-white/20 border border-slate-300 dark:border-white/10 text-slate-800 dark:text-slate-200 transition-all cursor-pointer"
                          >
                            🎨 Full Palette Customizer
                          </button>
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
                              className="px-3 py-1 text-xs font-semibold rounded-lg bg-pink-500/20 hover:bg-pink-500/30 text-pink-600 dark:text-pink-400 border border-pink-500/30 transition-all cursor-pointer"
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

      {/* Floating Palette Button */}
      <Button
        onPress={onColorOpen}
        className="bg-pink-500 hover:bg-pink-400 text-white font-bold p-4 rounded-full flex justify-center items-center fixed bottom-6 right-6 shadow-[0_0_20px_rgba(236,72,153,0.4)] z-[100] cursor-pointer transition-transform hover:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" />
          <path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
        </svg>
      </Button>

      {/* Full Palette Modal */}
      <Modlas
        isOpen={isColorModalOpen}
        onOpenChange={onColorOpenChange}
        size="4xl"
        backdrop="blur"
      >
        <ModalContents className="bg-white/95 dark:bg-slate-950/95 border border-slate-200 dark:border-white/15 backdrop-blur-2xl rounded-3xl text-slate-900 dark:text-white shadow-2xl">
          <ModlasBodys className="p-6">
            <div className="w-full h-[75vh] flex flex-col">
              <h2 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">
                Tailwind Color Palette Matrix
              </h2>
              <div className="flex-1 overflow-auto rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-white/10 p-4">
                <div className="min-w-max">
                  <table className="border-collapse w-full">
                    <thead className="sticky top-0 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md z-10">
                      <tr>
                        <th className="w-24 text-left text-xs font-bold text-slate-500 dark:text-slate-400 p-2 border-b border-slate-200 dark:border-white/10">
                          Color
                        </th>
                        {shades.map((shade) => (
                          <th
                            key={shade}
                            className="text-xs text-slate-500 dark:text-slate-400 font-semibold px-2 border-b border-slate-200 dark:border-white/10 text-center"
                          >
                            {shade}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {colors.map((color) => (
                        <tr key={color}>
                          <td className="text-xs font-semibold capitalize p-2 sticky left-0 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-r border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
                            {color}
                          </td>
                          {shades.map((shade) => {
                            const isSelected =
                              selected?.color === color &&
                              selected?.shade === shade;
                            return (
                              <td key={shade} className="p-1 text-center">
                                <div
                                  onClick={() => {
                                    setSelected({ color, shade });
                                    onColorOpenChange();
                                  }}
                                  className={`w-6 h-6 rounded-md mx-auto border border-slate-300 dark:border-white/20 bg-${color}-${shade} ${
                                    isSelected
                                      ? "ring-2 ring-pink-500 scale-125 shadow-lg"
                                      : "hover:scale-110"
                                  } transition-transform cursor-pointer`}
                                />
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </ModlasBodys>
        </ModalContents>
      </Modlas>
    </div>
  );
};

export default Index;
