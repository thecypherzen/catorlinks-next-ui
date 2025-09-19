"use client";

import MainNav from "@/components/MainNav";
import { ThemeProvider } from "@/hooks/UseTheme";
import MenuNav from "./MenuNav";
import { Footer } from "./Footer";

export function App({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <MainNav />
      <MenuNav />
      {children}
      <Footer />
    </ThemeProvider>
  );
}
