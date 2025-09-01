import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames';
import cls from './ThemeSwitch.module.scss';
import DarkThemeIcon from "shared/assets/icons/DarkThemeIcon.svg"
import LightThemeIcon from "shared/assets/icons/LightThemeIcon.svg"
;
import { Button, ThemeButton } from 'shared/ui/Button/Button';
interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
      theme={ThemeButton.CLEAR }
    >
      {theme === Theme.DARK ? <DarkThemeIcon fill="currentColor" /> : <LightThemeIcon fill="currentColor" />}
    </Button>
  );
};
 