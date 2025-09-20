"use client";

import { cn } from "@/lib/utils";

/**
 * Should have named it ContentWrapper instead as that's
 * what it actually does. It wraps content so it doesn't
 * exceed reasonable bounds, especially on extra-wide screens.
 *   - Handles padding and spacing for a more consistent
 * behaviour and look throughout the app.
 * @function PageWrapper
 * @param {React.ComponentProps} props The props sent.
 * Expects `children`. Others are *optional*
 * @returns {React.FC<HTMLDivElement>} A react div element
 */
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
