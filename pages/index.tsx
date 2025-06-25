"use client";
import { NpmPackageCard } from "@/components/package";
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Head from "next/head";
import { AboutSection } from "../components/about-section";
import { ContactSection } from "../components/contact-section";
import { ExperienceGallery } from "../components/experience-gallery";
import { Footer } from "../components/footer";
import { HeroSection } from "../components/hero-section";
import { ProjectsSection } from "../components/projects-section";
import { SkillsSection } from "../components/skills-section";
import { TestimonialsSection } from "../components/testimonials-section";
import { ThemeSwitcher } from "../components/theme-switcher";

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
  ];

  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Badriana</title>
        <meta
          name="description"
          content="Professional developer portfolio showcasing projects and skills"
        />
        <link rel="icon" href="./logos.jpeg" />
      </Head>

      {/* Navigation */}
      <Navbar
        maxWidth="xl"
        className="bg-background/70 backdrop-blur-md border-b border-divider"
      >
        <NavbarBrand>
          <p className="font-bold text-xl text-inherit">
            Badriana<span className="text-primary">.dev</span>
          </p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-6" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#home" className="font-medium">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#about" className="font-medium">
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#projects" className="font-medium">
              Projects
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#skills" className="font-medium">
              Skills
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#package" className="font-medium">
              Package
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              href="#testimonials"
              className="font-medium"
            >
              Testimonials
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#gallery" className="font-medium">
              Galery
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="mr-4">
            <ThemeSwitcher />
          </NavbarItem>
          <NavbarItem>
            <Button
              as={Link}
              color="primary"
              href="#contact"
              variant="flat"
              className="font-medium"
              endContent={<Icon icon="lucide:arrow-right" width={16} />}
            >
              Contact Me
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-6">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        {/* <GlowingEffectPage /> */}
        <div className="">
          <h1 className="text-4xl font-bold mb-8 text-center">
            📦 My NPM Packages
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <NpmPackageCard key={pkg.name} {...pkg} />
            ))}
          </div>
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
