"use client";

import {
  ChevronDown,
  ChevronUp,
  Cpu,
  DraftingCompass,
  Image,
  MicVocal,
  PenLine,
  PersonStanding,
  Video,
  WandSparkles,
} from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  AppSection,
  AppSectionContent,
  AppSectionControl,
  AppSectionHeader,
  AppSectionTitle,
} from "./AppSection";
import { UseIsBreakpoint } from "@/hooks/UseIsBreakpoint";

export function QuickActionsSection() {
  const [open, setOpen] = useState<boolean>(false);
  const initCount = 4;
  const [visibleActions, setVisibleActions] = useState<number>(initCount);
  const { data: actions, backgrounds: bgs } = getQAData();
  const useTwoGridCols = UseIsBreakpoint(515);
  const size = actions.length;

  useEffect(() => {
    if (open) {
      setVisibleActions(size);
    } else {
      setVisibleActions(initCount);
    }
  }, [open, size]);

  useEffect(() => {}, [visibleActions, useTwoGridCols]);

  return (
    <AppSection className="space-y-5 py-5 transition-discrete duration-1000">
      {/* Controls */}
      <AppSectionHeader>
        <AppSectionTitle>Generate</AppSectionTitle>
        <AppSectionControl>
          <Button
            variant="outline"
            className="bg-transparent hover:bg-transparent border-none shadow-none flex gap-1 items-center text-blue-500 dark:text-blue-600 transition-all duration-300"
            onClick={() => {
              setOpen((prev) => !prev);
            }}
          >
            {open ? <ChevronUp /> : <ChevronDown />}
            &nbsp;Show&nbsp;
            {open ? "less" : "all"}
          </Button>
        </AppSectionControl>
      </AppSectionHeader>
      {/* Quick Actions */}
      <AppSectionContent
        className={cn(
          "grid gap-2 max-h-[80svh] overflow-y-auto pb-6 pt-2",
          useTwoGridCols
            ? "grid-cols-1"
            : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        )}
      >
        {actions
          .slice(0, visibleActions < size ? visibleActions : undefined)
          .map((action, index) => {
            return (
              <div
                className="flex items-center justify-between gap-2 p-2 w-full"
                key={`qa-item-${index}`}
              >
                <div className="w-5/6 flex gap-2 items-center h-full">
                  <div
                    className={cn(
                      "bg-linear-to-b from-slate-700 to-slate-300 rounded-lg h-4/5 aspect-square flex flex-col items-center justify-center text-white",
                      bgs[index]
                    )}
                  >
                    <action.icon strokeWidth="2px" className="p-0" />
                  </div>
                  <div>
                    <div className="flex gap-2 items-center">
                      <h4 className="font-semibold text-md">{action.name}</h4>
                      {action.isNew && (
                        <span className="px-2 h-[20px] text-[12px] rounded-full inline-flex flex-col justify-center items-center bg-blue-500 text-white font-medium">
                          New
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-foreground/60 line-clamp-2">
                      {action.description}
                    </p>
                  </div>
                </div>
                <div className="w-1/6 flex flex-col items-center justify-center bg-neutral-100 text-neutral-900 dark:bg-foreground/10 dark:hover:bg-neutral-900 dark:text-neutral-400 dark:hover:border-1 dark:hover-border-neutral-300 rounded-full text-xs p-1   hover:scale-[1.05] cursor-pointer transition-scale duration-200">
                  Open
                </div>
              </div>
            );
          })}
      </AppSectionContent>
    </AppSection>
  );
}

const actionsData = [
  {
    isNew: true,
    name: "Image",
    description:
      "Generate high-quality images instantly from simple text prompts. Ideal for creative projects, design prototypes, and marketing campaigns.",
    icon: Image,
  },
  {
    isNew: true,
    name: "Video",
    description:
      "Turn your ideas into cinematic videos in minutes. Create animations, ads, or short films with ease.",
    icon: Video,
  },
  {
    isNew: false,
    name: "Realtime",
    description:
      "Collaborate with AI models in real time. Perfect for live chat, instant feedback, and rapid prototyping.",
    icon: PenLine,
  },
  {
    isNew: true,
    name: "Enhancer",
    description:
      "Improve the quality of your media with AI-powered upscaling, sharpening, and noise reduction. Works on both images and videos.",
    icon: WandSparkles,
  },
  {
    isNew: true,
    name: "Edit",
    description:
      "Seamlessly edit text, images, or video content with advanced AI tools. Replace, remove, or modify any element while keeping natural results.",
    icon: DraftingCompass,
  },
  {
    isNew: true,
    name: "Video Lipsync",
    description:
      "Synchronize spoken audio with video characters automatically. Great for dubbing, localization, and creative content.",
    icon: MicVocal,
  },
  {
    isNew: true,
    name: "Motion Transfer",
    description:
      "Transfer movements from one video source to another. Animate avatars, characters, or objects with realistic motion capture precision.",
    icon: PersonStanding,
  },
  {
    isNew: false,
    name: "Train",
    description:
      "Build and fine-tune your own AI models on custom datasets. Tailor them for specific tasks like chat, vision, or recommendations.",
    icon: Cpu,
  },
];

const backgrounds = [
  "from-slate-700 to-slate-300",
  "from-yellow-500 to-orange-600",
  "from-blue-600 to-blue-300",
  "from-neutral-800 to-neutral-400",
  "from-violet-950 to-purple-700",
  "from-teal-800 to-lime-300",
  "from-neutral-700 to-black",
  "from-teal-700 to-yellow-300",
];
function getQAData() {
  return { data: actionsData, backgrounds };
}
