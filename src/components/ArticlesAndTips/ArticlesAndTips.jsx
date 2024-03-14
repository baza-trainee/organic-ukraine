import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Container } from '../Common/Container/Container';

import arrowSwiper from '../../assets/icons/arrow_swiper.svg';

import 'swiper/css';
import 'swiper/css/navigation';

import styles from './ArticlesAndTips.module.scss';

import articleSlide1F from '../../assets/ArticlesAndTips/articleSlide1F.png';
import articleSlide2F from '../../assets/ArticlesAndTips/articleSlide2F.png';
import articleSlide3F from '../../assets/ArticlesAndTips/articleSlide3F.png';
import slideF from '../../assets/ArticlesAndTips/slideF.webp';
import slide2F from '../../assets/ArticlesAndTips/slide2F.webp';
import slide3F from '../../assets/ArticlesAndTips/slide3F.webp';
import arrow from '../../assets/icons/arrowDown.svg';

const articles = [
  {
    title:
      '5 простих кроків для переходу до щоденного споживання органічних продуктів',
    date: '21.02.2024',
    link: articleSlide1F,
  },
  {
    title: "Чому органічні продукти - кращий вибір для вашого здоров'я",
    date: '08.02.2024',
    link: articleSlide2F,
  },
  {
    title: 'Як органічне сільське господарство впливає на наше середовище',
    date: '23.01.2024',
    link: articleSlide3F,
  },
];

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
          slidesPerView={2.4}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={4000}
          navigation={{
            prevEl: `.${styles.customPrevButton}`,
            nextEl: `.${styles.customNextButton}`,
          }}
          className={styles.articlesSwiper}
        >
          {articles.map((article, index) => (
            <SwiperSlide key={index} className={styles.articlesSwiperSlide}>
              <a
                key={index}
                className={styles.article}
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={styles.image}
                  src={article.link}
                  alt={`Image placeholder for ${article.title}`}
                  width={486}
                  height={500}
                />

                <div className={styles.content}>
                  <div className={styles.date}>{article.date}</div>
                  <div className={styles.title}>{article.title}</div>
                  <button>
                    <img src={arrow} alt="logo" className={styles.arrow}></img>
                  </button>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};
