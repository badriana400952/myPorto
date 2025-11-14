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
    useDisclosure
} from "@heroui/react";
import { FC, SVGProps, useEffect, useState } from "react";
import ReactDOMServer from "react-dom/server";
import Pagination from "../badrian-icons/pagination";

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


    const [iconName, setIconName] = useState<IconItem[]>([
        { name: "", icons: () => <svg></svg>, iconName: "" },
    ]);



    const {
        isOpen: isIconModalOpen,
        onOpen: onIconOpen,
        onOpenChange: onIconOpenChange,
    } = useDisclosure();



    const token = process.env.NEXT_PUBLIC_BASEROW_TOKEN!;
    useEffect(() => {
        const handleGet = async () => {
            const res = await fetch(
                `https://api.baserow.io/api/database/rows/table/732078/?user_field_names=true&page=${page}&filter__name__contains=${search}`,
                {
                    headers: { Authorization: `Token ${token}` },
                }
            );
            const data = await res.json();
            const mappedIcons: IconItem[] = data.results.map((item: IconItemFromBaserow) => {
                let Component: FC<SVGProps<SVGSVGElement>> | null = null;
                const roun = { ...iconMapRounak, ...mapLogos };
                Component = roun[item.icons as keyof typeof roun];
                return { name: item.name, icons: Component || (() => <svg />), iconName: item.icons };
            });
            setTotalPages(data.count / 100);
            setIcons(mappedIcons);
        };

        handleGet();
    }, [page, token, search]);




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
        if (e.target.value) {
            setPage(1);
        }
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearch("");
    };
    console.log(icons, 'ssssssssss')
    return (
        <div className="max-w-8xl p-5 container mx-auto mb-8  ">
            <div className="h-[20rem] flex flex-col justify-center items-center">
                <h2 className="mt-5 text-xl text-center sm:text-5xl dark:text-white text-black">
                    Satu Set Ikon untuk Setiap Proyek
                </h2>
                <p className="w-4xl mt-3 mb-10 text-center text-sm text-gray-600">
                    Satu set ikon lengkap dengan 4964 ikon — siap untuk React, Next.js,
                    Remix, Qwik dan framework lainnya.
                </p>
                <div className="flex justify-center items-center mb-7 gap-2">
                    <div className="col-span-7 col-start-6">
                        <pre className="bg-gray-900 text-yellow-300 rounded-lg p-4 text-sm overflow-x-auto">
                            <code>{`npm install badrian-icon@latest`}</code>
                        </pre>
                    </div>
                    <div className="col-span-7 col-start-6">
                        <pre className="bg-gray-900 text-yellow-300 rounded-lg p-4 text-sm overflow-x-auto">
                            <code>{`import { Apple, Opera } from "badrian-icon/rounak";`}</code>
                        </pre>
                    </div>
                </div>
                <PlaceholdersAndVanishInput
                    placeholders={placeholders}
                    onChange={handleChange}
                    onSubmit={onSubmit}
                />
            </div>



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
                                        className={`w-9 h-9 `}
                                    />
                                </div>
                            </div>
                        );
                    })}

                </div>
                {/* Pagination */}
                <div className="p-4 flex justify-center items-center z-[9999] ">
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
                                    const iconCode = `<${iconNameText} className={"w-8 h-8 "} />`;

                                    const svgString = ReactDOMServer.renderToStaticMarkup(
                                        <IconComponent
                                            className={`w-8 h-8 `}
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
                                                        className={`w-40 h-40 border-4 border-gray-300 rounded-xl `}
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
