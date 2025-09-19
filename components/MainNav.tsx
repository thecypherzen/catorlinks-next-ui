"use client";

import PageWrapper from "./PageWrapper";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
  Menu,
  Moon,
  Sun,
} from "lucide-react";
import { UseTheme } from "@/hooks/UseTheme";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { UseIsBreakpoint } from "@/hooks/UseIsBreakpoint";
import { Sheet, SheetTrigger } from "./ui/sheet";
import MenuNav from "./MenuNav";

export default function MainNav() {
  const { theme } = UseTheme();
  const isMobile = UseIsBreakpoint(932);

  useEffect(() => {}, [theme]);
  return (
    <nav className="flex flex-col justify-center bg-background/70 sticky top-0 backdrop-blur-3xl z-50 backdrop-opacity-100 py-2 lg:py-3">
      <PageWrapper className="h-full">
        <div className="flex justify-between text-foreground">
          {!isMobile ? (
            <>
              {/* Left Nav Set */}
              <div className="flex items-center gap-6">
                {/* Logo */}
                <Logo />
                {/* Avatar */}
                <CurrentUser />
              </div>
              <div className="flex-1 translate-3d translate-z-0">
                <MenuNav />
              </div>
              {/* Right Nav Set - Utility Buttons */}
              <div className="flex gap-2 justify-center items-center">
                <QuickNavButtons />
                <NotificationAlert />
                <ThemeToggle />
                <AvatarPlaceholder />
              </div>
            </>
          ) : (
            <>
              <Logo />
              {/* Sheet Trigger */}
              <div className="flex-1 translate-3d translate-z-0">
                <MenuNav />
              </div>
              <Sheet>
                <SheetTrigger className="p-1 active:bg-neutral-300 dark:bg-neutral-900 rounded-sm">
                  <Menu strokeWidth="2px" className="text-xl" spacing="2px" />
                </SheetTrigger>
              </Sheet>
            </>
          )}
        </div>
      </PageWrapper>
    </nav>
  );
}

function AvatarPlaceholder() {
  const { theme } = UseTheme();
  return (
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
  );
}

function CurrentUser() {
  const [open, setOpen] = useState<boolean>(false);
  const { theme } = UseTheme();
  return (
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
  );
}

function NotificationAlert() {
  const [ntfCount] = useState<number>(Math.floor(Math.random() * 10) % 2);
  return (
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
  );
}

function QuickNavButtons() {
  return (
    <div className="flex gap-2 items-cener justify-center">
      <Button className="flex justify-center items-center gap-2 text-xs font-medium p-1 bg-foreground/5 hover:bg-foreground/10 text-foreground/80 rounded-xl">
        <Images size="16px" />
        <span>Gallery</span>
      </Button>
      <Button className="flex justify-center items-center gap-2 text-xs font-medium p-1 bg-foreground/5 hover:bg-foreground/10 text-foreground/80 rounded-xl">
        <Headset size="16px" />
        <span>Support</span>
      </Button>
    </div>
  );
}

function ThemeToggle() {
  const { theme, toggleTheme } = UseTheme();

  return (
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
  );
}
