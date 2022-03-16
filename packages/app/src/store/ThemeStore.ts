import { createContext } from "react";

export const themes = {
  light: {
    classes: "App",
  },
  dark: {
    classes: "App dark-mode bg-black text-white",
  }
}

export type ThemeType = typeof themes.light;
export const ThemeContext = createContext<ThemeType>(themes.light);
