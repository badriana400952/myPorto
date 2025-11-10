"use client";
import { CodeBlock } from "@/components/ui/code-block";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { colors, shades } from "@/utils/data";
import {
    Button,
    ModalContent as ModalContents,
    ModalHeader,
    Modal as Modlas,
    ModalBody as ModlasBodys,
    Tab,
    Tabs,
    useDisclosure,
} from "@heroui/react";
import { FC, SVGProps, useEffect, useState } from "react";
import ReactDOMServer from "react-dom/server";
import { mapBendera } from "../../utils/iconMapBendera";
import { iconMap } from "../../utils/iconMapLeonid";
import Pagination from "./pagination";
import { iconMapRounak } from "../../utils/iconMapRounak-Bose-soscial";

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
    const [selectedTabs, setSelectedTabs] = useState<string>("all");
    const [selected, setSelected] = useState<Iselected>({
        color: "stone",
        shade: 950,
    });

    const [iconName, setIconName] = useState<IconItem[]>([
        { name: "", icons: () => <svg></svg>, iconName: "" },
    ]);

    const [keyTabs, setKeyTabs] = useState({
        id: "1",
        title: "All-icons",
        table: 731981,
        key: "all"
    });

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
            const res = await fetch(
                `https://api.baserow.io/api/database/rows/table/${keyTabs.table}/?user_field_names=true&page=${page}&filter__name__contains=${search}`,
                {
                    headers: { Authorization: `Token ${token}` },
                }
            );
            const data = await res.json();
            const mappedIcons: IconItem[] = data.results.map((item: IconItemFromBaserow) => {
                let Component: FC<SVGProps<SVGSVGElement>> | null = null;

                if (keyTabs.table === 731981) {
                    Component = iconMap[item.icons as keyof typeof iconMap];
                } else if (keyTabs.table === 732071) {
                    Component = mapBendera[item.icons as keyof typeof mapBendera];
                } else if (keyTabs.table === 732078) {
                    Component = iconMapRounak[item.icons as keyof typeof iconMapRounak];
                }

                return { name: item.name, icons: Component || (() => <svg />), iconName: item.icons };
            });
            setTotalPages(data.count / 100);
            console.log(data);
            setIcons(mappedIcons);
        };

        handleGet();
    }, [page, token, search, keyTabs ]);




    const placeholders = [
        "Cari ikon untuk proyekmu...",
        "Apa ikon terbaik untuk tombol hapus?",
        "Tampilkan ikon bergaya duotone...",
        "Butuh ikon dengan gaya minimalis?",
        "Temukan ikon untuk dashboard kamu...",
        "Yaudah terserah...",
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearch("");
    };

    return (
        <div className="max-w-8xl container mx-auto mb-8 mt-10">
            <div className="h-[20rem] flex flex-col justify-center items-center">
                <h2 className="mt-5 text-xl text-center sm:text-5xl dark:text-white text-black">
                    Satu Set Ikon untuk Setiap Proyek
                </h2>
                <p className="w-4xl mt-3 mb-10 text-center text-sm text-gray-600">
                    Satu set ikon lengkap dengan 4964 ikon — siap untuk React, Next.js,
                    Remix, Qwik dan framework lainnya.
                </p>
                <PlaceholdersAndVanishInput
                    placeholders={placeholders}
                    onChange={handleChange}
                    onSubmit={onSubmit}
                />
            </div>

            <Tabs
                aria-label="Project categories"
                selectedKey={selectedTabs}
                onSelectionChange={(key) => setSelectedTabs(key.toString())}
                className="flex justify-center mb-12"
                variant="light"
                color="primary"
            >

                <Tab key="all" title="All Projects" onClick={() => {
                    setKeyTabs({
                        id: "1",
                        title: "All-icons",
                        table: 731981,
                        key: "all"
                    })
                    setPage(1)
                }} />
                <Tab key="Leonid-Tsvetkov" title="Leonid-Tsvetkov" onClick={() => {
                    setKeyTabs(
                        { id: "2", title: "Leonid-Tsvetkov", table: 731981, key: "Leonid-Tsvetkov" },
                    )
                    setPage(1)
                }} />
                <Tab key="bendera-Даниил" title="bendera-Даниил" onClick={() => {
                    setKeyTabs(
                        { id: "3", title: "bendera-Даниил", table: 732071, key: "bendera-Даниил" },
                    )
                    setPage(1)
                }} />
                <Tab key="Rounak-Bose-soscial" title="Rounak-Bose-soscial" onClick={() => {
                    setKeyTabs(
                        { id: "4", title: "Rounak-Bose-soscial", table: 732078, key: "Rounak-Bose-soscial" },
                    )
                    setPage(1)
                }} />
            </Tabs>

            <div className="mt-9 w-full px-3 m-auto">
                <div className="grid grid-cols-10 gap-8">
                    {icons.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="relative bg-gradient-to-b from-white/60 to-white/10 backdrop-blur-xl brightness-110 border border-white/30 rounded-xl shadow-inner overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/30 to-transparent opacity-40"></div>
                                <div
                                    className="relative p-6 text-gray-800 font-semibold cursor-pointer"
                                    onClick={() => {
                                        onIconOpen();
                                        setIconName([{ name: item.name, icons: item.icons, iconName: item.iconName }]);
                                    }}
                                >
                                    <item.icons
                                        className={`w-9 h-9 text-${selected?.color}-${selected?.shade}`}
                                    />
                                </div>
                            </div>
                        );
                    })}

                </div>
                {/* Pagination */}
                <div className="p-4 flex justify-center items-center ">
                    <Pagination
                        totalPages={totalPages}
                        currentPage={page}
                        onPageChange={setPage}
                    />
                </div>
            </div>


            <Modlas isOpen={isIconModalOpen} onOpenChange={onIconOpenChange} size="4xl">
                <ModalContents>
                    {() => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                {iconName[0]?.name}
                            </ModalHeader>

                            <ModlasBodys>
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
                                            className="overflow-hidden relative bg-gradient-to-b mb-7 from-white/60 to-white/10 backdrop-blur-xl brightness-110 border border-white/30 rounded-xl shadow-inner"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/30 to-transparent opacity-40"></div>

                                            <div className="flex justify-start w-full items-start">
                                                <div className="relative p-6 text-gray-800 font-semibold cursor-pointer">
                                                    <IconComponent
                                                        className={`w-40 h-40 border-4 border-gray-300 rounded-xl text-${selected?.color}-${selected?.shade}`}
                                                    />
                                                </div>

                                                <div className="z-10 w-full mt-7 text-center space-y-2 overflow-auto">
                                                    <CodeBlock
                                                        language="jsx"
                                                        filename={`${iconNameText}.jsx`}
                                                        highlightLines={[1]}
                                                        code={iconCode}
                                                    />

                                                    <p className="text-xs text-gray-500 italic">
                                                        Ini contoh penggunaan ikon{" "}
                                                        <span className="font-medium text-gray-700">
                                                            {iconNameText}
                                                        </span>{" "}
                                                        — kamu bisa ubah warna dan ukuran sesukamu!
                                                    </p>

                                                    <p className="text-xs mt-8 text-gray-500 italic">
                                                        Gunakan SVG saja
                                                    </p>
                                                    <CodeBlock
                                                        language="html"
                                                        filename={`${iconNameText}.svg`}
                                                        highlightLines={[1]}
                                                        code={svgString}
                                                    />

                                                    <button
                                                        onClick={onColorOpen}
                                                        className="mt-3 px-4 py-2 text-sm rounded-md bg-gray-200 hover:bg-gray-300 transition"
                                                    >
                                                        🎨 Ganti Warna
                                                    </button>
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

            {/* Tombol Warna & Modal Warna */}
            <Button
                onPress={onColorOpen}
                className="bg-black dark:bg-white dark:text-black text-white flex justify-center fixed bottom-5 right-5 group/modal-btn"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-palette"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" />
                    <path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                    <path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                </svg>
            </Button>

            <Modlas
                isOpen={isColorModalOpen}
                onOpenChange={onColorOpenChange}
                size="4xl"
                className="overflow-hidden"
            >
                <ModalContents>
                    <ModlasBodys>
                        <div className="p-2 w-full h-[80vh] flex flex-col">
                            <h1 className="text-2xl font-bold mb-4">Tailwind Color Palette</h1>
                            <div className="flex-1 overflow-auto rounded-lg shadow-sm">
                                <div className="min-w-max">
                                    <table className="border-collapse w-full custom-scroll">
                                        <thead className="sticky top-0 bg-white/90 backdrop-blur-md z-10">
                                            <tr>
                                                <th className="w-20 text-left font-semibold p-2 border-b">
                                                    Color
                                                </th>
                                                {shades.map((shade) => (
                                                    <th
                                                        key={shade}
                                                        className="text-xs text-gray-500 font-medium px-2 border-b"
                                                    >
                                                        {shade}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {colors.map((color) => (
                                                <tr key={color}>
                                                    <td className="text-sm font-medium capitalize pr-2 p-2 sticky left-0 bg-white/90 backdrop-blur-md border-r">
                                                        {color}
                                                    </td>
                                                    {shades.map((shade) => {
                                                        const isSelected =
                                                            selected?.color === color &&
                                                            selected?.shade === shade;
                                                        return (
                                                            <td key={shade} className="p-1">
                                                                <div
                                                                    onClick={() => setSelected({ color, shade })}
                                                                    className={`w-6 h-6 rounded-md ml-5 border bg-${color}-${shade} ${isSelected
                                                                        ? `ring-2 ring-${color}-${shade} scale-110 transition-transform`
                                                                        : ""
                                                                        } cursor-pointer`}
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
