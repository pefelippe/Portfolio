"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./button";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  if (theme === "light") {
    return (
      <Button
        className="px-2 rounded-full text-[#101010]"
        variant={"outline"}
        onClick={() => setTheme("dark")}
      >
        <Moon className="h-6 w-6" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  return (
    <Button
      className="px-2 rounded-full text-white"
      variant={"outline"}
      onClick={() => setTheme("light")}
    >
      <Sun className="h-6 w-6" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
