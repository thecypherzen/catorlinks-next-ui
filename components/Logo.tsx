"use client";

import { UseTheme } from "@/hooks/UseTheme";
import Image from "next/image";
import { useEffect } from "react";

export function Logo({ invert }: { invert?: boolean }) {
  const { theme } = UseTheme();

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
