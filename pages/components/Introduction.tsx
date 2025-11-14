"use client";
import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});
const Dokumentasi = () => {



    return (
        <div className={`max-w-8xl mx-auto p-5 z-[9999] mb-8 mt-10 ${inter.className}`}>
            {/* Header */}
            <h1 className="text-4xl font-bold mb-4 text-gray-900"> Instalasi badrian-icon</h1>
            <p className="text-md mb-10 text-gray-600">
                Koleksi ikon React ringan, konsisten, dan fleksibel untuk proyek modern seperti Next.js, Remix, atau Vite.
            </p>
<div className={`max-w-8xl mx-auto p-5 z-[9999] mb-8 mt-10 ${inter.className}`}>
    {/* Intro Monorepo */}
    <div className="mb-10">
        <p className="text-md text-gray-600">
            <b>badrian-icon</b> dibuat menggunakan <b>monorepo</b>, sehingga setiap paket ikon dikelola secara 
            terpisah. Pendekatan ini membuat <i>bundle</i> lebih ringan bagi konsumen karena hanya paket yang 
            digunakan yang akan diimpor. Semua ikon tersedia sebagai <b>React components</b> yang langsung menggunakan 
            SVG, tanpa bergantung pada runtime tambahan.
        </p>
    </div>

    {/* Header */}
    <h1 className="text-4xl font-bold mb-4 text-gray-900"> Instalasi badrian-icon</h1>
    <p className="text-md mb-10 text-gray-600">
        Koleksi ikon React ringan, konsisten, dan fleksibel untuk proyek modern seperti Next.js, Remix, atau Vite.
    </p>

    {/* ... lanjutkan konten dokumentasi */}
</div>

            {/* Section: Instalasi */}
            <div className="grid grid-cols-12 grid-rows-1 gap-1">
                <div className="flex justify-center items-start"><p>01</p></div>
                <div className="col-span-4">
                    <h2 className="text-2xl font-semibold mb-3 text-gray-900"> Instalasi</h2>
                    <p className="mb-3 text-gray-600">Pilih salah satu metode instalasi </p>
                </div>
                <div className="col-span-7 col-start-6">
                    <pre className="bg-gray-900 text-green-400 rounded-lg p-4 text-sm overflow-x-auto">
                        <code>{`npm install badrian-icon
# atau
yarn add badrian-icon
# atau
pnpm add badrian-icon`}</code>
                    </pre>
                </div>
            </div>




            <div className="grid grid-cols-12 grid-rows-1 mt-12 gap-4">
                <div className="flex justify-center items-start"><p>02</p></div>
                <div className="col-span-4">
                    <h2 className="text-2xl font-semibold mb-3 text-gray-900"> Konfigurasi  </h2>
                    <p className="mb-3 text-gray-600">
                        Gunakan <b>Tailwind CSS</b>, tambahkan direktori <code>badrian-icon</code> ke dalam file{" "}
                        <code>tailwind.config.js</code>:
                    </p>
                </div>
                <div className="col-span-7 col-start-6">
                    <pre className="bg-gray-900 mb-6 text-blue-400 rounded-lg p-4 text-sm overflow-x-auto">
                        <code>{`npm install -D tailwindcss postcss autoprefixer
`}</code>
                    </pre>
                    <pre className="bg-gray-900 text-blue-400 rounded-lg p-4 text-sm overflow-x-auto">
                        <code>{`module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/badrian-icon/**/*.js"
  ],
     safelist: [
    {
      pattern:
        /(bg|text|border)-(red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|
        blue|indigo|violet|purple|fuchsia|pink|rose|slate|gray|zinc|neutral|stone)-(50|100
        |200|300|400|500|600|700|800|900|950)/,
    },
  ],
  theme: { extend: {} },
  plugins: [],
}`}</code>
                    </pre>
                </div>
            </div>


            <div className="grid grid-cols-12 grid-rows-1 mt-12 gap-4">
                <div className="flex justify-center items-start"><p>03</p></div>
                <div className="col-span-4">
                    <h2 className="text-2xl font-semibold mb-3 text-gray-900"> Cara Menggunakan</h2>
                    <p className="mb-3 text-gray-600">Import ikon langsung dari package:</p>
                </div>
                <div className="col-span-7 col-start-6">
                    <pre className="bg-gray-900 text-yellow-300 rounded-lg p-4 text-sm overflow-x-auto">
                        <code>{`import { Add, Trash } from "badrian-icon/kriston";
import { Edit  } from "badrian-icon/leonid";

export default function Example() {
  return (
    <div className="flex items-center gap-4">
      <Add className="w-6 h-6 text-green-600" />
      <Edit className="w-6 h-6 text-blue-600" />
      <Trash className="w-6 h-6 text-red-600" />
    </div>
  );
}`}</code>
                    </pre>
                </div>
            </div>


            <div className="grid grid-cols-12 grid-rows-1  mt-12 gap-4">
                <div className="flex justify-center items-start"><p>04</p></div>

                <div className="col-span-4">
                    <h2 className="text-2xl font-semibold mb-3 text-gray-900"> Kustomisasi</h2>

                </div>
                <div className="col-span-7 col-start-6">
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-lg mb-2 text-gray-800">1️ Ukuran</h3>
                            <pre className="bg-gray-900 text-yellow-300 rounded-lg p-4 text-sm">
                                <code>{`<Add className="w-10 h-10" />`}</code>
                            </pre>
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg mb-2 text-gray-800"> Warna</h3>
                            <pre className="bg-gray-900 text-yellow-300 rounded-lg p-4 text-sm">
                                <code>{`<Trash className="text-red-500" />`}</code>
                            </pre>
                        </div>

                        <div>
                            <h3 className="font-semibold text-lg mb-2 text-gray-800">3️ Warna Kustom (tanpa Tailwind)</h3>
                            <pre className="bg-gray-900 text-yellow-300 rounded-lg p-4 text-sm">
                                <code>{`<Edit style={{ color: "#f59e0b", width: 32, height: 32 }} />`}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>


            <div className="grid grid-cols-12 grid-rows-1  mt-12 gap-4">
                <div className="flex justify-center items-start"><p>05</p></div>

                <div className="col-span-4">
                    <h2 className="text-2xl font-semibold mb-3 text-gray-900"> Penggunaan Dinamis</h2>
                    <p className="mb-3 text-gray-600">Render ikon berdasarkan nama secara dinamis:</p>
                </div>
                <div className="col-span-7 col-start-6">
                    <pre className="bg-gray-900 text-yellow-300 rounded-lg p-4 text-sm overflow-x-auto">
                        <code>{`import * as Icons from "badrian-icon";

export default function DynamicExample({ iconName = "Add" }) {
  const IconComponent = Icons[iconName];
  return <IconComponent className="w-8 h-8 text-blue-500" />;
}`}</code>
                    </pre>
                </div>
            </div>


            <div className="grid grid-cols-12 grid-rows-1  mt-12 gap-4">
                <div className="flex justify-center items-start"><p>06</p></div>

                <div className="col-span-4">
                    <h2 className="text-2xl font-semibold mb-3 text-gray-900"> Integrasi Next.js</h2>

                </div>
                <div className="col-span-7 col-start-6">
                    <pre className="bg-gray-900 text-yellow-300 rounded-lg p-4 text-sm overflow-x-auto">
                        <code>{`"use client";
import { ArrowRight } from "badrian-icon";

export default function ButtonNext() {
  return (
    <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg">
      Next
      <ArrowRight className="w-5 h-5" />
    </button>
  );
}`}</code>
                    </pre>
                </div>
            </div>



            <div className="grid grid-cols-12 grid-rows-1 mt-12 gap-4">
                <div className="flex justify-center items-start"><p>07</p></div>

                <div className="col-span-4">
                    <h2 className="text-2xl font-semibold mb-3 text-gray-900"> Contoh Tambahan</h2>

                </div>
                <div className="col-span-7 col-start-6">
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold mb-2 text-gray-800">Button dengan Ikon</h3>
                            <pre className="bg-gray-900 text-yellow-300 rounded-lg p-4 text-sm">
                                <code>{`import { Save } from "badrian-icon";

<button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md">
  <Save className="w-5 h-5" />
  Simpan
</button>`}</code>
                            </pre>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-2 text-gray-800">Input dengan Ikon</h3>
                            <pre className="bg-gray-900 text-yellow-300 rounded-lg p-4 text-sm">
                                <code>{`import { Search } from "badrian-icon";

<div className="flex items-center border rounded-md px-3 py-2">
  <Search className="w-5 h-5 text-gray-400" />
  <input type="text" placeholder="Cari ikon..." className="ml-2 outline-none" />
</div>`}</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section: Lisensi */}
            <section>
                <h2 className="text-2xl font-semibold mb-3 text-gray-900"> Lisensi</h2>
                <p className="text-gray-600">
                    <b>badrian-icon</b> dirilis di bawah lisensi <b>MIT</b> — bebas digunakan untuk proyek pribadi maupun
                    komersial.
                </p>
            </section>
        </div>
    );
};

export default Dokumentasi;
