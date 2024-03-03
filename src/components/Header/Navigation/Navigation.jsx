import { Link } from 'react-scroll';

import css from './Navigation.module.css';
import { useTranslation } from 'react-i18next';

const itemsNavigation = [
  { name: 'WhatWeDo', id: 'WhatWeDo' },
  { name: 'OrganicGoods', id: 'OrganicGoods' },
  { name: 'ArticlesAndTips', id: 'ArticlesAndTips' },
  { name: 'OurPartners', id: 'OurPartners' },
  { name: 'FarmLocationsMap', id: 'FarmLocationsMap' },
  { name: 'Footer', id: 'Footer' },
];
// const itemsNavigation = [
//   { name: 'Що ми робимо', id: 'WhatWeDo' },
//   { name: 'Продукти', id: 'OrganicGoods' },
//   { name: 'Статті', id: 'ArticlesAndTips' },
//   { name: 'Партнери', id: 'OurPartners' },
//   { name: 'Мапа господарств', id: 'FarmLocationsMap' },
//   { name: 'Контакти', id: 'Footer' },
// ];

export const Navigation = () => {
  const { t } = useTranslation('Header');
  return (
    <nav className={css.navigation}>
      <ul className={css.list}>
        {itemsNavigation.map(({ name, id }) => (
          <li key={id}>
            <Link to={id} smooth="true" duration={500} className={css.link}>
              {/* {name} */}
              {t(name)} {/* Translate the name using t function */}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
