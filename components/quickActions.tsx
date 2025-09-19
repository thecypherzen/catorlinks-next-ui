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
import { useState } from "react";
import { cn } from "@/lib/utils";

export function QuickActions() {
  const [open, setOpen] = useState<boolean>(false);
  const { data: actions, backgrounds: bgs } = getQAData();
  return (
    <div className="space-y-5 py-5">
      {/* Controls */}
      <div className="flex justify-between">
        <h3 className="font-bold text-xl">Generate</h3>
        <Button
          variant="outline"
          className="bg-transparent hover:bg-transparent border-none shadow-none flex gap-1 items-center text-blue-500 dark:text-blue-600"
        >
          {open ? <ChevronUp /> : <ChevronDown />}
          &nbsp;Show&nbsp;
          {open ? "all" : "less"}
        </Button>
      </div>
      {/* Quick Actions */}
      <div className="grid grid-cols-4 gap-2">
        {actions.map((action, index) => {
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
              <div className="w-1/6">
                <span className="bg-neutral-100 text-neutral-900 rounded-full text-xs px-3 py-1 inline-block">
                  Open
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const actionsData = [
  {
    isNew: true,
    name: "Image",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet tempore aliquid, nobis quos porro voluptatem",
    icon: Image,
  },
  {
    isNew: true,
    name: "Video",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet tempore aliquid, nobis quos porro voluptatem",
    icon: Video,
  },
  {
    isNew: false,
    name: "Realtime",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet tempore aliquid, nobis quos porro voluptatem",
    icon: PenLine,
  },
  {
    isNew: true,
    name: "Enhancer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet tempore aliquid, nobis quos porro voluptatem",
    icon: WandSparkles,
  },
  {
    isNew: true,
    name: "Edit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet tempore aliquid, nobis quos porro voluptatem",
    icon: DraftingCompass,
  },
  {
    isNew: true,
    name: "Video Lipsync",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet tempore aliquid, nobis quos porro voluptatem",
    icon: MicVocal,
  },
  {
    isNew: true,
    name: "Motion Transfer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet tempore aliquid, nobis quos porro voluptatem",
    icon: PersonStanding,
  },
  {
    isNew: false,
    name: "Train",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet tempore aliquid, nobis quos porro voluptatem",
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
