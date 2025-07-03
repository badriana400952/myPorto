import { TabelBody, Table, Td, Th, Thead, Tr } from "@/components/page/table";
import { CodeBlock } from "@/components/ui/code-block";
import { Tabs } from "@/components/ui/tabs";
import { tabelPenggunaan, Tables } from "@/utils/data";
import React from "react";

const TabelDemo = () => {
  const tabs = [
    {
      title: "Tampilan",
      value: "Tampilan",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-3 text-xl md:text-4xl font-bold text-gray-700 bg-gray-200">
          <div className="relative overflow-x-auto mt-24">
            <Table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <Thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <Tr className="bg-gray-100 dark:bg-gray-600">
                  <Th scope="col" className="px-6 py-3">
                    Product name
                  </Th>
                  <Th scope="col" className="px-6 py-3">
                    Color
                  </Th>
                  <Th scope="col" className="px-6 py-3">
                    Category
                  </Th>
                  <Th scope="col" className="px-6 py-3">
                    Price
                  </Th>
                </Tr>
              </Thead>
              <TabelBody>
                <Tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                  <Th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Apple MacBook Pro
                  </Th>
                  <Td className="px-6 py-4">Silver</Td>
                  <Td className="px-6 py-4">Laptop</Td>
                  <Td className="px-6 py-4">$2999</Td>
                </Tr>
                <Tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                  <Th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Microsoft Surface Pro
                  </Th>
                  <Td className="px-6 py-4">White</Td>
                  <Td className="px-6 py-4">Laptop PC</Td>
                  <Td className="px-6 py-4">$1999</Td>
                </Tr>
                <Tr className="bg-white dark:bg-gray-800">
                  <Th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Magic Mouse 2
                  </Th>
                  <Td className="px-6 py-4">Black</Td>
                  <Td className="px-6 py-4">Accessories</Td>
                  <Td className="px-6 py-4">$99</Td>
                </Tr>
              </TabelBody>
            </Table>
          </div>
        </div>
      ),
    },
    {
      title: "Code",
      value: "Code",
      content: (
        <div className="w-full overflow-auto scroll-thin scrollbar relative h-full rounded-2xl p-3 text-xl md:text-4xl font-bold text-gray-700 bg-gray-200">
          <CodeBlock
            language="jsx"
            filename="Button.jsx"
            highlightLines={[9, 13, 14, 18]}
            code={Tables}
          />
        </div>
      ),
    },
    {
      title: "Penggunaan",
      value: "Penggunaan",
      content: (
        <div className="w-full overflow-auto scroll-thin scrollbar relative h-full rounded-2xl p-3 text-xl md:text-4xl font-bold text-gray-700 bg-gray-200">
          <CodeBlock
            language="jsx"
            filename="Button.jsx"
            highlightLines={[9, 13, 14, 18]}
            code={tabelPenggunaan}
          />
        </div>
      ),
    },
  ];
  return (
    <>
      <h1 className="text-4xl font-bold  text-start">
        Table, THead, TBody, Tr, Th, Td
      </h1>
      <p className="text-sm text-gray-800 mb-5 mt-5">
        Komponen <strong>Table</strong> dan turunannya (<code>Thead</code>,{" "}
        <code>Tbody</code>, <code>Tr</code>, <code>Th</code>, <code>Td</code>)
        adalah komponen UI reusable yang digunakan untuk menampilkan data dalam
        bentuk tabel.
      </p>
      <p>
        Komponen ini dirancang dengan <em>standar aksesibilitas</em>, styling
        yang fleksibel berbasis <strong>Tailwind CSS</strong>, serta sepenuhnya
        mendukung
        <strong>TypeScript</strong> untuk keamanan tipe. Selain itu, struktur
        internalnya mendukung <code>forwardRef</code> untuk interaksi langsung
        dengan DOM bila diperlukan.
      </p>

      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative  flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-10">
        <Tabs tabs={tabs} contentClassName="mt-24" />
      </div>
      <div className="w-full max-w-5xl px-4  mt-32">
        <h1 className="text-3xl font-bold nb-5 text-start">Keunggulan Table</h1>
        <ul className="list-disc pl-5 space-y-2 ">
          <li>
            ✅ <strong>Fully typed</strong> dengan dukungan lengkap dari{" "}
            <code>React TypeScript</code>.
          </li>
          <li>
            🎨 <strong>TailwindCSS-first</strong> untuk kemudahan styling dan
            konsistensi desain.
          </li>
          <li>
            🔁 <strong>Composable</strong>, memungkinkan struktur tabel disusun
            dari komponen kecil.
          </li>
          <li>
            🧠 <strong>Ref-friendly</strong> dengan dukungan <code>ref</code>{" "}
            pada elemen penting seperti <code>&lt;table&gt;</code>.
          </li>
          <li>
            ⚡ <strong>Polymorphic-compatible</strong> jika ingin dikembangkan
            lebih lanjut.
          </li>
          <li>
            ♿ <strong>Aksesibel</strong> secara default, sesuai struktur{" "}
            <em>HTML semantik</em>.
          </li>
        </ul>
      </div>
    </>
  );
};

export default TabelDemo;
