import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // untuk aktif menu
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "motion/react";

interface NavbarProps {
  children?: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  const pathname = usePathname(); // ambil path sekarang

  const menus = [
    { title: "Introduction", href: "/components/Introduction" },
    { title: "Kriston", href: "/components/Kriston" },
    { title: "Leonid", href: "/components/Leonid" },
    { title: "Bendera", href: "/components/Bendera" },
    { title: "Rounak", href: "/components/Rounak" },
    { title: "Kalm", href: "/components/Kalm" },
    { title: "Instagram", href: "/components/Instagram" },
    { title: "Food", href: "/components/Food" },
  ];

  return (
    <div className="flex h-screen  font-sans bg-gray-50 dark:bg-gray-900">
      {/* SIDEBAR */}
      <aside className="w-[20%] bg-white dark:bg-gray-800 p-6 relative h-screen flex flex-col">
        {/* LOGO */}
        <Link href="/" className="text-black dark:text-white">
          <div className="flex items-center gap-3 mb-8">
            <Image
              src="/logos2.png"
              alt="Logo"
              width={32}
              height={32}
              className="h-8 w-8 rounded-full"
            />
            <span className="text-2xl font-bold">Porto</span>
          </div>
        </Link>

        {/* MENU */}
        <ul className="space-y-2 flex-1 flex flex-col">
          {menus.map((menu, index) => {
            const isActive = pathname === menu.href;
            return (
              <Link
                key={index}
                href={menu.href}
                className={`block px-4 py-2 rounded-lg font-medium transition-all duration-200
            ${isActive
                    ? "bg-blue-500 text-white shadow-md"
                    : "text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-600 hover:text-blue-700 dark:hover:text-white"
                  }`}
              >
                {menu.title}
              </Link>
            );
          })}
        </ul>

        {/* DONATE */}
        <div className="absolute left-0 bottom-0 w-full flex justify-center mb-4">
          <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold text-center py-3 px-6 rounded-lg shadow-lg hover:scale-105 transform transition">

               <a href="https://saweria.co/badriana" target="_blank">Donasi / donation</a>
          </div>
        </div>
      </aside>


      {/* KONTEN */}
      <main className="w-[80%] overflow-y-auto">
        <AuroraBackground>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            className="flex flex-col gap-4 items-center justify-center p-6"
          >
            {children && <div className="text-black dark:text-white w-full">{children}</div>}
          </motion.div>
        </AuroraBackground>
      </main>
    </div>
  );
};

export default Navbar;
