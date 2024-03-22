import { useTranslation } from 'react-i18next';
import './swiperStyle.scss';
import style from './Hero.module.scss';
import heroImage1x from '../../assets/images/Hero/Hero 1X.webp';
import heroImage21x from '../../assets/images/Hero/Hero2 1x.webp';
import heroImage2x from '../../assets/images/Hero/Hero 1X.webp';
import vector from '../../assets/images/Hero/Vector.png';
import vectorTablet from '../../assets/images/Hero/VectorTablet.png';

import imageTabl1 from '../../assets/images/Hero/Hero1tablet.webp';
import imageTabl2 from '../../assets/images/Hero/Hero2tablet.webp';
import imageTabl3 from '../../assets/images/Hero/Hero1tablet.webp';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useMediaQuery } from 'react-responsive';

const banersDesctop = [heroImage1x, heroImage21x, heroImage2x];
const banersTablet = [imageTabl1, imageTabl2, imageTabl3];

export const Hero = () => {
  const { t } = useTranslation('Hero');
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1440px)',
  });
  const imagesArrey = isDesktopOrLaptop ? banersDesctop : banersTablet;
  const bottomImage = isDesktopOrLaptop ? vector : vectorTablet;
  return (
    <section className={style.hero_section}>
      <div className={style.hero_container}>
        <Swiper
          className={'swiper-first'}
          speed={2000}
          modules={[Navigation, Autoplay, Pagination]}
          navigation
          pagination={{ clickable: true }}
        >
          {imagesArrey.map((slide, index) => (
            <SwiperSlide key={index}>
              <img
                loading="lazy"
                src={slide}
                alt="organic baners"
                className={style.main_image}
                width={1440}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={style.hero_text_box}>
          <h1 className={style.main_text}>{t('H1')}</h1>
          <p className={style.second_text}>{t('paragraf')}</p>{' '}
        </div>

        <img src={bottomImage} alt="bottom" className={style.bottom_image} />
      </div>
    </section>
  );
};
