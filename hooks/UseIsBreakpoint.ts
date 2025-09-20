"use client";

/**
 * Custom hook for on-the-fly custom media queries
 */
import { useEffect, useState } from "react";

const DEFAULT_BREAKPOINT = 768;

/**
 * Creates and watches a media query throughout the app's life cycle
 * @function UseIsBreakpoint
 * @param {number} breakpoint The viewport breakpoint to query for
 *   - defaults to `768`
 * @returns {boolean} True if current viewport matches breakpoint
 * else False
 */
export function UseIsBreakpoint(breakpoint: number = DEFAULT_BREAKPOINT) {
  const [isBreakpoint, setIsBreakpoint] = useState(false);

  // attach media query to viewport on first mount
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
