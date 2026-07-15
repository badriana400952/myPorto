import React, { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";

interface TerminalLine {
  type: "input" | "output" | "system";
  text: string;
}

export const TerminalHero: React.FC = () => {
  const [history, setHistory] = useState<TerminalLine[]>([
    { type: "system", text: "SYSTEM STATUS: ACTIVE // SECURE QUANTUM LINK ESTABLISHED" },
    { type: "system", text: "Welcome to Badriana.dev Command Console. Type 'help' for options." },
    { type: "output", text: "Ready." }
  ]);
  const [input, setInput] = useState("");
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const commands: { [key: string]: string } = {
    help: "Available commands: 'about', 'skills', 'projects', 'status', 'clear'",
    about: "Badriana is a Frontend Developer with 2+ Earth years of experience specializing in React, Next.js, and creating high-performance digital interfaces.",
    skills: "Quantum Skills: JavaScript [95%], React/Next.js [90%], TypeScript [85%], CSS/Tailwind [90%], React Native [75%], Node.js/Go [70%]",
    projects: "Active Projects: [Lakoe] E-commerce platform, [badrian-icon] Minimalist React icons, [SIMS PPOB] Payment App, [Starbucks Shop] Ice shop management system.",
    status: "Host: Badriana.dev // Ping: 12ms // Location: Indonesia // Mode: Creative Developer"
  };

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newHistory = [...history, { type: "input" as const, text: `$ ${cmd}` }];

    if (trimmed === "clear") {
      setHistory([]);
      return;
    }

    if (trimmed in commands) {
      newHistory.push({ type: "output", text: commands[trimmed] });
    } else if (trimmed === "") {
      // Do nothing
    } else {
      newHistory.push({
        type: "output",
        text: `Command not found: '${cmd}'. Type 'help' for a list of command sequences.`
      });
    }

    setHistory(newHistory);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleCommand(input);
    setInput("");
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <div className="w-full max-w-lg mx-auto overflow-hidden rounded-xl border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-950/40 backdrop-blur-md shadow-2xl flex flex-col font-mono text-sm h-72">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-slate-200/50 dark:border-slate-800/50 bg-slate-100/50 dark:bg-slate-900/30">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
          <Icon icon="lucide:terminal" className="w-3.5 h-3.5" />
          <span>quantum_console.sh</span>
        </div>
        <div className="w-12" /> {/* spacer */}
      </div>

      {/* Terminal Output Screen */}
      <div className="flex-1 p-4 overflow-y-auto space-y-2 text-left custom-scroll text-slate-700 dark:text-slate-300">
        {history.map((line, i) => (
          <div
            key={i}
            className={`${
              line.type === "system"
                ? "text-cyan-600 dark:text-cyan-400 font-semibold"
                : line.type === "input"
                ? "text-slate-900 dark:text-white"
                : "text-slate-500 dark:text-slate-400"
            }`}
          >
            {line.text}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Terminal Command Input Form */}
      <form onSubmit={handleSubmit} className="p-3 border-t border-slate-200/50 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-900/10 flex items-center gap-2">
        <span className="text-cyan-500 font-bold">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type 'help'..."
          className="flex-1 bg-transparent border-none outline-none text-slate-900 dark:text-white caret-cyan-500"
        />
        <button
          type="submit"
          className="text-xs px-2.5 py-1 rounded bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 text-white font-medium transition-colors"
        >
          Execute
        </button>
      </form>
    </div>
  );
};
