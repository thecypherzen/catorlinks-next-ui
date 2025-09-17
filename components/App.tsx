"use client";

import MainNav from "@/components/MainNav";
import { ThemeProvider } from "@/hooks/UseTheme";
import MenuNav from "./MenuNav";

export function App({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <MainNav />
      <MenuNav />
      {children}
    </ThemeProvider>
  );
}
