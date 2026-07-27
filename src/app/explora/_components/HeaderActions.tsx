"use client";
import Link from "next/link";
import { useState } from "react";
import { HiSun, HiMoon } from "react-icons/hi2";

export default function HeaderActions() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const handleTheme = (theme: "light" | "dark") => setTheme(theme);

  return (
    <div className="flex items-center gap-3">
      <Link
        href="/soporte"
        className="text-sm text-neutral-200 hover:underline"
      >
        Soporte
      </Link>

      <button
        onClick={() => handleTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 rounded-full cursor-pointer dark:bg-neutral-800 light:bg-neutral-100 dark:hover:bg-neutral-700 light:hover:bg-neutral-200 transition-colors"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? (
          <HiSun className="size-5 dark:text-yellow-400" />
        ) : (
          <HiMoon className="size-5 light:text-blue-600" />
        )}
      </button>
    </div>
  );
}
