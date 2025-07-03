import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NavbarProps {
  children?: React.ReactNode;
}
const Navbar: React.FC<NavbarProps> = ({ children }) => {
  const menus = [
    { title: "Introduction", href: "/components/Introduction" },
    { title: "Button", href: "/components/Button" },
    { title: "Input", href: "/components/input" },
    // { title: "Card", href: "/components/card" },
    // { title: "Modal", href: "/components/modal" },
    { title: "Table", href: "/components/table" },
    // { title: "Badge", href: "/components/badge" },
    // { title: "Alert", href: "/components/alert" },
    // { title: "Avatar", href: "/components/avatar" },
    // { title: "Tabs", href: "/components/tabs" },
    // { title: "Tooltip", href: "/components/tooltip" },
    // { title: "Accordion", href: "/components/accordion" },
    // { title: "Sidebar", href: "/components/sidebar" },
    // { title: "Navbar", href: "/components/navbar" },
    // { title: "Form", href: "/components/form" },
    // { title: "Dropdown", href: "/components/dropdown" },
    // { title: "Breadcrumb", href: "/components/breadcrumb" },
    // { title: "Toast", href: "/components/toast" },
    // { title: "Spinner", href: "/components/spinner" },
    // { title: "Pagination", href: "/components/pagination" },
  ];

  return (
    <div className="flex h-screen font-sans">
      {/* SIDEBAR */}
      <aside className="w-[20%] bg-gray-100 p-6 overflow-y-auto">
        <Link href="/" className="text-black">
          <div className=" flex items-center gap-3  mb-6">
            <Image
              src="/logos.jpeg"
              alt="Logo"
              width={24}
              height={24}
              className="h-6 w-6 shrink-0 rounded-full"
            />{" "}
            <span className="text-xl font-bold ">Porto</span>
          </div>
        </Link>
        <ul className="space-y-2 flex flex-col">
          {menus.map((menu, index) => (
            <Link
              key={index}
              href={menu.href}
              className="text-black hover:underline mt-2"
            >
              {menu.title}
            </Link>
          ))}
        </ul>
      </aside>

      {/* KONTEN */}
      <main className="w-[80%] bg-white p-6 overflow-y-auto">
        {children ? (
          <div className="text-black dark:text-white">{children}</div>
        ) : null}
      </main>
    </div>
  );
};

export default Navbar;
