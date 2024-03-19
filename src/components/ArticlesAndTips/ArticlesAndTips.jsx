import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Container } from '../Common/Container/Container';

import arrowSwiper from '../../assets/icons/arrow_swiper.svg';

import 'swiper/css';
import 'swiper/css/navigation';

import styles from './ArticlesAndTips.module.scss';

import img1 from '../../assets/ArticlesAndTips/articleSlide3F.png';
import img2 from '../../assets/ArticlesAndTips/articleSlide2F.png';
import img3 from '../../assets/ArticlesAndTips/articleSlide1F.png';

import arrow from '../../assets/icons/arrowDown.svg';

export const ArticlesAndTips = () => {
  return (
    <section className={styles.articlesSection}>
      <Container>
        <div>
          <div className={styles.sectionHeader}>
            <h1 className={styles.sectionTitle}>Статті та поради</h1>
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
            spaceBetween={16}
            slidesPerView={2.5}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            speed={4000}
            navigation={{
              prevEl: `.${styles.customPrevButton}`,
              nextEl: `.${styles.customNextButton}`,
            }}
          >
            <div className={styles.sliders}>
              <SwiperSlide>
                <div className={styles.article}>
                  <img
                    className={styles.articleImg}
                    src={img1}
                    alt=""
                    width={496}
                    height={500}
                  />
                  <p className={styles.date}>21.02.2024</p>
                  <p className={styles.articleTitle}>
                    Як органічне сільске господарство впливає на наше середовище
                  </p>
                  <button className={styles.arrowBtn}>
                    <img src={arrow} alt="logo" className={styles.arrow}></img>
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.article}>
                  <img
                    className={styles.articleImg}
                    src={img3}
                    alt=""
                    width={496}
                    height={500}
                  />
                  <p className={styles.date}>08.02.2024</p>
                  <p className={styles.articleTitle}>
                    5 простих кроків для переходу до щоденного споживання
                    органічних продуктів
                  </p>
                  <button className={styles.arrowBtn}>
                    <img src={arrow} alt="logo" className={styles.arrow}></img>
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.article}>
                  <img
                    className={styles.articleImg}
                    src={img2}
                    alt=""
                    width={496}
                    height={500}
                  />
                  <p className={styles.date}>23.01.2024</p>
                  <p className={styles.articleTitle}>
                    Чому органічні продукти - кращий вибір для вашого здоров'я
                  </p>
                  <button className={styles.arrowBtn}>
                    <img src={arrow} alt="logo" className={styles.arrow}></img>
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.article}>
                  <img
                    className={styles.articleImg}
                    src={img1}
                    alt=""
                    width={496}
                    height={500}
                  />
                  <p className={styles.date}>21.02.2024</p>
                  <p className={styles.articleTitle}>
                    Як органічне сільске господарство впливає на наше середовище
                  </p>
                  <button className={styles.arrowBtn}>
                    <img src={arrow} alt="logo" className={styles.arrow}></img>
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.article}>
                  <img
                    className={styles.articleImg}
                    src={img3}
                    alt=""
                    width={496}
                    height={500}
                  />
                  <p className={styles.date}>08.02.2024</p>
                  <p className={styles.articleTitle}>
                    5 простих кроків для переходу до щоденного споживання
                    органічних продуктів
                  </p>
                  <button className={styles.arrowBtn}>
                    <img src={arrow} alt="logo" className={styles.arrow}></img>
                  </button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.article}>
                  <img
                    className={styles.articleImg}
                    src={img2}
                    alt=""
                    width={496}
                    height={500}
                  />
                  <p className={styles.date}>23.01.2024</p>
                  <p className={styles.articleTitle}>
                    Чому органічні продукти - кращий вибір для вашого здоров'я
                  </p>
                  <button className={styles.arrowBtn}>
                    <img src={arrow} alt="logo" className={styles.arrow}></img>
                  </button>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </Container>
    </section>
  );
};
