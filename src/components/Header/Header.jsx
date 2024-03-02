import { Container } from '../Common/Container/Container';
import { Navigation } from './Navigation';

import style from './Header.module.css';

export const Header = () => {
  return (
    <section className={style.header}>
      <Container>
        <div className={style.header_box}>
          <Navigation />
          <button>Підтримати</button>
        </div>
      </Container>
    </section>
  );
};
