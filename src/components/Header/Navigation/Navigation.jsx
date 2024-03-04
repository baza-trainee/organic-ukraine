import { Link } from 'react-scroll';

import css from './Navigation.module.scss';
import { useTranslation } from 'react-i18next';

const itemsNavigation = [
  { name: 'WhatWeDo' },
  { name: 'OrganicGoods' },
  { name: 'ArticlesAndTips' },
  { name: 'OurPartners' },
  { name: 'FarmLocationsMap' },
  { name: 'Footer' },
];

export const Navigation = () => {
  const { t } = useTranslation('Header');
  return (
    <nav className={css.navigation}>
      <ul className={css.list}>
        {itemsNavigation.map(({ name }) => (
          <li key={name}>
            <Link to={name} smooth="true" duration={500} className={css.link}>
              {t(name)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
