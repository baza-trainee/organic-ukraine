import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

import { Container } from '../Common/Container/Container';
// import SwiperNavigation from '../Common/SwiperNavigation/SwiperNavigation';

import 'swiper/css';
import 'swiper/css/navigation';
import styles from './OrganicGoods.module.scss';

import arrowSwiper from '../../assets/icons/arrow_swiper.svg';
import partnersSlide1 from '../../assets/organic_products/berries.webp';
import partnersSlide2 from '../../assets/organic_products/blackberry.webp';
import partnersSlide3 from '../../assets/organic_products/blueberry.webp';
import partnersSlide4 from '../../assets/organic_products/cheese.webp';
import partnersSlide5 from '../../assets/organic_products/cucumber.webp';


export const OrganicGoods = () => {

  
  const { t } = useTranslation('OrganicGoods');
  
  const partnersSlides = [
    partnersSlide1,
    partnersSlide2,
    partnersSlide3,
    partnersSlide4,
    partnersSlide5,
  ];

  const repeatedPartnersSlides = partnersSlides.concat(partnersSlides);
  return (
    <section className={styles.organicProductsSection} id='OrganicGoods'>
      <Container>
        <div className={styles.organicProductsSectionHeader}>
          <h2 className={styles.organicProductsSectionTitle}> {t('OrganicGoods')}</h2>
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
          modules={[Navigation, EffectCoverflow]}
          spaceBetween={30}
          slidesPerView={3.4}
          loop={true}
          effect="coverflow"
          coverflowEffect={{
            rotate: 15,
            depth: 100,
            modifier: 0.7,
            slideShadows: false,
            stretch: 5,
             centeredSlides: true,
            // shadowOffset: 100,
          }}
          // autoplay={{ delay: 3000, disableOnInteraction: false}}
          speed={1500}
          navigation={{
            prevEl: `.${styles.customPrevButton}`,
            nextEl: `.${styles.customNextButton}`,
          }}
          className={styles.organicProductsSwiper}
        >
          {repeatedPartnersSlides.map((slide, index) => (
            <SwiperSlide key={index} className={styles.organicProductsSwiperSlide}>
              <img src={slide} alt="organic partners" />
              <div className={styles.organicProductsSwiperSlideWrapper}>
                <h3 className={styles.organicProductsSwiperSlideTitle}>{t(`Category.${index}`)}</h3>
              <p className={styles.organicProductsSwiperSlideDescription}>{t(`Description.${index}`)}</p>
              <p className={styles.organicProductsSwiperSlideQuality}>{t('Quality')}</p>
              </div>
              
            </SwiperSlide>
          ))}
           
        </Swiper>
        <Swiper
          modules={[Navigation]}
          spaceBetween={15}
          slidesPerView={3.3}
          loop={true}
          // autoplay={{ delay: 3000, disableOnInteraction: false}}
          speed={1500}
          navigation={{
            prevEl: `.${styles.customPrevButton}`,
            nextEl: `.${styles.customNextButton}`,
          }}
          className={styles.organicProductsSwiper}
        >
          {repeatedPartnersSlides.map((slide, index) => (
            <SwiperSlide key={index} className={styles.organicProductsSwiperSlide}>
              <img src={slide} alt="organic partners" />
              <div className={styles.organicProductsSwiperSlideWrapper}>
                <h3 className={styles.organicProductsSwiperSlideTitle}>{t(`Category.${index}`)}</h3>
              <p className={styles.organicProductsSwiperSlideDescription}>{t(`Description.${index}`)}</p>
              <p className={styles.organicProductsSwiperSlideQuality}>{t('Quality')}</p>
              </div>
            </SwiperSlide>
          ))}
           
        </Swiper>
      </Container>
    </section>
  );
};
