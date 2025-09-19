"use client";

import { cn } from "@/lib/utils";

export default function PageWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "w-full max-w-[1400px] m-auto py-2 px-3 md:px-4 lg:px-6 bg-transparent",
        className
      )}
    >
      {children}
    </div>
  );
}
