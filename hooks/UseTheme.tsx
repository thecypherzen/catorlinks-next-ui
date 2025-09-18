"use client";

import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

const defaultTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";

export const ThemeProvider = ({
  children,
  storeKey = "ctl-ui-theme",
}: ThemeProviderPropsType) => {
  const [theme, setTheme] = useState<ThemeType>(
    (window.localStorage.getItem(storeKey) as ThemeType | null) || defaultTheme
  );

  const toggleTheme = () => {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const detected =
      (window.localStorage.getItem(storeKey) as ThemeType | null) ||
      defaultTheme;
    setTheme(detected);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    window.localStorage.setItem(storeKey, theme);
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const UseTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("UseTheme must be used withing ThemeProvider");
  }
  return context;
};

/* types */
type ThemeContextType = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

type ThemeType = "light" | "dark";

type ThemeProviderPropsType = {
  children: React.ReactNode;
  storeKey?: string;
};
