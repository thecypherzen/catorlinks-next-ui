"use client";

import Image from "next/image";
import PageWrapper from "./PageWrapper";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import {
  Bell,
  ChevronDown,
  ChevronUp,
  Headset,
  Images,
  Moon,
  Sun,
} from "lucide-react";
import { UseTheme } from "@/hooks/UseTheme";
import { cn } from "@/lib/utils";

export default function MainNav() {
  const [open, setOpen] = useState<boolean>(false);
  const [ntfCount, _] = useState<number>(Math.floor(Math.random() * 10) % 2);
  const { theme, toggleTheme } = UseTheme();

  useEffect(() => {}, [theme]);
  return (
    <PageWrapper className="h-12 flex flex-col justify-center">
      <nav className="flex justify-between text-foreground">
        {/* Left Nav Set */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <div className="">
            <Image
              src="/logo.png"
              width={18}
              height={20}
              alt="Logo"
              className={theme === "dark" ? "invert" : ""}
            />
          </div>
          {/* Avatar */}
          <div className="flex items-center">
            <Avatar className="size-7">
              <AvatarFallback
                className={cn(
                  "bg-linear-to-br",
                  theme === "light"
                    ? "from-purple-300 to-blue-200"
                    : "from-purple-500 to-blue-400"
                )}
              >
                <div
                  className={cn(
                    "size-4.5 rounded-full bg-linear-to-br",
                    theme === "light"
                      ? " from-purple-300 to-blue-300"
                      : " from-purple-500 to-blue-500"
                  )}
                ></div>
              </AvatarFallback>
            </Avatar>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  className="!bg-transparent hover:text-neutral-400"
                >
                  <span>someusername</span>
                  {open ? <ChevronUp /> : <ChevronDown />}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto">
                <div>
                  <p>Basic user info</p>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        {/* Right Nav Set - Utility Buttons */}
        <div className="flex gap-3 justify-center items-center">
          {/* Nav Buttons */}
          <Button className="flex justify-center items-center gap-2 text-xs font-medium p-1 bg-foreground/5 hover:bg-foreground/10 text-foreground/80 rounded-xl">
            <Images size="16px" />
            <span>Gallery</span>
          </Button>
          <Button className="flex justify-center items-center gap-2 text-xs font-medium p-1 bg-foreground/5 hover:bg-foreground/10 text-foreground/80 rounded-xl">
            <Headset size="16px" />
            <span>Support</span>
          </Button>
          {/* Notification Bell */}
          <div className="hover:bg-foreground/10 rounded-full bg-foreground/5 p-1 size-7 flex flex-col items-center justify-center text-foreground/80 hover:text-foreground relative">
            <Bell size="16px" />
            {ntfCount ? (
              <div className="absolute -top-0 right-0 size-2 bg-red-500 rounded-full flex flex-col items-center justify-center">
                <div className="size-2 rounded-full bg-red-600 animate-ping"></div>
              </div>
            ) : (
              <></>
            )}
          </div>
          {/* Theme Toggle */}
          <div
            className={
              "hover:bg-foreground/10 rounded-full bg-foreground/5 p-1 size-7 flex flex-col items-center justify-center text-foreground/80 hover:text-foreground"
            }
            onClick={() => {
              toggleTheme();
            }}
          >
            <span className="sr-only"> Toggle theme </span>
            {theme === "light" ? (
              <Sun className="text-inherit" size="16px" />
            ) : (
              <Moon className="text-inherit" size="16px" />
            )}
          </div>
          {/* Avatar */}
          <div
            className={cn(
              "size-7 flex flex-col items-center justify-center rounded-full bg-linear-to-br",
              theme === "light"
                ? "from-purple-400 to-blue-300"
                : "from-purple-600 to-blue-500"
            )}
          >
            <div
              className={cn(
                "size-4.5 rounded-full bg-linear-to-br",
                theme === "light"
                  ? "from-purple-400 to-blue-400"
                  : "from-purple-500 to-blue-500"
              )}
            ></div>
          </div>
        </div>
      </nav>
    </PageWrapper>
  );
}
