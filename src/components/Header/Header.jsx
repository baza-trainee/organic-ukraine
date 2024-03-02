import { Container } from '../Common/Container/Container';
import { Navigation } from './Navigation/Navigation';

import style from './Header.module.css';
import { SelectLanguage } from './SelectLanguage/SelectLanguage';
import { SupportTheProject } from '../Common/SupportTheProject/SupportTheProject';
import { LogoOrganic } from '../Common/Logo/LogoOrganic';

export const Header = () => {
  return (
    <section className={style.header}>
      <Container>
        <div className={style.header_box}>
          <LogoOrganic />
          <Navigation />
          <div className={style.link_box}>
            <SelectLanguage />
            <SupportTheProject />
          </div>
        </div>
      </Container>
    </section>
  );
};
