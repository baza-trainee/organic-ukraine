import { useEffect, useState } from 'react';
import arrow from '../../../assets/icons/arrow_swiper.svg';
// import arrow from '../../../../public/svg/arrow_swiper.svg';
import style from './ScrollUp.module.scss';
export const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else setIsVisible(false);
  };
  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          type="button"
          className={style.scroll_button}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src={arrow} alt="button scroll up" />
        </button>
      )}
    </>
  );
};
