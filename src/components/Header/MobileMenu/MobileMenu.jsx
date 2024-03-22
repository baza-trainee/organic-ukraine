import { LogoOrganic } from '../../Common/Logo/LogoOrganic';
import { SupportTheProject } from '../../Common/SupportTheProject/SupportTheProject';
import { Navigation } from '../Navigation/Navigation';
import { SelectLanguage } from '../SelectLanguage/SelectLanguage';
import styles from './MenuStyle.module.scss';

export const MobileMenu = ({ isMenu }) => {
  const handleClickInsideMenu = e => {
    e.stopPropagation();
  };
  return (
    <div className={styles.menu_section} onClick={isMenu}>
      <div className={styles.menu} onClick={handleClickInsideMenu}>
        <div className={styles.menu_content}>
          <button
            type="button"
            onClick={isMenu}
            className={styles.close_menu}
          ></button>
          <LogoOrganic />
          <Navigation css={styles} onClick={isMenu} />
          <div className={styles.support_box}>
            <SupportTheProject />
            <SelectLanguage />
          </div>
        </div>
      </div>
    </div>
  );
};
