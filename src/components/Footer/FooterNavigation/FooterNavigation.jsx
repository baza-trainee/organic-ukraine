import { Link } from 'react-scroll';

import styles from './FooterNavigation.module.scss';
import { useTranslation } from 'react-i18next';

const itemsNavigation = [
  { name: 'WhatWeDo' },
  { name: 'FarmLocationsMap' },
  { name: 'OrganicGoods' },
  { name: 'OurPartners' },
  { name: 'ArticlesAndTips' },
  { name: 'Footer' },
];

export const FooterNavigation = () => {
  const { t } = useTranslation('Footer');
  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        {itemsNavigation.map(({ name }) => (
          <li key={name}>
            <Link
              to={name}
              smooth="true"
              duration={500}
              className={styles.link}
            >
              {t(name)}
            </Link>
          </li>
        ))}
      </ul>
      <div  className={styles.policy}>
        <a href="./docs/Policy.pdf" target="_blank" rel="nofollow noopener noreferrer"> {t('Policy')}</a>
        <span>|</span>
        <a href="./docs/Rules.pdf" target="_blank" rel="nofollow noopener noreferrer">{t('Rules')}</a>
      </div>
    </nav>
  );
};
