import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
  Tab,
  Tabs,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  link: string;
}

export const ProjectsSection: React.FC = () => {
  const [selected, setSelected] = React.useState<string>("all");

  const projects: Project[] = [
    {
      id: "1",
      title: "E-Commerce Platform (Lakoe)",
      description:
        "A modern e-commerce platform with advanced filtering, search, and integrated payment processing capabilities.",
      image: "./laoke.png",
      category: "fullstack",
      technologies: [
        "Remix",
        "TypeScript",
        "Node.js",
        "Chakra UI",
        "PostgreSQL",
      ],
      link: "https://github.com/badriana400952/lakoe-push",
    },
    {
      id: "2",
      title: "Starbucks Ice Shop Console",
      description:
        "An application specifically designed to manage a fast food ice shop's inventory, staff, and checkout transactions efficiently.",
      image: "./starbuck.png",
      category: "fullstack",
      technologies: [
        "React",
        "TypeScript",
        "Chakra UI",
        "Node.js",
        "PostgreSQL",
      ],
      link: "https://github.com/badriana400952/storeIcereamNew",
    },
    {
      id: "3",
      title: "Clone Circle Social Space",
      description:
        "A forum-style social network to create and manage communities with active chat, event scheduling, and secure media sharing.",
      image: "./circle.png",
      category: "fullstack",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Chakra UI",
        "PostgreSQL",
      ],
      link: "https://github.com/badriana400952/stag_dua_b",
    },
    {
      id: "4",
      title: "SIMS PPOB Mobile App",
      description:
        "All-in-one billing & payment mobile application for easy, secure daily financial transactions.",
      image: "./hp.png",
      category: "mobile",
      technologies: ["React Native", "TypeScript"],
      link: "https://github.com/badriana400952/Native-SIMS",
    },
    {
      id: "5",
      title: "Personal Web Portfolio v1",
      description:
        "Original portfolio system showcasing early software engineering projects, built with a custom Golang backend.",
      image: "./project.png",
      category: "fullstack",
      technologies: ["HTML", "CSS", "JavaScript", "Golang", "PostgreSQL"],
      link: "https://github.com/badriana400952/batch48/tree/master/golang6.finishing",
    },
    {
      id: "6",
      title: "Classic Portfolio Website",
      description:
        "Clean, interactive personal portfolio website showcasing web applications and technical expertise.",
      image: "./port.png",
      category: "frontend",
      technologies: ["React", "Chakra UI"],
      link: "https://github.com/badriana400952/portfolio",
    },
    {
      id: "7",
      title: "Fast Food Digital Hub",
      description:
        "Modern storefront and digital menu dashboard with a highly responsive user interface.",
      image: "./warung3.png",
      category: "fullstack",
      technologies: ["Next js", "TypeScript", "Hero UI", "PostgreSQL",],
      link: "https://github.com/badriana400952/warung-makan",
    },
    {
      id: "8",
      title: "Wakil Ketua DPRD Banten Profile",
      description: "Official profile portal for the Deputy Chairman of DPRD Banten, fully optimized for swift mobile access.",
      image: "./imron2.jpg",
      category: "frontend",
      technologies: [
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
      ],
      link: "https://imron-rosadi.vercel.app/",
    },
    {
      id: "9",
      title: "AI Query Integration Center",
      description:
        "Advanced database interface utilizing AI-powered command search to run secure CRUD operations in real-time.",
      image: "./aiquery.png",
      category: "fullstack",
      technologies: ["Next js", "TypeScript", "Aceternity UI", "PostgreSQL", "ZenMux AI"],
      link: "https://integrasi-sql-ai-git-main-badrianas-projects.vercel.app/",
    }
  ];

  const filteredProjects =
    selected === "all"
      ? projects
      : projects.filter((project) => project.category === selected);

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
          My Projects
        </h2>
        <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full mb-4" />
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
          Explore recent software architectures and product interface implementations.
        </p>
      </div>

      <div className="flex justify-center mb-12">
        <Tabs
          aria-label="Project categories"
          selectedKey={selected}
          onSelectionChange={(key) => setSelected(key.toString())}
          className="border border-slate-200/50 dark:border-slate-800/80 p-1.5 rounded-full bg-slate-100/50 dark:bg-slate-950/20 backdrop-blur-md"
          variant="light"
          color="primary"
          classNames={{
            tabList: "gap-2",
            cursor: "bg-cyan-500 text-white rounded-full",
            tab: "text-slate-500 hover:text-slate-800 dark:hover:text-white px-4 h-8 text-xs font-semibold uppercase tracking-wider rounded-full",
            tabContent: "group-data-[selected=true]:text-white font-bold"
          }}
        >
          <Tab key="all" title="All Projects" />
          <Tab key="fullstack" title="Full-Stack" />
          <Tab key="frontend" title="Frontend" />
          <Tab key="mobile" title="Mobile" />
        </Tabs>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <Card className="border border-slate-200/80 dark:border-slate-800/80 overflow-hidden bg-white/70 dark:bg-slate-950/40 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 hover:shadow-[0_15px_30px_rgba(6,182,212,0.12)] dark:hover:shadow-[0_15px_30px_rgba(6,182,212,0.06)] backdrop-blur-md transition-all duration-300 relative group h-full flex flex-col">
              
              {/* Futuristic Holographic Scanline Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/8 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-[1200ms] pointer-events-none" />

              {/* Top Accent glow tag */}
              <div className="absolute top-0 right-4 w-12 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800/50">
                <Image
                  removeWrapper
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-105 brightness-95"
                />
              </div>

              {/* Project Body */}
              <CardBody className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-100 group-hover:text-cyan-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-[10px] font-semibold px-2.5 py-0.5 rounded bg-slate-100/80 dark:bg-slate-900/60 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300 group-hover:border-cyan-500/20 group-hover:text-cyan-600 dark:group-hover:text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardBody>

              {/* Footer Links */}
              <CardFooter className="flex justify-between items-center px-6 py-4 bg-slate-50/50 dark:bg-slate-900/20 border-t border-slate-100/50 dark:border-slate-800/30">
                <Button
                  as={Link}
                  href={project.link}
                  target="_blank"
                  color="primary"
                  variant="light"
                  size="sm"
                  className="font-semibold text-cyan-600 dark:text-cyan-400 bg-transparent hover:bg-cyan-500/10"
                  endContent={<Icon icon="lucide:external-link" width={14} />}
                >
                  View Live
                </Button>

                <div className="flex gap-2">
                  <a
                    href="https://github.com/badriana400952/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center w-8 h-8 rounded-lg border border-slate-200/60 dark:border-slate-800/60 bg-white/80 dark:bg-slate-900/40 text-slate-500 dark:text-slate-400 hover:border-cyan-500/30 dark:hover:border-cyan-500/30 hover:text-cyan-500 transition-colors"
                  >
                    <Icon icon="lucide:github" width={14} />
                  </a>
                  <button
                    className="flex items-center justify-center w-8 h-8 rounded-lg border border-slate-200/60 dark:border-slate-800/60 bg-white/80 dark:bg-slate-900/40 text-slate-500 dark:text-slate-400 hover:border-cyan-500/30 dark:hover:border-cyan-500/30 hover:text-cyan-500 transition-colors"
                  >
                    <Icon icon="lucide:info" width={14} />
                  </button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
