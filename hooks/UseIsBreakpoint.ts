"use client";

import { useEffect, useState } from "react";

const DEFAULT_BREAKPOINT = 768;
export function UseIsBreakpoint(breakpoint: number = DEFAULT_BREAKPOINT) {
  const [isBreakpoint, setIsBreakpoint] = useState(false);

  useEffect(() => {
    if (!window) return;
    const mql = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const onChangeHandler = () => {
      setIsBreakpoint(window.innerWidth <= breakpoint);
    };

    mql.addEventListener("change", onChangeHandler);
    setIsBreakpoint(window.innerWidth <= breakpoint);
    return () => mql.removeEventListener("change", onChangeHandler);
  }, []);

  return isBreakpoint;
}
