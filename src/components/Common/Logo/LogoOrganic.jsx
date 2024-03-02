import Logo from '../../../assets/icons/logoOrganic.svg';
import style from './LogoOrganic.module.css';
export const LogoOrganic = () => {
  return <img src={Logo} alt="logo" className={style.logo} />;
};
