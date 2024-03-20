import { Container } from '../Common/Container/Container';
import { Navigation } from './Navigation/Navigation';

import style from './Header.module.css';
import { SelectLanguage } from './SelectLanguage/SelectLanguage';
import { SupportTheProject } from '../Common/SupportTheProject/SupportTheProject';
import { LogoOrganic } from '../Common/Logo/LogoOrganic';
import css from './Navigation/HeaderNavigation.module.scss';
import { useMediaQuery } from 'react-responsive';

export const Header = () => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1440px)',
  });
  return (
    <section className={style.header}>
      <Container>
        <header className={style.header_box}>
          <LogoOrganic />
          {isDesktop && <Navigation css={css} />}
          <div className={style.link_box}>
            <SupportTheProject />
            <SelectLanguage />
          </div>
        </header>
      </Container>
    </section>
  );
};
