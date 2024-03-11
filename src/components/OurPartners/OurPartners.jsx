import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Container } from '../Common/Container/Container';
import { useTranslation } from 'react-i18next';
// import SwiperNavigation from '../Common/SwiperNavigation/SwiperNavigation';

import 'swiper/css';
import 'swiper/css/navigation';
import styles from './OurPartners.module.scss';

import arrowSwiper from '../../assets/icons/arrow_swiper.svg';
import partnersSlide1 from '../../assets/ourPartners/partners_slide1.webp';
import partnersSlide2 from '../../assets/ourPartners/partners_slide2.webp';
import partnersSlide3 from '../../assets/ourPartners/partners_slide3.webp';
import partnersSlide4 from '../../assets/ourPartners/partners_slide4.webp';
import partnersSlide5 from '../../assets/ourPartners/partners_slide5.webp';

export const OurPartners = () => {

  const { t } = useTranslation('OurPartners');
  
  const partnersSlides = [
    partnersSlide1,
    partnersSlide2,
    partnersSlide3,
    partnersSlide4,
    partnersSlide5,
  ];

  const repeatedPartnersSlides = partnersSlides.concat(partnersSlides);

  return (
    <section className={styles.partnersSection} id='OurPartners'>
      <Container>
        <div className={styles.partnersSectionHeader}>
          <h2 className={styles.partnersSectionTitle}> {t('OurPartners')}</h2>
          {/* <SwiperNavigation
            customPrevButton={styles.customPrevButton}
            customNextButton={styles.customNextButton}
            customNavigationBlock={styles.customNavigationBlock}
          /> */}
          <div className={styles.customNavigationBlock}>
            <div className={styles.customPrevButton}>
              <img src={arrowSwiper} alt="Arrow left" />
            </div>
            <div className={styles.customNextButton}>
              <img src={arrowSwiper} alt="Arrow right" />
            </div>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={8}
          slidesPerView={5.2}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false}}
          speed={4000}
          navigation={{
            prevEl: `.${styles.customPrevButton}`,
            nextEl: `.${styles.customNextButton}`,
          }}
          className={styles.partnersSwiper}
        >
          {repeatedPartnersSlides.map((slide, index) => (
            <SwiperSlide key={index} className={styles.partnersSwiperSlide}>
              <img src={slide} alt="organic partners" />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};
