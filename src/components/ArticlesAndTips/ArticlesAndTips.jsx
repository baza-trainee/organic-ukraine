import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Container } from '../Common/Container/Container';

import arrowSwiper from '../../assets/icons/arrow_swiper.svg';

import 'swiper/css';
import 'swiper/css/navigation';

import styles from "./ArticlesAndTips.module.scss"
import { render } from "react-dom";




export const ArticlesAndTips = () => {
  return (
  <section className={styles.articlesSection}>
    <Container>
      <div className={styles.articlesSectionHeader}>
        <h2 className={styles.articlesSectionTitle}>Статті та поради</h2>
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
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={4000}
        navigation={{
          prevEl: `.${styles.customPrevButton}`,
          nextEl: `.${styles.customNextButton}`,
        }}
        className={styles.articlesSwiper}
      >
        {/* {repeatedPartnersSlides.map((slide, index) => (
          <SwiperSlide key={index} className={styles.articlesSwiperSlide}>
            <img src={slide} alt="organic partners" />
          </SwiperSlide>
        ))} */}
      </Swiper>
    </Container>
  </section>
)};

