"use client";

import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function PlaceholdersAndVanishInput({
    placeholders,
    onChange,
    onSubmit,
}: {
    placeholders: string[];
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
    const [currentPlaceholder, setCurrentPlaceholder] = useState(0);

    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const startAnimation = () => {
        intervalRef.current = setInterval(() => {
            setCurrentPlaceholder((prev) => (prev + 1) % placeholders.length);
        }, 3000);
    };
    const handleVisibilityChange = () => {
        if (document.visibilityState !== "visible" && intervalRef.current) {
            clearInterval(intervalRef.current); // Clear the interval when the tab is not visible
            intervalRef.current = null;
        } else if (document.visibilityState === "visible") {
            startAnimation(); // Restart the interval when the tab becomes visible
        }
    };

    useEffect(() => {
        startAnimation();
        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, [placeholders]);

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const newDataRef = useRef<any[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    const [value, setValue] = useState("");
    const [animating, setAnimating] = useState(false);

    const draw = useCallback(() => {
        if (!inputRef.current) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = 800;
        canvas.height = 800;
        ctx.clearRect(0, 0, 800, 800);
        const computedStyles = getComputedStyle(inputRef.current);

        const fontSize = parseFloat(computedStyles.getPropertyValue("font-size"));
        ctx.font = `${fontSize * 2}px ${computedStyles.fontFamily}`;
        ctx.fillStyle = "#FFF";
        ctx.fillText(value, 16, 40);

        const imageData = ctx.getImageData(0, 0, 800, 800);
        const pixelData = imageData.data;
        const newData: any[] = [];

        for (let t = 0; t < 800; t++) {
            const i = 4 * t * 800;
            for (let n = 0; n < 800; n++) {
                const e = i + 4 * n;
                if (
                    pixelData[e] !== 0 &&
                    pixelData[e + 1] !== 0 &&
                    pixelData[e + 2] !== 0
                ) {
                    newData.push({
                        x: n,
                        y: t,
                        color: [
                            pixelData[e],
                            pixelData[e + 1],
                            pixelData[e + 2],
                            pixelData[e + 3],
                        ],
                    });
                }
            }
        }

        newDataRef.current = newData.map(({ x, y, color }) => ({
            x,
            y,
            r: 1,
            color: `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`,
        }));
    }, [value]);

    useEffect(() => {
        draw();
    }, [value, draw]);

    const animate = (start: number) => {
        const animateFrame = (pos: number = 0) => {
            requestAnimationFrame(() => {
                const newArr = [];
                for (let i = 0; i < newDataRef.current.length; i++) {
                    const current = newDataRef.current[i];
                    if (current.x < pos) {
                        newArr.push(current);
                    } else {
                        if (current.r <= 0) {
                            current.r = 0;
                            continue;
                        }
                        current.x += Math.random() > 0.5 ? 1 : -1;
                        current.y += Math.random() > 0.5 ? 1 : -1;
                        current.r -= 0.05 * Math.random();
                        newArr.push(current);
                    }
                }
                newDataRef.current = newArr;
                const ctx = canvasRef.current?.getContext("2d");
                if (ctx) {
                    ctx.clearRect(pos, 0, 800, 800);
                    newDataRef.current.forEach((t) => {
                        const { x: n, y: i, r: s, color: color } = t;
                        if (n > pos) {
                            ctx.beginPath();
                            ctx.rect(n, i, s, s);
                            ctx.fillStyle = color;
                            ctx.strokeStyle = color;
                            ctx.stroke();
                        }
                    });
                }
                if (newDataRef.current.length > 0) {
                    animateFrame(pos - 8);
                } else {
                    setValue("");
                    setAnimating(false);
                }
            });
        };
        animateFrame(start);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && !animating) {
            vanishAndSubmit();
        }
    };

    const vanishAndSubmit = () => {
        setAnimating(true);
        draw();

        const value = inputRef.current?.value || "";
        if (value && inputRef.current) {
            const maxX = newDataRef.current.reduce(
                (prev, current) => (current.x > prev ? current.x : prev),
                0
            );
            animate(maxX);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        vanishAndSubmit();
        if (onSubmit) {
            onSubmit(e);
        }
    };
    return (
        <form
            className={cn(
                "w-full relative max-w-xl mx-auto bg-white dark:bg-zinc-800 h-12 rounded-full overflow-hidden shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),_0px_1px_0px_0px_rgba(25,28,33,0.02),_0px_0px_0px_1px_rgba(25,28,33,0.08)] transition duration-200",
                value && "bg-gray-50"
            )}
            onSubmit={handleSubmit}
        >
            <canvas
                className={cn(
                    "absolute pointer-events-none  text-base transform scale-50 top-[20%] left-2 sm:left-8 origin-top-left filter invert dark:invert-0 pr-20",
                    !animating ? "opacity-0" : "opacity-100"
                )}
                ref={canvasRef}
            />
            <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (!animating) {
                        setValue(e.target.value);
                        if (onChange) {
                            onChange(e);
                        }
                    }
                }}
                onKeyDown={handleKeyDown}
                ref={inputRef}
                value={value}
                type="text"
                className={cn(
                    "w-full relative text-sm sm:text-base z-50 border-none dark:text-white bg-transparent text-black h-full rounded-full focus:outline-none focus:ring-0 pl-4 sm:pl-10 pr-20",
                    animating && "text-transparent dark:text-transparent"
                )}
            />

            <button
                disabled={!value}
                type="submit"
                className="absolute right-2 top-1/2 z-50 -translate-y-1/2 h-8 w-8 rounded-full disabled:bg-gray-100 bg-black dark:bg-zinc-900 dark:disabled:bg-zinc-800 transition duration-200 flex items-center justify-center"
            >
                <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="text-gray-300 h-4 w-4"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M21.0001 6H3.00006V9C4.10463 9 5.00006 9.89543 5.00006 11V15C5.00006 17.8284 5.00006 19.2426 5.87874 20.1213C6.75742 21 8.17163 21 11.0001 21H13.0001C15.8285 21 17.2427 21 18.1214 20.1213C19.0001 19.2426 19.0001 17.8284 19.0001 15V11C19.0001 9.89543 19.8955 9 21.0001 9V6ZM10.5001 11C10.5001 10.4477 10.0523 10 9.50006 10C8.94778 10 8.50006 10.4477 8.50006 11V16C8.50006 16.5523 8.94778 17 9.50006 17C10.0523 17 10.5001 16.5523 10.5001 16V11ZM15.5001 11C15.5001 10.4477 15.0523 10 14.5001 10C13.9478 10 13.5001 10.4477 13.5001 11V16C13.5001 16.5523 13.9478 17 14.5001 17C15.0523 17 15.5001 16.5523 15.5001 16V11Z"
                        fill="currentColor"
                    />
                    <motion.path
                        d="M10.0681 3.37059C10.1821 3.26427 10.4332 3.17033 10.7825 3.10332C11.1318 3.03632 11.5597 3 12 3C12.4403 3 12.8682 3.03632 13.2175 3.10332C13.5668 3.17033 13.8179 3.26427 13.9319 3.37059"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        initial={{
                            pathLength: 0,
                            opacity: 0.3,
                        }}
                        animate={{
                            pathLength: value ? 1 : 0,
                            opacity: value ? 1 : 0.3,
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "linear",
                        }}
                    />
                </motion.svg>
            </button>

            <div className="absolute inset-0 flex items-center rounded-full pointer-events-none">
                <AnimatePresence mode="wait">
                    {!value && (
                        <motion.p
                            initial={{
                                y: 5,
                                opacity: 0,
                            }}
                            key={`current-placeholder-${currentPlaceholder}`}
                            animate={{
                                y: 0,
                                opacity: 1,
                            }}
                            exit={{
                                y: -15,
                                opacity: 0,
                            }}
                            transition={{
                                duration: 0.3,
                                ease: "linear",
                            }}
                            className="dark:text-zinc-500 text-sm sm:text-base font-normal text-neutral-500 pl-4 sm:pl-12 text-left w-[calc(100%-2rem)] truncate"
                        >
                            {placeholders[currentPlaceholder]}
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>
        </form>
    );
}
