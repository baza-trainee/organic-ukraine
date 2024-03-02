import { Link } from 'react-scroll';

import css from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav>
      <ul className={css.list}>
        <li>
          <Link to="WhatWeDo" smooth="true" duration={500} className={css.link}>
            Що ми робимо
          </Link>
        </li>
        <li>
          <Link
            to="OrganicGoods"
            smooth="true"
            duration={500}
            className={css.link}
          >
            Продукти
          </Link>
        </li>
        <li>
          <Link
            to="ArticlesAndTips"
            smooth="true"
            duration={500}
            className={css.link}
          >
            Статті
          </Link>
        </li>
        <li>
          <Link
            to="OurPartners"
            smooth="true"
            duration={500}
            className={css.link}
          >
            Партнери
          </Link>
        </li>
        <li>
          <Link
            to="FarmLocationsMap"
            smooth="true"
            duration={500}
            className={css.link}
          >
            Мапа господарств
          </Link>
        </li>
        <li>
          <Link to="Footer" smooth="true" duration={500} className={css.link}>
            Контакти
          </Link>
        </li>
      </ul>
    </nav>
  );
};
