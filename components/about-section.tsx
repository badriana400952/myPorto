import React from "react";
import { Card, CardBody, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      {/* Background glow decoration */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full mb-4" />
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          I am a passionate developer dedicated to building beautiful, performant, and secure web application interfaces.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Philosophy */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
              <Icon icon="lucide:cpu" className="text-cyan-500" />
              <span>Quantum Coordinates</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-md">
              With over 2 years of professional software architecture, I merge technical rigor with clean coding aesthetics to create stunning user spaces on the web.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-md">
              Continually experimenting with modern frameworks, NPM architectures, and lightweight styling systems to stay ahead of next-generation paradigms.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/30 backdrop-blur-sm space-y-4">
            <h4 className="font-bold text-slate-800 dark:text-slate-100 mb-1">
              Core Execution Capabilities:
            </h4>
            <ul className="space-y-3">
              {[
                "Clean, structured TypeScript & React architectures",
                "Advanced performance optimization (Next.js & Remix)",
                "Futuristic, responsive UI layouts without bloated packages",
                "NPM package creation and package maintenance",
                "Strong collaborative communications & team integration"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 mt-0.5 shrink-0">
                    <Icon icon="lucide:check" className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Earth Chronicles (Timeline HUD) */}
        <div className="lg:col-span-7 space-y-8">
          <Card className="border border-slate-200/60 dark:border-slate-800/80 bg-white/70 dark:bg-slate-950/40 backdrop-blur-md shadow-xl p-2 sm:p-4 rounded-2xl">
            <CardBody className="space-y-8">
              {/* Experience Node */}
              <div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center gap-2">
                  <Icon icon="lucide:briefcase" className="text-cyan-500" />
                  <span>Work Timeline</span>
                </h4>
                <div className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-800 space-y-8 ml-2">
                  {[
                    {
                      role: "Frontend Developer",
                      company: "PT Jaring Sinergi Mandiri",
                      period: "June 2025 - Present",
                      active: true
                    },
                    {
                      role: "Frontend Developer",
                      company: "Ganesha Operations",
                      period: "Feb 2024 - May 2025",
                      active: false
                    }
                  ].map((job, index) => (
                    <div key={index} className="relative group">
                      {/* Timeline Node Glow */}
                      <span className={`absolute -left-[31px] top-1 w-4.5 h-4.5 rounded-full border-2 ${
                        job.active 
                          ? "bg-emerald-500 border-emerald-400 ring-4 ring-emerald-500/20" 
                          : "bg-slate-200 dark:bg-slate-800 border-slate-400 dark:border-slate-700"
                      } transition-all duration-300 group-hover:scale-110`} />

                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                        <div>
                          <p className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-cyan-500 transition-colors duration-200">
                            {job.role}
                          </p>
                          <p className="text-slate-500 dark:text-slate-400 text-sm">
                            {job.company}
                          </p>
                        </div>
                        <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-md self-start ${
                          job.active 
                            ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20" 
                            : "bg-slate-100 dark:bg-slate-900/60 text-slate-500 dark:text-slate-400 border border-slate-200/30 dark:border-slate-800/40"
                        }`}>
                          {job.period}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Divider className="bg-slate-200/50 dark:bg-slate-800/50" />

              {/* Education Node */}
              <div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-6 flex items-center gap-2">
                  <Icon icon="lucide:graduation-cap" className="text-purple-500" />
                  <span>Education & Bootcamps</span>
                </h4>
                <div className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-800 space-y-8 ml-2">
                  {[
                    {
                      degree: "Fullstack Developer Graduate",
                      school: "Dumbways Technology Indonesia",
                      period: "Aug 2024 - Jan 2025"
                    },
                    {
                      degree: "Bachelor of Engineering in Informatics",
                      school: "Universitas Pamulang",
                      period: "2017 - 2022"
                    }
                  ].map((edu, index) => (
                    <div key={index} className="relative group">
                      {/* Timeline Node Glow */}
                      <span className="absolute -left-[31px] top-1 w-4.5 h-4.5 rounded-full border-2 bg-slate-200 dark:bg-slate-800 border-slate-400 dark:border-slate-700 transition-all duration-300 group-hover:bg-purple-500 group-hover:border-purple-400 group-hover:ring-4 group-hover:ring-purple-500/20" />

                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                        <div>
                          <p className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-purple-500 transition-colors duration-200">
                            {edu.degree}
                          </p>
                          <p className="text-slate-500 dark:text-slate-400 text-sm">
                            {edu.school}
                          </p>
                        </div>
                        <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md self-start bg-slate-100 dark:bg-slate-900/60 text-slate-500 dark:text-slate-400 border border-slate-200/30 dark:border-slate-800/40">
                          {edu.period}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};
