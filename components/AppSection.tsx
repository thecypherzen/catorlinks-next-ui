"use client";

import { cn } from "@/lib/utils";

/**
 * A custom component that standardises an app section, providing
 * All needed elments with consistent styling. Flexible enough to
 * allow dynamic data and specific custom styles.
 * @function AppSection
 * @param { React.ComponentProps<div> } props Props passed
 * @returns {HTMLDivElement} The AppSection Wrapper
 */
export function AppSection({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      className={cn(
        "space-y-5 py-5 transition-discrete duration-1000 w-full",
        className
      )}
      {...props}
    />
  );
}

/**
 * AppSection Header Component
 * @function AppSectionHeader
 * @param { React.ComponentProps<div> } props Props passed
 * @returns {HTMLDivElement} The AppSection Wrapper
 */
export function AppSectionHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn("flex justify-between", className)} {...props} />;
}

/**
 * AppSection Header Title Component
 * @function AppSectionTitle
 * @param { React.ComponentProps<div> } props Props passed
 * @returns {HTMLDivElement} The AppSection Wrapper
 */
export function AppSectionTitle({
  className,
  ...props
}: React.ComponentProps<"h3">) {
  return <h3 className={cn("font-bold text-xl", className)} {...props} />;
}

/**
 * Every AppSectionHeader has some extra element to the right. These
 * could be buttons, badges, etc. This renders those `children` but
 * keeps the styling of that far right consistent.
 * @function AppSectionControl
 * @param { React.ComponentProps<div> } props Props passed
 * @returns {HTMLDivElement} The AppSection Wrapper
 */
export function AppSectionControl({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex items-center justify-center gap-2", className)}
      {...props}
    />
  );
}

/**
 * AppSection Content Component
 * @function AppSectionContent
 * @param { React.ComponentProps<div> } props Props passed
 * @returns {HTMLDivElement} The AppSection Wrapper
 */
export function AppSectionContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn(className)} {...props} />;
}
