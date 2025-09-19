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
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import MenuNav from "./MenuNav";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function MainNav() {
  const { theme } = UseTheme();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const isMobile = UseIsBreakpoint(932);

  useEffect(() => {}, [theme]);
  useEffect(() => {}, [menuIsOpen]);
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
              <Sheet open={menuIsOpen} onOpenChange={setMenuIsOpen}>
                <SheetTrigger className="p-1 active:bg-neutral-300 dark:bg-neutral-900 rounded-sm">
                  <Menu strokeWidth="2px" className="text-xl" spacing="2px" />
                </SheetTrigger>
                <SheetContent className="gap-0 border-1">
                  <SheetHeader className="shadow-lg shadow-neutral-200/50 border-b-[0.3px] border-b-neutral-100/30 dark:border-b-neutral-600/30 dark:shadow-neutral-900/60 translate-3d translate-z-0">
                    <SheetTitle className="flex py-4  divide-x-1 divide-foreground/60 gap-3 items-center">
                      <div className="pr-3">
                        <Logo />
                      </div>
                      <span className="text-foreground/60 uppercase">Menu</span>
                    </SheetTitle>
                    <SheetDescription className="sr-only">
                      Navigation menu
                    </SheetDescription>
                  </SheetHeader>
                  <div className="p-2 flex flex-col gap-6 justify-start items-center max-h-[calc(100%-100px)] overflow-y-auto sticky bottom-0">
                    <CurrentUser className="justify-between w-full" />
                    {/* Quick Actions */}
                    <Card className="w-full gap-4">
                      <CardHeader>
                        <CardTitle className="mobile-section-header font-medium text-xs uppercase">
                          Controls
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="flex justify-between align-center w-full px-3 py-2 rounded-md font-medium bg-foreground/5 hover:bg-foreground/10 text-foreground/80 active:bg-outline-1 active:outline-foreground/20 items-center cursor-pointer dark:hover:bg-foreground/20">
                          <h6>Notifications</h6>
                          <NotificationAlert forMobile />
                        </div>
                        <div className="flex justify-between align-center w-full px-3 py-2 rounded-md font-medium bg-foreground/5 hover:bg-foreground/10 text-foreground/80 active:bg-outline-1 active:outline-foreground/20 items-center cursor-pointer dark:hover:bg-foreground/20">
                          <h6>Toggle Theme</h6>
                          <ThemeToggle forMobile />
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="w-full gap-4">
                      <CardHeader>
                        <CardTitle className="mobile-section-header font-medium text-xs uppercase">
                          Quick Actions
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <QuickNavButtons forMobile />
                      </CardContent>
                    </Card>
                  </div>
                  <SheetFooter>
                    <div className="flex justify-between items-center">
                      <AvatarPlaceholder />
                      <span className="text-xs text-foreground/50">
                        &copy; 2025 - <span>William Inyam</span>
                      </span>
                    </div>
                  </SheetFooter>
                </SheetContent>
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

function CurrentUser({ className, ...props }: React.ComponentProps<"div">) {
  const [open, setOpen] = useState<boolean>(false);
  const { theme } = UseTheme();
  return (
    <div className={cn("flex items-center", className)} {...props}>
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

function NotificationAlert({ forMobile = false }: { forMobile?: boolean }) {
  const [ntfCount, setNtfCount] = useState<number>(0);

  useEffect(() => {
    const c = Math.floor(Math.random() * 10) % 2;
    setNtfCount(c);
  }, []);

  useEffect(() => {}, [ntfCount]);
  return (
    <div
      className={cn(
        "rounded-full size-8 flex flex-col items-center justify-center text-foreground/80 hover:text-foreground relative",
        forMobile ? "nav-icon-mobile" : "nav-icon-desktop"
      )}
    >
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

function QuickNavButtons({ forMobile = false }: { forMobile?: boolean }) {
  return (
    <div
      className={cn(
        "flex gap-2",
        forMobile ? "flex-col" : "items-cener justify-center"
      )}
    >
      <Button
        className={cn(
          "flex font-medium bg-foreground/5 active:bg-outline-1 active:outline-foreground/20 hover:bg-foreground/10 text-foreground/80  items-center cursor-pointer dark:hover:bg-foreground/20",
          forMobile
            ? "w-full justify-between px-3 py-2 h-auto"
            : "justify-center gap-2 text-xs px-4 rounded-full"
        )}
      >
        <div
          className={cn(
            forMobile ? "nav-icon-mobile size-8 order-2" : "order1"
          )}
        >
          <Images size="16px" />
        </div>
        <span className={forMobile ? "order-1" : "order-2"}>Gallery</span>
      </Button>
      <Button
        className={cn(
          "flex font-medium bg-foreground/5 hover:bg-foreground/10 text-foreground/80 active:bg-outline-1 active:outline-foreground/20 items-center cursor-pointer dark:hover:bg-foreground/20",
          forMobile
            ? "w-full justify-between px-3 py-2 h-auto"
            : "justify-center gap-2 text-xs px-4 rounded-full"
        )}
      >
        <div
          className={cn(
            forMobile ? "nav-icon-mobile size-8 order-2" : "order-1"
          )}
        >
          <Headset size="16px" />
        </div>
        <span className={forMobile ? "order-1" : "order-2"}>Support</span>
      </Button>
    </div>
  );
}

function ThemeToggle({ forMobile = false }: { forMobile?: boolean }) {
  const { theme, toggleTheme } = UseTheme();

  return (
    <div
      className={cn(
        "rounded-full size-8 flex flex-col items-center justify-center text-foreground/80 hover:text-foreground relative",
        forMobile ? "nav-icon-mobile" : "nav-icon-desktop"
      )}
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
