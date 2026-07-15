import React from "react";
import { Card, CardBody, Avatar } from "@heroui/react";
import { Icon } from "@iconify/react";

interface Testimonial {
  id: string;
  content: string;
  author: string;
  position: string;
  company: string;
  avatar: string;
  tag: string;
  glowColor: string;
}

export const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: "1",
      content:
        "Badri adalah sosok yang baik, tidak mudah mengeluh, tidak malu untuk bertanya, dan cepat dalam memahami serta mempelajari hal-hal baru.",
      author: "Andy Siahaan",
      position: "Manager IT",
      company: "Ganesha Operation",
      avatar: "./pakandi.png",
      tag: "LEADERSHIP_VERIFIED",
      glowColor: "hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]"
    },
    {
      id: "2",
      content:
        "Badri adalah pribadi yang asik dan mudah diajak berkomunikasi. Ia bekerja dengan cepat dan selalu bisa diandalkan, terutama saat menghadapi banyak tugas sekaligus.",
      author: "Fajri",
      position: "Kepala Bagian IT",
      company: "Ganesha Operation",
      avatar: "./galery/pajri.png",
      tag: "TEAM_COLLABORATOR",
      glowColor: "hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
    },
    {
      id: "3",
      content:
        "Yang saya suka dari Badri adalah dia selalu berusaha untuk memahami apa yang saya inginkan. Ia juga sangat responsif dan cepat dalam menyelesaikan tugas-tugasnya.",
      author: "Calvin Satria",
      position: "Kasi IT",
      company: "Ganesha Operation",
      avatar: "./calvin.jpg",
      tag: "CLIENT_APPRECIATION",
      glowColor: "hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]"
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 relative">
      {/* Background glowing decorations */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="text-center mb-20 relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
          Synergy Feedback
        </h2>
        <div className="w-16 h-1 bg-cyan-500 mx-auto rounded-full mb-6" />
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Rekomendasi profesional dan catatan kolaborasi dari mentor serta rekan kerja sistem.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {testimonials.map((testimonial) => (
          <Card 
            key={testimonial.id} 
            className={`border border-slate-200/50 dark:border-slate-800/60 bg-white/40 dark:bg-slate-950/40 backdrop-blur-md transition-all duration-500 flex flex-col justify-between ${testimonial.glowColor}`}
          >
            <CardBody className="p-6 md:p-8 flex flex-col justify-between h-full gap-6 cyber-grid">
              
              {/* Card Header Tag */}
              <div className="flex justify-between items-center mb-2">
                <span className="text-[9px] font-mono tracking-widest text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-900/60 px-2 py-0.5 rounded border border-slate-200/20">
                  [ {testimonial.tag} ]
                </span>
                <Icon
                  icon="lucide:quote"
                  className="text-cyan-500/20 dark:text-cyan-400/10"
                  width={32}
                  height={32}
                />
              </div>

              {/* Testimonial Quote */}
              <div className="flex-grow">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed italic text-[15px]">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </div>

              {/* Author Section */}
              <div className="flex items-center gap-4 mt-4 border-t border-slate-100 dark:border-slate-900 pt-4">
                <div className="relative shrink-0">
                  {/* Glowing Ring around Avatar */}
                  <span className="absolute -inset-1.5 rounded-full bg-cyan-500/10 dark:bg-cyan-500/5 blur-sm" />
                  <Avatar
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    size="md"
                    className="border-2 border-slate-200/80 dark:border-slate-800/80 rounded-full w-12 h-12"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-white transition-colors group-hover:text-cyan-500 text-sm">
                    {testimonial.author}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                    {testimonial.position} &bull; {testimonial.company}
                  </p>
                </div>
              </div>

            </CardBody>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center relative z-10">
        <div className="inline-flex items-center gap-2 border border-slate-200/50 dark:border-slate-800/80 bg-white/50 dark:bg-slate-950/40 backdrop-blur-sm px-6 py-2.5 rounded-full shadow-sm">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
            Available for new opportunities & projects
          </span>
        </div>
      </div>
    </section>
  );
};
