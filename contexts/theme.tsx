/* eslint-disable prettier/prettier */
import {
  useState, useCallback, createContext, useMemo,
} from 'react';
import { ThemeProvider as ThemeProviderComponent } from 'styled-components';
import { GlobalStyles, light, dark } from '../styles';

export type ThemeModes = 'light' | 'dark';

export type AppThemeContext = {
  theme: ThemeModes;
  toggleTheme: () => void;
};

export const ThemeContext = createContext({} as AppThemeContext);
ThemeContext.displayName = 'Theme';

export type ThemeProviderProps<T = unknown> = T & {
  children: import('react').ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeModes>('light');

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';

      return newTheme;
    });
  }, []);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme],
  );

  return (
    <ThemeProviderComponent theme={theme === 'light' ? light : dark}>
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
      <GlobalStyles />
    </ThemeProviderComponent>
  );
};
