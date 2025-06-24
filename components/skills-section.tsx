import React from "react";
import { DraggableCard } from "./draggable";

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const SkillsSection: React.FC = () => {
  // Replace the existing skillCategories with the user's requested technologies
  const technologies = [
    { name: "HTML", icon: "logos:html-5" },
    { name: "CSS", icon: "logos:css-3" },
    { name: "JavaScript", icon: "logos:javascript" },
    { name: "TypeScript", icon: "logos:typescript-icon" },
    { name: "React", icon: "logos:react" },
    { name: "Next.js", icon: "logos:nextjs-icon" },
    { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
    { name: "Mantine", icon: "logos:mantine-icon" },
    { name: "Chakra UI", icon: "devicon:chakraui" },
    { name: "Bootstrap", icon: "logos:bootstrap" },
    { name: "Ant Design", icon: "devicon:antdesign" },
    { name: "Shadcn Ui", icon: "simple-icons:shadcnui" },
    { name: "Redux Toolkit", icon: "logos:redux" },
    { name: "TanStack", icon: "logos:react-query-icon" },
  ];

  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML", level: 95, icon: "logos:html-5" },
        { name: "CSS", level: 90, icon: "logos:css-3" },
        { name: "React", level: 95, icon: "logos:react" },
        { name: "TypeScript", level: 90, icon: "logos:typescript-icon" },
        { name: "Next.js", level: 85, icon: "logos:nextjs-icon" },
        { name: "Remix.js", level: 85, icon: "lineicons:remix-js" },
        { name: "TailwindCSS", level: 92, icon: "logos:tailwindcss-icon" },
        { name: "JavaScript", level: 95, icon: "logos:javascript" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 88, icon: "logos:nodejs-icon" },
        { name: "Express", level: 85, icon: "logos:express" },
        { name: "Prisma", level: 85, icon: "skill-icons:prisma" },
        { name: "typeorm", level: 85, icon: "logos:typeorm" },
        { name: "Go", level: 75, icon: "skill-icons:golang" },
        { name: "MySQL", level: 82, icon: "skill-icons:mysql-light" },
        { name: "MongoDB", level: 82, icon: "logos:mongodb-icon" },
        { name: "PostgreSQL", level: 78, icon: "logos:postgresql" },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 90, icon: "logos:git-icon" },
        { name: "Gitlab", level: 90, icon: "material-icon-theme:gitlab" },
        { name: "Figma", level: 85, icon: "logos:figma" },
        { name: "Slack", level: 85, icon: "logos:slack" },
        { name: "Trello", level: 85, icon: "devicon:trello" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-500">
          My Skills
        </h2>
        <p className="text-foreground-500 max-w-2xl mx-auto">
          I`ve worked with a variety of technologies and tools throughout my
          career. Here`s an overview of my technical expertise.
        </p>
      </div>
      <DraggableCard />
      {/* New glowing tech grid inspired by mastra.ai */}
      {/* <div className="mb-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="tech-card group border border-divider bg-content1/30 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center justify-center h-[120px] transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-secondary/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></div>
                <div className="tech-glow absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10 flex flex-col items-center gap-3">
                  <Icon
                    icon={tech.icon}
                    width={40}
                    height={40}
                    className="transition-all duration-300 group-hover:brightness-125"
                  />
                  <span className="font-medium text-sm text-foreground-500 group-hover:text-foreground transition-colors duration-300">
                    {tech.name}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div> */}

      {/* Keep the existing skills with progress bars */}
      {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <Card key={index} className="border border-divider">
            <CardBody className="p-6">
              <h3 className="text-xl font-semibold mb-6">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Icon icon={skill.icon} width={20} height={20} />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        ))}
      </div> */}

      {/* Remove or keep the existing icon grid based on preference */}
      {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {[
          "logos:react", "logos:typescript-icon", "logos:nextjs-icon", "logos:tailwindcss-icon",
          "logos:nodejs-icon", "logos:mongodb-icon", "logos:graphql", "logos:redux",
          "logos:figma", "logos:aws", "logos:docker-icon", "logos:git-icon"
        ].map((icon, index) => (
          <div key={index} className="flex justify-center items-center p-4 bg-content1 rounded-lg border border-divider">
            <Icon icon={icon} width={48} height={48} />
          </div>
        ))}
      </div> */}
    </section>
  );
};
