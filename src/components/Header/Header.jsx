import { Container } from '../Common/Container/Container';
import { Navigation } from './Navigation/Navigation';

import style from './Header.module.scss';
import { SelectLanguage } from './SelectLanguage/SelectLanguage';
import { SupportTheProject } from '../Common/SupportTheProject/SupportTheProject';
import { LogoOrganic } from '../Common/Logo/LogoOrganic';
import css from './Navigation/HeaderNavigation.module.scss';
import burgerMenu from '../../assets/icons/burgermenu.svg';
import { MobileMenu } from './MobileMenu/MobileMenu';
import { useState } from 'react';

export const Header = () => {
  const [isMenu, setIsMenu] = useState(false);

  const togleIsMenu = () => {
    setIsMenu(!isMenu);
    document.body.style.overflow = 'hidden';
  };
  const closeMemu = () => {
    setIsMenu(!isMenu);
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
            <img src={burgerMenu} alt="open mobile menu" />
          </button>
        </div>
        {isMenu && <MobileMenu isMenu={closeMemu} />}
      </Container>
    </header>
  );
};
