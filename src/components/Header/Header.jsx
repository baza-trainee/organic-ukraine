import { Container } from '../Common/Container/Container';
import { Navigation } from './Navigation/Navigation';

import style from './Header.module.scss';
import { SelectLanguage } from './SelectLanguage/SelectLanguage';
import { SupportTheProject } from '../Common/SupportTheProject/SupportTheProject';
import { LogoOrganic } from '../Common/Logo/LogoOrganic';
import css from './Navigation/HeaderNavigation.module.scss';
import { useMediaQuery } from 'react-responsive';
import burgerMenu from '../../assets/icons/burgermenu.svg';
import { MobileMenu } from './MobileMenu/MobileMenu';
import { useState } from 'react';

export const Header = () => {
  const [isMenu, setIsMenu] = useState(false);

  const togleIsMenu = () => {
    setIsMenu(!isMenu);
  };
  console.log(isMenu);
  const isDesktop = useMediaQuery({
    query: '(min-width: 1440px)',
  });
  return (
    <header className={style.header}>
      <Container>
        <div className={style.header_box}>
          <LogoOrganic />
          {isDesktop && <Navigation css={css} />}
          <div className={style.link_box}>
            <SupportTheProject />
            <SelectLanguage />
          </div>
          {!isDesktop && (
            <button
              type="button"
              className={style.custom_icon}
              onClick={togleIsMenu}
            >
              <img src={burgerMenu} alt="open mobile menu" />
            </button>
          )}
          {isMenu && <MobileMenu isMenu={togleIsMenu} />}
        </div>
      </Container>
    </header>
  );
};
