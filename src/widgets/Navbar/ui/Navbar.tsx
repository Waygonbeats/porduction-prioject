import { classNames } from 'shared/lib/classNames'
import cls from"./Navbar.module.scss"
import { AppLink } from 'shared/AppLink/AppLink';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();   
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <AppLink to="/" >{t('Главная страница')}</AppLink>
      <AppLink to="/about" >{t('О нас')}</AppLink>
    </div>
  )
}

