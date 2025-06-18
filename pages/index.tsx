"use client";
import React from "react";
import Head from "next/head";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import { Footer } from "../components/footer";
import { ContactSection } from "../components/contact-section";
import { TestimonialsSection } from "../components/testimonials-section";
import { SkillsSection } from "../components/skills-section";
import { ProjectsSection } from "../components/projects-section";
import { AboutSection } from "../components/about-section";
import { HeroSection } from "../components/hero-section";
import { ThemeSwitcher } from "../components/theme-switcher";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ExperienceGallery } from "../components/experience-gallery";
import { NpmPackageCard } from "@/components/package";

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
        <div className="">
          <h1 className="text-4xl font-bold mb-8 text-center">
            📦 My NPM Packages
          </h1>
          <div className="grid grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <NpmPackageCard key={pkg.name} {...pkg} />
            ))}
          </div>
        </div>
        <TestimonialsSection />
        <ExperienceGallery />
        {/* <OfficeExperienceCarousel /> */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
