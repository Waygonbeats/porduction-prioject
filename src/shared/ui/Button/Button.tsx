import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from '../../lib/classNames';
import cls from './Button.module.scss';
export  enum ThemeButton {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  DANGER = 'danger',
  CLEAR = 'clear',
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { className, children, theme, ...otherProps } = props;
  return (
    <button
      className={classNames(cls.Button, { [cls[theme]]: true }, [className])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
