import React from "react";

export const themes = {
  light: {
    color: "#181818",
    background: "#ffffff",
    backroungdColorNote: "#B1B1B1",
  },
  dark: {
    color: "#fff",
    background: "#181818",
    backroungdColorNote: "#313131",
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
