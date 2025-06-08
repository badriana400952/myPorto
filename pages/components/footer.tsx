import React from "react";
import { Link, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-content1 border-t border-divider py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="mb-4">
              <p className="font-bold text-xl">
                Badriana<span className="text-primary">.dev</span>
              </p>
            </div>
            <p className="text-foreground-500 mb-6 max-w-md">
              Building exceptional digital experiences with modern technologies.
              Available for freelance projects and full-time opportunities.
            </p>
            <div className="flex gap-4">
              {[
                "logos:github-icon",
                "logos:linkedin-icon",
                "logos:twitter",
                "logos:dribbble-icon",
              ].map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 bg-content2 rounded-full hover:bg-primary/10 transition-colors"
                >
                  <Icon icon={icon} width={20} height={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-gray-600">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "#home" },
                { name: "About", href: "#about" },
                { name: "Projects", href: "#projects" },
                { name: "Skills", href: "#skills" },
                { name: "Testimonials", href: "#testimonials" },
                { name: "Contact", href: "#contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    color="foreground"
                    className="hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-gray-600">Contact</h3>
            <ul className="space-y-3">
              {[
                { icon: "lucide:mail", text: "badriana0402@gmail.com" },
                { icon: "lucide:phone", text: "+62 85887535612" },
                { icon: "lucide:map-pin", text: "Jakarta Barat, Indonesia" },
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Icon icon={item.icon} className="text-primary" width={16} />
                  <span className="text-foreground-500">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Divider className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground-500 text-sm">
            © {new Date().getFullYear()} Badriana.dev. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" color="foreground" className="text-sm">
              Privacy Policy
            </Link>
            <Link href="#" color="foreground" className="text-sm">
              Terms of Service
            </Link>
            <Link href="#" color="foreground" className="text-sm">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
