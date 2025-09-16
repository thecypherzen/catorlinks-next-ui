"use client";

import MainNav from "@/components/MainNav";
import { ThemeProvider } from "@/hooks/UseTheme";

export function App({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <MainNav />
      {children}
    </ThemeProvider>
  );
}
