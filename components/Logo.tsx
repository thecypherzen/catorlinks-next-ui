"use client";

import { UseTheme } from "@/hooks/UseTheme";
import Image from "next/image";
import { useEffect } from "react";

/**
 * Creates the Logo Component. Makes it easier to render `logo`
 * anywhere in the appliation. One good thing is it inverts based
 * on the theme
 * @function
 * @param {{invert?: boolean;}} props Sent props
 * @returns {HTMLDivElement} The rendered logo component
 */
export function Logo({ invert }: { invert?: boolean }) {
  const { theme } = UseTheme();

  // respond to theme changes
  useEffect(() => {}, [theme]);
  return (
    <div>
      <Image
        src="/logo.png"
        width={18}
        height={20}
        alt="Logo"
        className={invert || theme === "dark" ? "invert" : ""}
      />
    </div>
  );
}
