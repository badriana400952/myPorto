import { Input } from "@/components/page/Input";
import { CodeBlock } from "@/components/ui/code-block";
import { Tabs } from "@/components/ui/tabs";
import { inputpenggunaan } from "@/utils/data";
import React from "react";

const InputDemo = () => {
  const tabs = [
    {
      title: "Tampilan",
      value: "Tampilan",
      content: (
        <div className="w-full bg-white border border-gray-300  overflow-hidden relative h-full rounded-2xl p-3 text-xl md:text-4xl font-bold text-gray-700 ">
          <div className="flex gap-4 items-center flex-col justify-center h-full">
            <Input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Badriana"
              required
            />
            <Input
              type="text"
              id="first_name"
              className="w-full  bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Badriana"
              variant="filled"
              required
            />
            <Input
              type="text"
              id="first_name"
              className="w-full"
              placeholder="John"
              variant="ghost"
              required
            />
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
            code={`import { clsx } from "clsx";
import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const variantClasses = {
  default: "bg-white text-gray-900 rounded-md border border-gray-300 ",
  filled:
    "bg-gray-200 rounded-sm text-gray-700 focus:border-none focus:ring-0 border-none ",
  ghost:
    "border-none bg-transparent border-gray-600 border-2 text-gray-900 rounded-md focus:ring-0 focus:border-none",
} as const;

const sizeClasses = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-3 text-lg",
} as const;
export type InputProps = React.ComponentPropsWithRef<"input"> & {
  as?: React.ElementType;
  variant?: keyof typeof variantClasses;
  size?: keyof typeof sizeClasses;
  className?: string;
};

export const Input: React.FC<InputProps> = forwardRef(
  (
    {
      as: Component = "input",
      variant = "default",
      size = "md",
      className,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={twMerge(
          clsx(
            variantClasses[variant],
            sizeClasses[size as keyof typeof sizeClasses],
            className
          )
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
`}
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
            code={inputpenggunaan}
          />
        </div>
      ),
    },
  ];
  return (
    <>
      <h1 className="text-4xl font-bold text-start">Input</h1>
      <p className="text-sm text-gray-600 mb-5">
        Komponen input untuk merender field isian teks standar
      </p>
      <p className="text-sm text-gray-600 mb-5">
        Jika kalian ingin membuat input teks seperti form, kalian bisa
        menggunakan komponen ini,
      </p>

      <div className="h-[20rem] mb-6 md:h-[40rem] [perspective:1000px] relative  flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-10">
        <Tabs tabs={tabs} contentClassName="mt-24 mb-10" />
      </div>
      <div className="w-full max-w-5xl px-4  mt-32">
        <h1 className="text-3xl font-bold mb-5  text-start">
          Keunggulan dari Input{" "}
        </h1>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            ✅ <strong>Fully typed</strong> dengan{" "}
            <code>React.ComponentPropsWithRef</code>, mendukung semua atribut
            standar <code>&lt;input&gt;</code> plus <code>ref</code>.
          </li>
          <li>
            🎨 <strong>Styling fleksibel</strong> dengan varian{" "}
            <code>variant</code> dan <code>size</code>, memudahkan konsistensi
            desain antar elemen form.
          </li>
          <li>
            🧩 <strong>Composable dan polymorphic</strong> melalui prop{" "}
            <code>as</code>, bisa diganti menjadi elemen lain seperti{" "}
            <code>&lt;textarea&gt;</code> atau komponen lain.
          </li>
          <li>
            🧠 <strong>Ref-friendly</strong> — dapat difokuskan, dipantau, atau
            dikontrol secara imperatif melalui <code>ref</code>.
          </li>
          <li>
            ⚡ <strong>Terintegrasi dengan Tailwind CSS</strong> menggunakan{" "}
            <code>clsx</code> dan <code>twMerge</code> untuk penggabungan kelas
            yang bersih dan efisien.
          </li>
          <li>
            🛡️ <strong>Type-safe dan reusable</strong>, memudahkan pengembangan
            form dengan TypeScript dan menjaga keakuratan props.
          </li>
        </ul>
      </div>
    </>
  );
};

export default InputDemo;
