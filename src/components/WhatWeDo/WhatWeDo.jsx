import React from 'react';

import css from './WhatWeDo.module.css';
import { Container } from '../Common/Container/Container';

const stats = [
  { value: '53+', label: 'господарств' },
  { value: '221+', label: 'земель' },
  { value: '3770+', label: 'працівників' },
];

const images = [
  {
    src: '',
    alt: '',
  },
  {
    src: '',
    alt: '',
  },
  {
    src: '',
    alt: '',
  },
  {
    src: '',
    alt: '',
  },
  {
    src: '',
    alt: '',
  },
  {
    src: '',
    alt: '',
  },
  {
    src: '',
    alt: '',
  },
  {
    src: '',
    alt: '',
  },
  {
    src: '',
    alt: '',
  },
  {
    src: '',
    alt: '',
  },
  {
    src: '',
    alt: '',
  },
  {
    src: '',
    alt: '',
  },
  {
    src: '',
    alt: '',
  },
  {
    src: '',
    alt: '',
  },
  {
    src: '',
    alt: '',
  },
  {
    src: '',
    alt: '',
  },
];

export const WhatWeDo = () => {
  return (
    <section>
      <Container>
        <div className={css.container}>
          <div className={css.section_header}>
            <h2 className={css.main_title}>Що ми робимо</h2>
            <p className={css.section_title}>
              Сприяючи здоров'ю та природі: передові органічні виробники в серці
              України
            </p>
            <p className={css.section_text}>
              Органічні виробництва в Україні відіграють ключову роль у
              створенні здорового та екологічно чистого продовольчого ланцюга.
              Їх діяльність фокусується на вирощуванні продуктів без
              використання хімічних добрив та пестицидів, з використанням
              природних методів обробки ґрунту.
            </p>
            <button className={css.read_button}>Читати більше</button>

            <div className={css.stats_container}>
              {stats.map((stat, index) => (
                <div className={css.stat} key={index}>
                  <img
                    src={`https://placehold.co/100`}
                    alt={`Placeholder for ${stat.label}`}
                  />
                  <span className={css.stat_value}>{stat.value}</span>
                  <span className={css.stat_label}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={css.images_container}>
            {images.map((image, index) => (
              <div className={css.image} key={index}>
                <img
                  className={css.image_item}
                  src={image.imageUrl || `https://placehold.co/100`}
                  alt={image.name}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
