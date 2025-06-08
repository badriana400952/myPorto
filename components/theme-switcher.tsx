"use client";
import React, { useEffect, useState } from "react";
import { Switch, Tooltip } from "@heroui/react";
import { Icon } from "@iconify/react";

export const ThemeSwitcher: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Saat mount, baca preferensi tema dari localStorage atau system preference
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else if (storedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      // fallback ke system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDark(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  // Toggle theme handler
  const handleToggle = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };
  if (!isClient) return null; // jangan render di server
  return (
    <Tooltip
      content={`Switch to ${isDark ? "light" : "dark"} mode`}
      placement="bottom"
    >
      <div className="flex items-center gap-2">
        <Icon
          icon="lucide:sun"
          className={`text-default-500 transition-colors ${
            !isDark ? "text-warning" : ""
          }`}
          width={18}
        />
        <Switch
          isSelected={isDark}
          onValueChange={handleToggle}
          size="sm"
          color="primary"
          className="mx-1"
        />
        <Icon
          icon="lucide:moon"
          className={`text-default-500 transition-colors ${
            isDark ? "text-primary" : ""
          }`}
          width={18}
        />
      </div>
    </Tooltip>
  );
};
