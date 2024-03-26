import React from "react";

export const themes = {
  light: {
    color: "#181818",
    background: "#ffffff",
    backgroundColorNote: "#F6F4F4",
    backgroundBurgerLine: "#000000",
  },
  dark: {
    color: "#fff",
    background: "#181818",
    backgroundColorNote: "#313131",
    backgroundBurgerLine: "#FFFFFF",
  },
};

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});

export const useThemeContext = () => {
  const theme = React.useContext(ThemeContext);

  if (!theme) return theme.dark;

  return theme;
};
