"use client";

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
import { useState } from "react";

const navItems = [
  { icon: House, name: "house" },
  { icon: Image, name: "image" },
  { icon: Video, name: "video" },
  { icon: WandSparkles, name: "sparkles" },
  { icon: Scissors, name: "scissors" },
  { icon: DraftingCompass, name: "compass" },
  { icon: Folder, name: "folder" },
];
export default function MenuNav() {
  const [active, setActive] = useState<string | undefined>(undefined);

  return (
    <div className="max-w-[370px] m-auto overflow-x-auto flex justify-center items-center gap-2 p-1 rounded-xl sticky top-2 -mt-10 bg-foreground/5 z-60 dark:bg-foreground/10 backdrop-blur-3xl">
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
