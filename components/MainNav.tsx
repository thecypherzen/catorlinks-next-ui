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
import { ChevronDown, ChevronUp, Sun } from "lucide-react";
import { UseTheme } from "@/hooks/UseTheme";

export default function MainNav() {
  const [open, setOpen] = useState<boolean>(false);
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
              <AvatarFallback className="bg-neutral-500"></AvatarFallback>
            </Avatar>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  className="hover:bg-transparent hover:text-neutral-400"
                >
                  <span>someusername</span>
                  {open ? <ChevronUp /> : <ChevronDown />}
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div>
                  <p>Basic user info</p>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        {/* Right Nav Set - Utility Buttons */}
        <div className="flex gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-foreground/20 rounded-full bg-foreground/10"
            onClick={() => {
              toggleTheme();
            }}
          >
            <span className="sr-only"> Toggle theme </span>
            <Sun className="text-foreground" />
          </Button>
        </div>
      </nav>
    </PageWrapper>
  );
}
