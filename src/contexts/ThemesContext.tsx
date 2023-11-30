import React, { ReactNode, createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import Themes from "../themes/ThemesStyle.tsx";
import GlobalStyle from "../themes/GlobalStyle.tsx";

type Props = { children: ReactNode; };

const ThemeContext = createContext({});
const StorageName = "theme-storage";

const MyThemeProvider = ({ children }: Props) => {
  const storage = localStorage.getItem(StorageName);

  const [ theme, setTheme ] = useState(() => {
    if (!storage) {
      localStorage.setItem(StorageName, Themes.dark.name);
      return Themes.dark.name;
    }
    return storage;
  });

  const onChangeTheme = () => {
    return theme === Themes.dark.name ? 
      Themes.dark : Themes.light;
  };

  const onToggleTheme = () => {
    if (storage) {
      if (storage === Themes.dark.name) {
        setTheme(Themes.light.name);
        localStorage.setItem(StorageName, Themes.light.name);
      }
      else {
        setTheme(Themes.dark.name);
        localStorage.setItem(StorageName, Themes.dark.name);
      }
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, onToggleTheme }}>
      <ThemeProvider theme={ onChangeTheme }>
        { children }
        <GlobalStyle />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext };
export default MyThemeProvider;
