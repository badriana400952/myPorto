import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Button } from "@heroui/react";

interface IconData {
  name: string;
  icon: string;
  family: string;
}

export const IconPlayground: React.FC = () => {
  const iconsList: IconData[] = [
    { name: "Add", icon: "lucide:plus", family: "kriston" },
    { name: "Trash", icon: "lucide:trash-2", family: "kriston" },
    { name: "Edit", icon: "lucide:edit-3", family: "leonid" },
    { name: "Save", icon: "lucide:save", family: "leonid" },
    { name: "Search", icon: "lucide:search", family: "rounak" },
    { name: "Code", icon: "lucide:code", family: "rounak" },
    { name: "Home", icon: "lucide:home", family: "kalm" },
    { name: "User", icon: "lucide:user", family: "kalm" }
  ];

  const [selectedIcon, setSelectedIcon] = useState<IconData>(iconsList[0]);
  const [size, setSize] = useState<number>(48);
  const [color, setColor] = useState<string>("text-cyan-500");
  const [animation, setAnimation] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  const colorsList = [
    { label: "Cyan", class: "text-cyan-500", glow: "shadow-cyan-500/50" },
    { label: "Purple", class: "text-purple-500", glow: "shadow-purple-500/50" },
    { label: "Emerald", class: "text-emerald-500", glow: "shadow-emerald-500/50" },
    { label: "Rose", class: "text-rose-500", glow: "shadow-rose-500/50" },
    { label: "Amber", class: "text-amber-500", glow: "shadow-amber-500/50" },
    { label: "Indigo", class: "text-indigo-500", glow: "shadow-indigo-500/50" }
  ];

  const animationsList = [
    { label: "None", class: "" },
    { label: "Pulse", class: "animate-pulse" },
    { label: "Spin", class: "animate-spin" },
    { label: "Hover Scale", class: "hover:scale-125 transition-transform" }
  ];

  const jsxCode = `import { ${selectedIcon.name} } from "badrian-icon/${selectedIcon.family}";\n\n<${selectedIcon.name} className="${size !== 24 ? `w-[${size}px] h-[${size}px]` : "w-6 h-6"} ${color} ${animation}" />`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(jsxCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-950/40 backdrop-blur-md shadow-xl overflow-hidden p-6 sm:p-8 mt-12">
      {/* Title */}
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
          <Icon icon="lucide:toy-brick" className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">badrian-icon Interactive Playground</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Test-drive the NPM icons, modify variables, and grab the JSX code</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sandbox Canvas */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800/50 min-h-[280px] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Main Glowing Icon */}
          <div 
            className="transition-all duration-300 flex items-center justify-center rounded-2xl bg-white dark:bg-slate-950 p-6 border border-slate-100 dark:border-slate-900 shadow-lg relative z-10"
            style={{ width: `${size + 40}px`, height: `${size + 40}px` }}
          >
            <Icon 
              icon={selectedIcon.icon} 
              style={{ fontSize: `${size}px` }} 
              className={`${color} ${animation} transition-all duration-200`}
            />
          </div>

          <span className="mt-4 text-xs font-mono text-slate-400 tracking-wide uppercase relative z-10">
            {selectedIcon.family}/{selectedIcon.name}
          </span>
        </div>

        {/* Configurations */}
        <div className="lg:col-span-7 space-y-6">
          {/* Select Icon */}
          <div>
            <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">1. Choose Icon ({selectedIcon.name})</span>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
              {iconsList.map((ico, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedIcon(ico)}
                  className={`flex flex-col items-center justify-center p-2.5 rounded-lg border transition-all ${
                    selectedIcon.name === ico.name
                      ? "border-cyan-500 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold"
                      : "border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 bg-transparent text-slate-500 dark:text-slate-400"
                  }`}
                >
                  <Icon icon={ico.icon} className="w-5 h-5 mb-1" />
                  <span className="text-[10px] truncate max-w-full">{ico.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Color Config */}
            <div>
              <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2.5">2. Accent Color</span>
              <div className="flex flex-wrap gap-2">
                {colorsList.map((col, idx) => (
                  <button
                    key={idx}
                    onClick={() => setColor(col.class)}
                    className={`w-7 h-7 rounded-full bg-slate-900 border-2 ${
                      color === col.class 
                        ? "border-cyan-400 scale-110 shadow-lg" 
                        : "border-transparent opacity-75 hover:opacity-100"
                    } flex items-center justify-center`}
                  >
                    <span className={`w-3.5 h-3.5 rounded-full ${col.class.replace("text-", "bg-")}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Animation Config */}
            <div>
              <span className="block text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2.5">3. Motion Effects</span>
              <div className="flex flex-wrap gap-2">
                {animationsList.map((anim, idx) => (
                  <button
                    key={idx}
                    onClick={() => setAnimation(anim.class)}
                    className={`px-3 py-1 text-xs rounded-md border font-medium transition-all ${
                      animation === anim.class
                        ? "border-cyan-500 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400"
                        : "border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 text-slate-500"
                    }`}
                  >
                    {anim.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Size Range slider */}
          <div>
            <div className="flex justify-between items-center text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
              <span>4. Dimension Node</span>
              <span className="font-mono text-cyan-500 lowercase">{size}px</span>
            </div>
            <input 
              type="range" 
              min="16" 
              max="96" 
              value={size}
              onChange={(e) => setSize(parseInt(e.target.value))}
              className="w-full accent-cyan-500 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg cursor-pointer"
            />
          </div>

          {/* Code Viewer Panel */}
          <div className="relative rounded-xl border border-slate-200/50 dark:border-slate-800/80 bg-slate-900 text-slate-100 p-4 font-mono text-xs overflow-hidden">
            <div className="absolute top-2 right-2 flex gap-2">
              <Button
                size="sm"
                className={`text-[10px] h-7 ${
                  copied 
                    ? "bg-emerald-600 hover:bg-emerald-500" 
                    : "bg-slate-800 hover:bg-slate-700"
                } text-white font-medium`}
                onClick={copyToClipboard}
              >
                {copied ? (
                  <>
                    <Icon icon="lucide:check" className="w-3.5 h-3.5 mr-1" />
                    Copied
                  </>
                ) : (
                  <>
                    <Icon icon="lucide:copy" className="w-3.5 h-3.5 mr-1" />
                    Copy Code
                  </>
                )}
              </Button>
            </div>
            <pre className="text-left select-all whitespace-pre-wrap pt-4">
              <code>{jsxCode}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
