import { Link } from 'react-scroll';

// import style from './HeaderNavigation.module.scss';
import { useTranslation } from 'react-i18next';

const itemsNavigation = [
  { name: 'WhatWeDo' },
  { name: 'OrganicGoods' },
  { name: 'ArticlesAndTips' },
  { name: 'FarmLocationsMap' },
  { name: 'OurPartners' },
  { name: 'Footer' },
];

export const Navigation = ({ css }) => {
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
