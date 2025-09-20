"use client";

import { createContext, useContext, useEffect, useState } from "react";

/**
 * The theme context
 * @constant {ThemeContextType} ThemeContext
 */
export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

/**
 * Provider for app theme state
 * @function ThemeProvider
 * @param {ThemeProviderPropsType} props The accepted props during init
 * @returns {React.Provider} - The Theme Context Provider
 */
export const ThemeProvider = ({
  children,
  storeKey = "ctl-ui-theme",
}: ThemeProviderPropsType) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  const toggleTheme = () => {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  };

  // Detect theme on component load
  useEffect(() => {
    if (!window) return;
    const storedTheme = window.localStorage.getItem(storeKey) as ThemeType;
    const detected =
      storedTheme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    setTheme(detected);
  }, []);

  // Update theme when it changes
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

/**
 * Custom Hook to used to access theme anywhere in app
 * @function UseTheme
 * @returns {ThemeContextType} The theme context
 */
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
