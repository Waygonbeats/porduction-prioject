import { FC, ReactNode, useEffect, useMemo, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;
const ThemeProvider: FC= ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    const savedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const defaultProps = useMemo(
    () => ({
      theme: theme,
      setTheme: setTheme,
    }),
    [theme],
  );


  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
