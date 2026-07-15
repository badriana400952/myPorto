"use client";
import { NpmPackageCard } from "@/components/package";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem
} from "@heroui/react";
import Head from "next/head";
import Link from "next/link";
import { AboutSection } from "../components/about-section";
import { ContactSection } from "../components/contact-section";
import { ExperienceGallery } from "../components/experience-gallery";
import { Footer } from "../components/footer";
import { HeroSection } from "../components/hero-section";
import { ProjectsSection } from "../components/projects-section";
import { SkillsSection } from "../components/skills-section";
import { TestimonialsSection } from "../components/testimonials-section";
import { ThemeSwitcher } from "../components/theme-switcher";
import { IconPlayground } from "../components/IconPlayground";

export default function Home() {
  const packages = [
    {
      name: "Copong Date",
      description:
        "Copong Date adalah kumpulan utilitas tanggal dan waktu berbasis TypeScript yang dirancang khusus untuk mempermudah proses formatting, manipulasi, validasi, dan kalkulasi tanggal di aplikasi frontend modern seperti React dan Next.js.",
      version: "3.2.0",
      weeklyDownloads: 4,
      stars: 1,
      npmUrl: "https://www.npmjs.com/package/copong-date",
      repoUrl: "https://github.com/badriana400952/copong-date",
    },
    {
      name: "copong-utils",
      description:
        "Komponen rendering kondisional yang sederhana dan mudah dibaca untuk React, terinspirasi dari pernyataan kontrol alur seperti if, else if, else, dan switch.",
      version: "1.0.8",
      weeklyDownloads: 10,
      stars: 1,
      npmUrl: "https://www.npmjs.com/package/copong-utils",
      repoUrl: "https://github.com/badriana400952/copong-utils",
    },
    {
      name: "react-virtual-component-boundary",
      description:
        "Komponen React yang powerful dan reusable untuk menjadi Error Boundary sekaligus wrapper modular. Cocok untuk menjaga kode React tetap rapi, aman, dan mudah digunakan ulang tanpa membuat banyak file kecil.",
      version: "2.0.4",
      weeklyDownloads: 7,
      stars: 0,
      npmUrl: "https://www.npmjs.com/package/react-virtual-component-boundary",
      repoUrl: "https://www.npmjs.com/package/react-virtual-component-boundary",
    },
    {
      name: "badrian-icon",
      description:
        "badrian-icon adalah koleksi ikon modern untuk React dan Next.js, ringan, konsisten, dan mudah dikustomisasi dengan Tailwind CSS atau class React.",
      version: "2.1.26",
      weeklyDownloads: 42,
      stars: 2.572,
      npmUrl: "https://www.npmjs.com/package/badrian-icon",
      repoUrl: "/components/Kriston",
    }

  ];

  return (
    <div className="min-h-screen bg-background">
      <Head>
        {/* Meta Basic */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />

        {/* Title & Description */}
        <title>Jasa Pembuatan Website | Badri Web Studio</title>
        <meta
          name="description"
          content="Jasa pembuatan website landing page untuk UMKM, freelancer, dan startup. Modern, cepat, dan mobile-friendly."
        />

        {/* Open Graph (Facebook, WhatsApp, LinkedIn) */}
        <meta
          property="og:title"
          content="Jasa Pembuatan Website | Badri Web Studio"
        />
        <meta
          property="og:description"
          content="Landing page modern, cepat, mobile-friendly, cocok untuk UMKM dan startup."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://my-porto-delta-six.vercel.app/"
        />
        <meta
          property="og:image"
          content="https://my-porto-delta-six.vercel.app/preview.jpg"
        />
        <meta
          name="keywords"
          content="badrian icon, badrian-icon, badrian icons, ikon badrian, badrianicon, npm badrian icon"
        />


        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Jasa Pembuatan Website, Web Developer | Badri Web Studio"
        />
        <meta
          name="twitter:description"
          content="Landing page modern, cepat, mobile-friendly, cocok untuk UMKM dan startup."
        />
        <meta
          name="twitter:image"
          content="https://my-porto-delta-six.vercel.app/preview.jpg"
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Badriana",
              url: "https://my-porto-delta-six.vercel.app/",
              sameAs: [
                "https://github.com/badriana400952",
                "https://www.linkedin.com/in/badriana-badrian/",
              ],
              jobTitle: "Frontend Developer",
              worksFor: {
                "@type": "Organization",
                name: "PT Jaring Synergi Mandiri",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareSourceCode",
              name: "badrian-icon",
              description: "Koleksi icon minimalis untuk React dan proyek web.",
              url: "https://www.npmjs.com/package/badrian-icon",
              codeRepository: "https://www.npmjs.com/package/badrian-icon",
              programmingLanguage: "JavaScript",
              keywords: [
                "badrian icon",
                "badrian-icon",
                "badrian icons",
                "ikon badrian",
                "react icons",
                "npm icon library"
              ],
              author: {
                "@type": "Person",
                name: "Badriana",
              },
            }),
          }}
        />

      </Head>

      {/* Floating Cyber HUD Navigation */}
      <div className="sticky top-4 inset-x-0 z-50 max-w-6xl mx-auto px-4">
        <Navbar
          maxWidth="xl"
          className="rounded-full border border-slate-200/50 dark:border-slate-800/50 bg-white/75 dark:bg-slate-950/40 backdrop-blur-md shadow-lg shadow-slate-100/10 dark:shadow-none h-14"
        >
          <NavbarBrand className="gap-2">
            <p className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-white">
              Badriana<span className="text-cyan-500">.dev</span>
            </p>
            {/* Active system heartbeat */}
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
          </NavbarBrand>
          
          <NavbarContent className="hidden lg:flex gap-6" justify="center">
            {[
              { label: "Home", href: "#home" },
              { label: "About", href: "#about" },
              { label: "Projects", href: "#projects" },
              { label: "Skills", href: "#skills" },
              { label: "Packages", href: "#package" },
              { label: "Testimonials", href: "#testimonials" },
              { label: "Gallery", href: "#gallery" },
              { label: "My Icons", href: "/components/Introduction" }
            ].map((nav, idx) => (
              <NavbarItem key={idx}>
                <Link 
                  href={nav.href} 
                  className="text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                >
                  {nav.label}
                </Link>
              </NavbarItem>
            ))}
          </NavbarContent>
          
          <NavbarContent justify="end">
            <NavbarItem>
              <ThemeSwitcher />
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-6">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        {/* <GlowingEffectPage /> */}
        <div id="package" className="py-20 md:py-32 relative">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-center bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            📦 My NPM Packages
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <NpmPackageCard key={pkg.name} {...pkg} />
            ))}
          </div>
          {/* Interactive Playground sandbox */}
          <IconPlayground />
        </div>

        <TestimonialsSection />
        <ExperienceGallery />
        {/* <OfficeExperienceCarousel /> */}
        <ContactSection />

        {/* <div className="h-[50rem] w-full flex items-center justify-center ">
          <PinContainerView
            title="My Work"
            href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4546476496125!2d106.8093531!3d-6.1771726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f680ab7fc64b%3A0x615d72e1ca960564!2sGedung%20JSM%20(PT%20Jaring%20Synergi%20Mandiri)!5e0!3m2!1sid!2sid!4v1719306217233!5m2!1sid!2sid"
          >
            <div className="w-[1200px] bg-white max-w-[1280px] h-[280px] sm:h-[300px] md:h-[320px] lg:h-[360px] xl:h-[400px] mx-auto p-4 tracking-tight text-slate-100/50 flex flex-col">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4546476496125!2d106.8093531!3d-6.1771726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f680ab7fc64b%3A0x615d72e1ca960564!2sGedung%20JSM%20(PT%20Jaring%20Synergi%20Mandiri)!5e0!3m2!1sid!2sid!4v1719306217233!5m2!1sid!2sid"
                width="100%"
                height="400"
                loading="lazy"
              ></iframe>
            </div>
          </PinContainerView> */}
        {/* </div> */}
      </main>

      <Footer />
    </div>
  );
}
