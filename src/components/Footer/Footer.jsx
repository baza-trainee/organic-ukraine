import { LogoOrganic } from '../Common/Logo/LogoOrganic';

import Facebook from '../../assets/icons/facebook.svg?react';
import Linkedin from '../../assets/icons/linkedin.svg?react';
import Instagram from '../../assets/icons/instagram.svg?react';
import Telegram from '../../assets/icons/telegram.svg?react';
import { useTranslation } from 'react-i18next';

import styles from './Footer.module.scss';
import { SupportTheProject } from '../Common/SupportTheProject/SupportTheProject';
import { FooterNavigation } from './FooterNavigation/FooterNavigation';

export const Footer = () => {

  const { t } = useTranslation('Footer');

  return (
    <div>
      <footer id='Footer' className={styles.footer}>
          <div className={styles.footerLogoSocials}>
            <LogoOrganic />
            <div className={styles.footerSocials}>
              <Facebook className={styles.social} />
              <Linkedin className={styles.social} />
              <Instagram className={styles.social} />
              <Telegram className={styles.social} />
            </div>
          </div>
          <div className={styles.footerNavigation}>
            <FooterNavigation />
            <p> {t('Develop')} </p>
            <p> {t('Rights')} </p>
          </div>
          <div className={styles.footerContacts}>
            <SupportTheProject />
            <address className={styles.contacts}>
              <ul>
                <li className={styles.phone}><a href="tel:+380636286630">+380 63 628 66 30</a></li>
                <li className={styles.phone}><a href="tel:+380675681788">+380 67 568 17 88</a></li>
                <li className={styles.email}><a href="mailto:info@baza-trainee.tech">info@baza-trainee.tech</a></li>
              </ul>
            </address>
            
          </div>
       </footer>
    </div>
  );
};
