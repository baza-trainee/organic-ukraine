import { Container } from '../Common/Container/Container';
import { Navigation } from './Navigation/Navigation';

import style from './Header.module.css';
import { SelectLanguage } from './SelectLanguage/SelectLanguage';
import { SupportTheProject } from '../Common/SupportTheProject/SupportTheProject';
import { LogoOrganic } from '../Common/Logo/LogoOrganic';
import css from './Navigation/HeaderNavigation.module.scss';

export const Header = () => {
  return (
    <section className={style.header}>
      <Container>
        <header className={style.header_box}>
          <LogoOrganic />
          <Navigation css={css} />
          <div className={style.link_box}>
            <SupportTheProject />
            <SelectLanguage />
          </div>
        </header>
      </Container>
    </section>
  );
};
