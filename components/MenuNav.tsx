"use client";

import { UseIsBreakpoint } from "@/hooks/UseIsBreakpoint";
import { cn } from "@/lib/utils";
import {
  DraftingCompass,
  Folder,
  House,
  Image,
  Scissors,
  Video,
  WandSparkles,
} from "lucide-react";
import { useEffect, useState } from "react";

/**
 * The elements that constitute the tools menu nav
 * I called it `MenuNav`, but I think a better name
 * should have been `Toolbar`
 * @constant navItems
 */
const navItems = [
  { icon: House, name: "house" },
  { icon: Image, name: "image" },
  { icon: Video, name: "video" },
  { icon: WandSparkles, name: "sparkles" },
  { icon: Scissors, name: "scissors" },
  { icon: DraftingCompass, name: "compass" },
  { icon: Folder, name: "folder" },
];

/**
 * The Tool Menu Component
 * @function MenuNav
 * @returns {HTMLDivElement} A `div` element that renders the `toolbox`
 */
export default function MenuNav() {
  const [active, setActive] = useState<string | undefined>(undefined);
  const isMobileView = UseIsBreakpoint(932);

  // respond to breakpoint changes
  useEffect(() => {}, [isMobileView]);

  return (
    <div
      className={cn(
        "w-3/4 sm:max-w-6/11 md:max-w-[370px] left-1/7 sm:left-1/5 lg:left-1/8 xl:left-1/4 overflow-x-auto flex items-center gap-1 md:gap-2 px-3 py-2 rounded-xl fixed top-1 backdrop-blur-3xl backdrop-opacity-100 bg-linear-to-b from-transparent via-30% to-neutral-100 dark:to-neutral-800 scrollbar-hidden border-[0.5px] border-white dark:border-neutral-700/50",
        isMobileView ? "md:left-1/4" : "md:left-1/6"
      )}
    >
      {navItems.map((item, i) => (
        <div
          key={i}
          className={cn(
            "rounded-lg px-3 py-2 text-neutral-700 dark:text-neutral-200 transition-all duration-200",
            active === item.name
              ? "bg-white dark:bg-foreground/80 text-neutral-800 dark:text-neutral-800 hover:scale-[1.1]"
              : "hover:bg-neutral-200 dark:hover:bg-foreground/30"
          )}
          onClick={() => setActive(() => item.name)}
        >
          <item.icon size="20px" />
        </div>
      ))}
    </div>
  );
}
