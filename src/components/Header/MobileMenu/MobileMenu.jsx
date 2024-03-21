import styles from './MenuStyle.module.css';

export const MobileMenu = ({ isMenu }) => {
  return (
    <div className={styles.menu_section}>
      <div className={styles.menu}>
        MobileMenu
        <button type="button" onClick={isMenu} className={styles.close_menu}>
          close
        </button>
      </div>
    </div>
  );
};
