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

export default function Home() {
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
        <TestimonialsSection />
        <ExperienceGallery />
        {/* <OfficeExperienceCarousel /> */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
