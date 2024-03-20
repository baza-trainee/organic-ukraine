import styles from './MenuStyle.module.scss';

export const MobileMenu = ({ isMenu }) => {
  return (
    <div className={styles.menu}>
      MobileMenu
      <button type="button" onClick={isMenu}>
        close
      </button>
    </div>
  );
};
