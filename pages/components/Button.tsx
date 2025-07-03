import { Button } from "@/components/page/button";
import { CodeBlock } from "@/components/ui/code-block";
import { Tabs } from "@/components/ui/tabs";
import React from "react";

const ButtonPage = () => {
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
  return (
    <div>
      <h1 className="text-4xl font-bold  text-start">Button</h1>
      <p className="text-sm text-gray-600 mb-5 ">
        Komponen tombol untuk merender tombol atau tautan
      </p>
      <p className="text-sm text-gray-600 mb-5 ">
        Jika kalian ingin membuat tombol, kalian bisa menggunakan komponen ini
      </p>
      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative  flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-10">
        <Tabs tabs={tabs} contentClassName="mt-24" />
      </div>

      <div className="w-full max-w-5xl px-4   mt-32">
        <h1 className="text-3xl font-bold mb-5  text-start">
          Keunggulan Table
        </h1>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            ✅ <strong>Fully typed</strong> dengan dukungan{" "}
            <code>React.ComponentPropsWithRef</code> untuk semua atribut native{" "}
            <code>&lt;button&gt;</code>.
          </li>
          <li>
            🎨 <strong>TailwindCSS-ready</strong>, dengan sistem varian visual
            yang konsisten lewat prop <code>variant</code> dan <code>size</code>
            .
          </li>
          <li>
            🔁 <strong>Polymorphic</strong> melalui prop <code>as</code>,
            sehingga bisa digunakan sebagai <code>&lt;a&gt;</code>,{" "}
            <code>&lt;div&gt;</code>, atau elemen lainnya dengan tampilan
            tombol.
          </li>
          <li>
            🧠 <strong>Ref-friendly</strong>, mendukung penggunaan{" "}
            <code>ref</code> untuk integrasi dengan fokus manual, animasi, atau
            akses imperative lainnya.
          </li>
          <li>
            💡 <strong>Kelas CSS terorganisir</strong> menggunakan helper{" "}
            <code>Twc</code> (gabungan dari <code>clsx</code> +{" "}
            <code>twMerge</code>), mencegah duplikasi dan konflik class.
          </li>
          <li>
            🛡️ <strong>Reusable dan maintainable</strong>, siap digunakan dalam
            berbagai konteks UI baik untuk form, navigasi, maupun aksi sekunder.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ButtonPage;
