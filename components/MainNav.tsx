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
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function MainNav() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <PageWrapper>
      <nav className="flex justify-between text-background">
        <div className="flex gap-6 border-1 border-neutral-500">
          {/* Logo */}
          <div className="">
            <Image
              src="/logo.png"
              width={18}
              height={20}
              alt="Logo"
              className="invert"
            />
          </div>
          {/* Avatar */}
          <div className="flex items-center gap-3">
            <Avatar className="size-7">
              <AvatarFallback className="bg-neutral-500"></AvatarFallback>
            </Avatar>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button variant="ghost" className="hover:bg-transparent">
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
        <div></div>
      </nav>
    </PageWrapper>
  );
}
