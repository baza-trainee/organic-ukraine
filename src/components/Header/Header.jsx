import { Container } from '../Common/Container/Container';
import { Navigation } from './Navigation/Navigation';

import style from './Header.module.css';
// import { LogoOrganic } from '../Common/Logo/LogoOrganic';
import Logo from '../../assets/icons/logoOrganic.svg';
import { SelectLanguage } from './SelectLanguage/SelectLanguage';

export const Header = () => {
  return (
    <section className={style.header}>
      <Container>
        <div className={style.header_box}>
          <img src={Logo} alt="logo" className={style.logo} />
          {/* <Logo /> */}
          {/* <LogoOrganic /> */}
          <Navigation />
          <SelectLanguage />
          <button>Підтримати</button>
        </div>
      </Container>
    </section>
  );
};
