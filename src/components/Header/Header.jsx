import { Container } from '../Common/Container/Container';
import { Navigation } from './Navigation/Navigation';

import style from './Header.module.scss';
import { SelectLanguage } from './SelectLanguage/SelectLanguage';
import { SupportTheProject } from '../Common/SupportTheProject/SupportTheProject';
import { LogoOrganic } from '../Common/Logo/LogoOrganic';
import css from './Navigation/HeaderNavigation.module.scss';
import BurgerMenuTablet from '../../assets/icons/burgermenu.svg?react';
import BurgerMenuMobile from '../../assets/icons/burgermenu_mobile.svg?react';
import { MobileMenu } from './MobileMenu/MobileMenu';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const isMobileOrTablet = useMediaQuery({
    query: '(min-width: 768px)',
  });

  const togleIsMenu = () => {
    setIsMenu(!isMenu);
    document.body.style.overflow = 'hidden';
  };
  const closeMemu = () => {
    setIsMenu(false);
    document.body.style.overflow = '';
  };

  return (
    <header className={style.header_section}>
      <Container>
        <div className={style.header_box}>
          <LogoOrganic />
          <Navigation css={css} />
          <div className={style.link_box}>
            <SupportTheProject />
            <SelectLanguage />
          </div>

          <button
            type="button"
            className={style.button_open_modal}
            onClick={togleIsMenu}
          >
            {isMobileOrTablet ? <BurgerMenuTablet /> : <BurgerMenuMobile />}
            {/* <img src={burgerMenu} alt="open mobile menu" /> */}
          </button>
        </div>
        {isMenu && <MobileMenu isMenu={closeMemu} />}
      </Container>
    </header>
  );
};
