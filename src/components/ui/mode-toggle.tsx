"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  if (theme === "light") {
    return (
      <button
        className="bg-gray-700 border-none pb-4"
        onClick={() => setTheme("dark")}
      >
        <Moon className=" absolute h-[1.2rem] w-[1.2rem] " />
        <span className="sr-only">Toggle theme</span>
      </button>
    );
  }

  return (
    <button
      className="bg-gray-700 border-none"
      onClick={() => setTheme("light")}
    >
      <Sun className="absolute h-[1.2rem] w-[1.2rem]  " />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
