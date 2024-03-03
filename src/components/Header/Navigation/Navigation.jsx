import { Link } from 'react-scroll';

import css from './Navigation.module.css';

const itemsNavigation = [
  { name: 'Що ми робимо', id: 'WhatWeDo' },
  { name: 'Продукти', id: 'OrganicGoods' },
  { name: 'Статті', id: 'ArticlesAndTips' },
  { name: 'Партнери', id: 'OurPartners' },
  { name: 'Мапа господарств', id: 'FarmLocationsMap' },
  { name: 'Контакти', id: 'Footer' },
];

export const Navigation = () => {
  return (
    <nav className={css.navigation}>
      <ul className={css.list}>
        {itemsNavigation.map(({ name, id }) => (
          <li key={id}>
            <Link to={id} smooth="true" duration={500} className={css.link}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
