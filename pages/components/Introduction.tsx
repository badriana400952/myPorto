import { Button } from "@/components/page/button";
import { CodeBlock } from "@/components/ui/code-block";
import { Tabs } from "@/components/ui/tabs";
import Link from "next/link";
import { RiExternalLinkLine } from "react-icons/ri";
import { FaExternalLinkAlt } from "react-icons/fa";
const Introduction = () => {
  const buttons = `import { Twc } from "@/lib/utils";
import React, { forwardRef } from "react";
            
const baseStyles = "inline-flex items-center justify-center font-medium rounded transition-colors  disabled:opacity-50 disabled:pointer-events-none"; 

const variantClasses = {
  filed: "bg-[#0079f8] text-white hover:bg-blue-600 ",
  default: "bg-white text-gray-900 rounded-md border border-gray-300 hover:border-gray-50",
  outline:  "border bg-transparent border-gray-600 border-2 text-gray-900 rounded-md",
};

const sizeClasses = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-3 text-lg",
};
            
export type ButtonProps = React.ComponentPropsWithRef<"button"> & {
  as?: React.ElementType;
  variant?: keyof typeof variantClasses;
  size?: keyof typeof sizeClasses;
  className?: string;
  children?: React.ReactNode;
};

  export const Button: React.FC<ButtonProps> = forwardRef(
    (
      {
        as: Component = "button",
        variant = "default",
        size = "md",
        className,
        children,
        ...props
      },
      ref
    ) => {
      return (
        <Component
          ref={ref}
          className={Twc(
            baseStyles,
            variantClasses[variant],
            sizeClasses[size],
            className
          )}
          {...props}
        >
          {children}
        </Component>
      );
    }
  );
  
  Button.displayName = "Button";
  `;
  const tabs = [
    {
      title: "Tampilan",
      value: "Tampilan",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-3 text-xl md:text-4xl font-bold text-gray-700 bg-gray-200">
          <div className="flex gap-4 items-center justify-center h-full">
            <Button variant="default"> Default </Button>
            <Button variant="filed"> Filed </Button>
            <Button variant="outline"> Outline </Button>
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
            code={buttons}
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
            code={`const CobaButton = () => {
    return <Button variant="default"> Default </Button>;
  };`}
          />
        </div>
      ),
    },
  ];

  const clx = `npm install clsx tailwind-merge`;
  return (
    <>
      <div className="p-6 dark:bg-gray-800 rounded-lg">
        <h1 className="text-3xl font-bold my-3">Introduction</h1>
        <p className="text-gray-700 text-lg dark:text-gray-300">
          Hai! Selamat datang di <strong>My Komponent Library</strong>. Ini
          adalah pustaka komponen UI yang dirancang untuk memudahkan kamu
          membangun antarmuka pengguna yang menarik dan responsif. Komponen di
          dalam pustaka ini dibuat dengan prinsip desain modern dan mengikuti
          praktik terbaik dalam pengembangan frontend.
        </p>
        <p className="text-gray-700 text-lg dark:text-gray-300 mt-4 mb-7">
          Menurut React.dev, <strong>komponen</strong> adalah blok UI yang dapat
          digunakan kembali dan ditulis sebagai fungsi atau kelas. Komponen
          dapat menerima input melalui <code>props</code> dan mengembalikan
          elemen React yang menjelaskan tampilan antarmuka.
        </p>
        <span className="mb-4 mt-4 text-gray-600 dark:text-gray-400 italic">
          &quot;Komponen React adalah fungsi JavaScript yang dapat Anda
          tambahkan markup di dalamnya. Namanya selalu dimulai dengan huruf
          kapital dan mengembalikan markup JSX.&quot;
        </span>
        <p className="text-gray-700 mt-5 text-lg dark:text-gray-300 mb-4">
          Saat ini tersedia banyak pustaka UI populer seperti{" "}
          <strong>Chakra UI, Mantine, Ant Design</strong>, dan lainnya. Mereka
          menyediakan berbagai komponen siap pakai sehingga kamu bisa langsung
          menggunakannya sesuai kebutuhan.
          <br />
          Tapi, jika kamu membuat komponen sendiri, ada banyak keuntungan
          tambahan yang bisa didapatkan, lho!
        </p>
        <div className="max-w-5xl px-4 py-6">
          <h2 className="text-2xl font-bold mb-6">
            Perbandingan: Buat Komponen Sendiri vs Pakai Library
          </h2>
          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Aspek
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Buat Sendiri
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Pakai Library
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm">
                {[
                  [
                    "🎨 Kontrol Desain",
                    "100% kamu yang atur",
                    "Tergantung fitur & tema bawaan",
                  ],
                  [
                    "⚙️ Performa",
                    "Ringan (jika dirancang baik)",
                    "Bisa berat karena banyak fitur bawaan",
                  ],
                  [
                    "🔄 Fleksibilitas",
                    "Sangat fleksibel",
                    "Kadang terbatas pada API mereka",
                  ],
                  [
                    "🧱 Konsistensi UI",
                    "Harus kamu jaga sendiri",
                    "Sudah built-in dan konsisten",
                  ],
                  [
                    "🕒 Waktu Pengembangan",
                    "Lebih lama",
                    "Lebih cepat karena komponen siap pakai",
                  ],
                  [
                    "🧪 Testing",
                    "Harus kamu uji sendiri",
                    "Sudah stabil dan battle-tested",
                  ],
                  [
                    "🎯 Learning Curve",
                    "Tidak perlu belajar API baru",
                    "Harus mempelajari struktur & props library",
                  ],
                ].map(([aspect, custom, library], index) => (
                  <tr
                    key={aspect}
                    className={index % 2 === 1 ? "bg-gray-50" : ""}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">{aspect}</td>
                    <td className="px-6 py-4">{custom}</td>
                    <td className="px-6 py-4">{library}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="text-gray-700 text-lg dark:text-gray-300 mt-4">
          Tapi jangan salah, membuat komponen sendiri juga memberikan banyak
          manfaat, lho! Seperti yang akan kita lihat berikut ini:
        </p>
        <div className="max-w-4xl px-4 py-6">
          <h2 className="text-2xl font-bold mb-6">
            Manfaat Membuat Komponen Sendiri (Untuk Developer)
          </h2>
          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    No
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Manfaat
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Penjelasan Singkat
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm">
                {[
                  [
                    "1",
                    "🧠 Memahami UI Lebih Dalam",
                    "Belajar membangun UI dari nol, termasuk struktur, perilaku, dan aksesibilitas.",
                  ],
                  [
                    "2",
                    "🛠️ Meningkatkan Skill Frontend",
                    "Melatih pola pikir 'thinking in components' yang penting untuk technical test.",
                  ],
                  [
                    "3",
                    "💼 Portfolio Kuat dan Unik",
                    "Menjadi nilai tambah saat melamar kerja dan bisa dipakai ulang di proyek lain.",
                  ],
                  [
                    "4",
                    "🧩 Fleksibilitas Tanpa Batas",
                    "Tidak terikat oleh batasan library atau desain yang sudah jadi.",
                  ],
                  [
                    "5",
                    "🧪 Belajar Testing",
                    "Komponen kecil cocok untuk latihan unit testing maupun integration testing.",
                  ],
                  [
                    "6",
                    "🧠 Mandiri dan Adaptif",
                    "Meningkatkan pemahaman dasar sehingga tidak bergantung pada framework.",
                  ],
                ].map(([no, title, desc], index) => (
                  <tr key={no} className={index % 2 === 1 ? "bg-gray-50" : ""}>
                    <td className="px-6 py-4">{no}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{title}</td>
                    <td className="px-6 py-4">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="text-gray-700 text-lg dark:text-gray-300 mt-4">
          Sekarang, mari kita mulai dari awal untuk membangun komponen kita
          sendiri. Aku juga akan membagikan beberapa contoh penggunaannya agar
          kamu bisa langsung mencoba dan memahami konsepnya dengan mudah.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">
          1. <code>Tailwind CSS</code>
        </h2>
        <p className="text-gray-700 text-lg dark:text-gray-300">
          {" "}
          Sebelum membuat komponen UI yang bisa dipakai ulang, kita mulai dulu
          dari <strong>Tailwind CSS</strong>. Tailwind adalah utility-first CSS
          framework yang memungkinkan kita membangun desain antarmuka langsung
          di dalam elemen HTML atau JSX dengan class-class seperti{" "}
          <code>px-4</code>, <code>text-center</code>, <code>bg-blue-500</code>,
          dan sebagainya.{" "}
        </p>{" "}
        <p className="text-gray-700 text-lg dark:text-gray-300 mt-2">
          {" "}
          Tailwind membuat kita bisa mendesain UI dengan cepat tanpa harus
          menulis CSS secara manual. Tapi, ketika komponen makin kompleks, kita
          akan sering menulis class secara dinamis. Nah, di sinilah{" "}
          <strong>
            <code>clsx</code>
          </strong>{" "}
          dan{" "}
          <strong>
            <code>tailwind-merge</code>
          </strong>{" "}
          sangat berguna — dan akan dibahas di poin berikutnya. silahkan install
          tailwind terlebih dulu dengan mengunjungi website nya{" "}
          <Link
            href="https://tailwindcss.com/docs/installation/using-vite"
            className="text-blue-500 flex items-center gap-2 hover:underline"
          >
            <code>Tailwind Css</code> <RiExternalLinkLine />
          </Link>
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">
          2. <code>clsx</code> dan <code>tailwind-merge</code>
        </h2>
        <p className="text-gray-700 text-lg dark:text-gray-300">
          Mengapa kita membutuhkan <code>clsx</code> dan{" "}
          <code>tailwind-merge</code>? Karena saat membangun komponen UI yang
          fleksibel, sering kali kita perlu mengatur class Tailwind secara
          dinamis berdasarkan kondisi tertentu.
          <br />
          <strong>
            <code>clsx</code>
          </strong>{" "}
          membantu kita menggabungkan class secara kondisional dengan cara yang
          rapi dan efisien. Sementara itu,{" "}
          <strong>
            <code>tailwind-merge</code>
          </strong>{" "}
          berguna untuk menyatukan class Tailwind yang mungkin saling
          bertentangan (seperti <code>p-2</code> dan <code>p-4</code>), sehingga
          hanya class terakhir yang relevan yang akan digunakan.
        </p>
        <p className="text-gray-700 text-lg dark:text-gray-300 mt-4">
          <strong>Code:</strong>
        </p>
        <div className="max-w-3xl  w-full">
          <CodeBlock
            language="jsx"
            filename="DummyComponent.jsx"
            highlightLines={[9, 13, 14, 18]}
            code={clx}
          />
        </div>
        <p className="text-gray-700 text-lg dark:text-gray-300 mt-4">
          Jika sudah, Sekarang kita buka VScode nya
        </p>
        <p className="text-gray-700 text-lg mb-3 dark:text-gray-300 mt-4">
          Buat fungsi ini. tujuan nya adalah Menyederhanakan dan menstandarkan
          cara menggabungkan className di seluruh komponen React, supaya lebih
          bersih, fleksibel, dan bebas bug konflik class Tailwind. <br />
        </p>
        <span className="text-gray-700 text-md  dark:text-gray-300 mt-4">
          <code>lib/utils.ts</code>
        </span>
        <div className="max-w-3xl mt-3  w-full">
          <CodeBlock
            language="jsx"
            filename="utils.ts"
            highlightLines={[9, 13, 14, 18]}
            code={`export function Twc(...inputs: ClassValue[]) {
     return twMerge(clsx(inputs));
}`}
          />
        </div>
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative  flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-10">
          <Tabs tabs={tabs} />
        </div>
        <div className="mt-24 flex items-end justify-end m-3">
          <div className="flex items-center gap-2 text-gray-500 ">
            <Link href={"/components/Button"}>Button</Link>
            <FaExternalLinkAlt />
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
