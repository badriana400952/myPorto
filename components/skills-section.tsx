import React, { useState } from "react";
import { Tabs, Tab, Card, CardBody, Progress } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

interface Skill {
  name: string;
  icon: string;
  category: "Languages" | "Frameworks" | "State & Data" | "UI & Styling";
  spec: string;
  level: number;
  status: string;
  glowColor: string;
}

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const skills: Skill[] = [
    // Languages
    {
      name: "HTML5",
      icon: "logos:html-5",
      category: "Languages",
      spec: "Semantic DOM Engine",
      level: 95,
      status: "OPTIMIZED",
      glowColor: "group-hover:shadow-[0_0_20px_rgba(227,79,38,0.35)] group-hover:border-orange-500/50"
    },
    {
      name: "CSS3",
      icon: "logos:css-3",
      category: "Languages",
      spec: "Style & Layout Engine",
      level: 92,
      status: "STABLE",
      glowColor: "group-hover:shadow-[0_0_20px_rgba(21,114,182,0.35)] group-hover:border-blue-500/50"
    },
    {
      name: "JavaScript",
      icon: "logos:javascript",
      category: "Languages",
      spec: "ECMAScript JIT Script",
      level: 90,
      status: "ACTIVE",
      glowColor: "group-hover:shadow-[0_0_20px_rgba(247,223,30,0.35)] group-hover:border-yellow-500/50"
    },
    {
      name: "TypeScript",
      icon: "logos:typescript-icon",
      category: "Languages",
      spec: "Static Type Safety",
      level: 88,
      status: "STABLE",
      glowColor: "group-hover:shadow-[0_0_20px_rgba(49,120,198,0.35)] group-hover:border-blue-600/50"
    },

    // Frameworks
    {
      name: "React",
      icon: "logos:react",
      category: "Frameworks",
      spec: "VDOM Component Library",
      level: 92,
      status: "ACTIVE",
      glowColor: "group-hover:shadow-[0_0_20px_rgba(97,218,251,0.35)] group-hover:border-cyan-500/50"
    },
    {
      name: "Next.js",
      icon: "logos:nextjs-icon",
      category: "Frameworks",
      spec: "Server-Side Hydrator",
      level: 89,
      status: "PRODUCTION_READY",
      glowColor: "group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] group-hover:border-neutral-500/50"
    },
    {
      name: "Remix JS",
      icon: "lineicons:remix-js",
      category: "Frameworks",
      spec: "Distributed Edge Sync",
      level: 80,
      status: "STABLE",
      glowColor: "group-hover:shadow-[0_0_20px_rgba(168,85,247,0.35)] group-hover:border-purple-500/50"
    },

    // State & Data
    {
      name: "Redux Toolkit",
      icon: "logos:redux",
      category: "State & Data",
      spec: "Immutable State Machine",
      level: 85,
      status: "STABLE",
      glowColor: "group-hover:shadow-[0_0_20px_rgba(118,74,188,0.35)] group-hover:border-indigo-500/50"
    },
    {
      name: "TanStack Query",
      icon: "logos:react-query-icon",
      category: "State & Data",
      spec: "Server Caching Engine",
      level: 88,
      status: "ACTIVE",
      glowColor: "group-hover:shadow-[0_0_20px_rgba(255,65,84,0.35)] group-hover:border-red-500/50"
    },

    // UI & Styling
    {
      name: "Tailwind CSS",
      icon: "logos:tailwindcss-icon",
      category: "UI & Styling",
      spec: "Utility Styling System",
      level: 94,
      status: "OPTIMIZED",
      glowColor: "group-hover:shadow-[0_0_20px_rgba(56,189,248,0.35)] group-hover:border-sky-400/50"
    },
    {
      name: "Shadcn UI",
      icon: "simple-icons:shadcnui",
      category: "UI & Styling",
      spec: "Headless Accessible HUD",
      level: 90,
      status: "ACTIVE",
      glowColor: "group-hover:shadow-[0_0_20px_rgba(120,120,120,0.25)] group-hover:border-slate-500/50"
    },
    {
      name: "Mantine CSS",
      icon: "logos:mantine-icon",
      category: "UI & Styling",
      spec: "Feature-Rich UI Deck",
      level: 82,
      status: "STABLE",
      glowColor: "group-hover:shadow-[0_0_20px_rgba(51,154,240,0.35)] group-hover:border-blue-400/50"
    },
    {
      name: "Chakra UI",
      icon: "devicon:chakraui",
      category: "UI & Styling",
      spec: "Atomic Theme Tokens",
      level: 84,
      status: "STABLE",
      glowColor: "group-hover:shadow-[0_0_20px_rgba(49,151,149,0.35)] group-hover:border-teal-500/50"
    },
    {
      name: "Ant Design",
      icon: "devicon:antdesign",
      category: "UI & Styling",
      spec: "Enterprise Data Blocks",
      level: 82,
      status: "STABLE",
      glowColor: "group-hover:shadow-[0_0_20px_rgba(24,144,255,0.35)] group-hover:border-blue-500/50"
    },
    {
      name: "Bootstrap",
      icon: "logos:bootstrap",
      category: "UI & Styling",
      spec: "Classic Flex Grid",
      level: 85,
      status: "STABLE",
      glowColor: "group-hover:shadow-[0_0_20px_rgba(117,50,249,0.35)] group-hover:border-purple-600/50"
    }
  ];

  const filteredSkills = activeTab === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="py-20 md:py-32 relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none z-0" />
      
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
          Technical Expertise
        </h2>
        <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full mb-6" />
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Operational matrix of interfaces, languages, core frameworks, styling modules, and type systems.
        </p>
      </div>

      {/* Cyber Category Filters */}
      <div className="flex justify-center mb-12 relative z-10 w-full overflow-x-auto scrollbar-none">
        <Tabs 
          aria-label="Skills categories" 
          variant="underlined"
          selectedKey={activeTab}
          onSelectionChange={(key) => setActiveTab(key as string)}
          classNames={{
            tabList: "gap-4 md:gap-6 border-b border-slate-200 dark:border-slate-800 flex-nowrap",
            cursor: "w-full bg-cyan-500",
            tab: "max-w-fit px-2 h-12 text-slate-500 hover:text-cyan-500 dark:hover:text-cyan-400 font-medium tracking-wide transition-all shrink-0",
            tabContent: "group-data-[selected=true]:text-cyan-500 group-data-[selected=true]:font-bold text-xs md:text-sm uppercase"
          }}
        >
          <Tab key="all" title="All Matrix" />
          <Tab key="Languages" title="Core Languages" />
          <Tab key="Frameworks" title="Frameworks" />
          <Tab key="State & Data" title="State & Data" />
          <Tab key="UI & Styling" title="UI & Styling" />
        </Tabs>
      </div>

      {/* Cyber Grid Container */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative z-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <Card 
                className={`h-full border border-slate-200/50 dark:border-slate-800/60 bg-white/40 dark:bg-slate-950/40 backdrop-blur-md transition-all duration-500 ${skill.glowColor}`}
              >
                <CardBody className="p-5 flex flex-col justify-between gap-4 cyber-grid">
                  {/* Card Header Info */}
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono tracking-widest text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-900/60 px-2 py-0.5 rounded border border-slate-200/20">
                      [ {skill.status} ]
                    </span>
                    <span className="text-xs font-mono text-cyan-500 font-semibold">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Icon and Name */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200/30 dark:border-slate-800/40 transition-transform duration-300 group-hover:scale-110">
                      <Icon icon={skill.icon} className="w-8 h-8 md:w-10 md:h-10" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                        {skill.name}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1 font-mono">
                        {skill.spec}
                      </p>
                    </div>
                  </div>

                  {/* High Tech Progress Gauge */}
                  <div className="space-y-1">
                    <Progress 
                      aria-label={`${skill.name} loading matrix`}
                      size="sm" 
                      value={skill.level} 
                      color="primary"
                      className="max-w-md"
                      classNames={{
                        indicator: "bg-gradient-to-r from-cyan-500 to-blue-500 shadow-[0_0_10px_rgba(6,182,212,0.4)]",
                        track: "bg-slate-100 dark:bg-slate-900"
                      }}
                    />
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
