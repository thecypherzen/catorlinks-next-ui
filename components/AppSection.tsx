import { cn } from "@/lib/utils";

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

export function AppSectionHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className="flex justify-between" {...props} />;
}

export function AppSectionTitle({
  className,
  ...props
}: React.ComponentProps<"h3">) {
  return <h3 className={cn("font-bold text-xl", className)} {...props} />;
}

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

export function AppSectionContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return <div className={cn(className)} {...props} />;
}
