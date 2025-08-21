import {
  Button,
  // Button,
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
      title: "E-Commerce Platform (Bootcamp Project)",
      description:
        "A modern e-commerce platform with advanced filtering, search, and payment processing capabilities.",
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
      title: "Starbucks Ice Shop (Independent Task)",
      description:
        "an app specially designed to make it easier to manage an ice shop quickly and efficiently,",
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
      title: "Clone Circle (Bootcamp Project)",
      description:
        "A platform to create and manage online communities with chat, events, and content sharing.",
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
      title: "SIMS PPOB (independent task)",
      description:
        "All-in-one payment app for easy and secure daily financial transactions.",
      image: "./hp.png",
      category: "mobile",
      technologies: ["React Native", "TypeScript"],
      link: "https://github.com/badriana400952/Native-SIMS",
    },

    {
      id: "5",
      title: "Personal Web (Bootcamp Project)",
      description:
        "A digital portfolio showcasing my web development projects and skills. Explore my work and expertise in building modern web applications.",
      image: "./project.png",
      category: "fullstack",
      technologies: ["HTML", "CSS", "JavaScript", "Golang", "PostgreSQL"],
      link: "https://github.com/badriana400952/batch48/tree/master/golang6.finishing",
    },
    {
      id: "6",
      title: "Portfolio (Independent Task)",
      description:
        "Personal portfolio website highlighting web development projects and technical skills.",
      image: "./port.png",
      category: "frontend",
      technologies: ["React", "Chakra UI"],
      link: "https://github.com/badriana400952/portfolio",
    },
    {
      id: "7",
      title: "Fast Food (Independent Task)",
      description:
        "A simple frontend app to display fast food menus with a modern and responsive UI using React and Chakra UI.",
      image: "./warung3.png",
      category: "fullstack",
      technologies: ["Next js", "TypeScript", "Hero UI", "PostgreSQL",],
      link: "https://github.com/badriana400952/warung-makan",
    }

  ];

  const filteredProjects =
    selected === "all"
      ? projects
      : projects.filter((project) => project.category === selected);

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-500">
          My Projects
        </h2>
        <p className="text-foreground-500 max-w-2xl mx-auto">
          Explore my recent work across various domains and technologies.
        </p>
      </div>

      <Tabs
        aria-label="Project categories"
        selectedKey={selected}
        onSelectionChange={(key) => setSelected(key.toString())}
        className="flex justify-center mb-12"
        variant="light"
        color="primary"
      >
        <Tab key="all" title="All Projects" />
        <Tab key="fullstack" title="Full-Stack Web Apps" />
        <Tab key="frontend" title="Frontend Web Apps" />
        <Tab key="mobile" title="Mobile Apps" />
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Card className="border border-divider overflow-hidden project-card relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-secondary/0 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-700 animate-shimmer"></div>
              <Image
                removeWrapper
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover transition-all duration-300 group-hover:brightness-110 brightness-90"
              />
              <CardBody className="p-5 transition-all duration-300 group-hover:bg-content1/90">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground-500 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-content2 rounded-full transition-colors duration-300 group-hover:bg-content2/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardBody>
              <CardFooter className="flex justify-between items-center px-5 py-3 bg-content1 transition-colors duration-300 group-hover:bg-content1/90">
                <Button
                  as={Link}
                  href={project.link}
                  color="primary"
                  variant="light"
                  size="sm"
                  endContent={<Icon icon="lucide:external-link" width={16} />}
                >
                  View Project
                </Button>

                <div className="flex gap-2">
                  <Button isIconOnly variant="flat" size="sm">
                    <Icon icon="lucide:github" width={16} />
                  </Button>
                  <Button isIconOnly variant="flat" size="sm">
                    <Icon icon="lucide:info" width={16} />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Button
          color="primary"
          variant="bordered"
          size="lg"
          endContent={<Icon icon="lucide:arrow-right" />}
        >
          View All Projects
        </Button>
      </div>
    </section>
  );
};
