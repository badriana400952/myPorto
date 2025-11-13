"use client";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarButton,
  NavbarLogo,
  NavBody,
  NavItems
} from "@/components/ui/resizable-navbar";
import { useEffect, useState } from "react";

export default function NavbarDemo({ children }: { children: React.ReactNode }) {
  const navItems = [
    {
      name: "Dokumentasi",
      link: "/badrian-icons/dokumentasi-icon",
    },
    {
      name: "Icons",
      link: "/badrian-icons",
    },
    // {
    //   name: "Donasi",
    //   link: "https://saweria.co/badriana",
    // },
  ];
 const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  if (!isClient) return null;
  return (
    <div className="relative mb-10 w-full ">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          {/* <div className="flex items-center gap-4">
            <NavbarButton variant="primary">Book a call</NavbarButton>
            </div> */}
          <div className="flex items-center gap-4">

            <NavbarButton variant="primary">
              <a href="https://saweria.co/badriana" target="_blank">
                <span className="relative z-20 cursor-pointer">Donasi / donation</span>
            </a>
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300 cursor-pointer"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            {/* <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Book a call
              </NavbarButton>
            </div> */}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      {children}

      {/* Navbar */}
    </div>
  );
}


