import React from 'react';

import css from './WhatWeDo.module.css';

import { Container } from '../Common/Container/Container';

import stats from '../WhatWeDo/StatsWhatWeDo.jsx';
import images from '../WhatWeDo/ImagesWhatWeDo.jsx';
import { useTranslation } from 'react-i18next';

export const WhatWeDo = () => {
  const { t } = useTranslation('WhatWeDo');
  return (
    <section>
      <Container>
        <div className={css.container}>
          <div className={css.section_header}>
            <h2 className={css.main_title}>{t('WhatWeDo')}</h2>
            <p className={css.section_title}>{t('BoldText')}</p>
            <p className={css.section_text}>{t('Text')}</p>
            <button className={css.read_button}>{t("Button") }</button>

            <div className={css.stats_container}>
              {stats.map((stat, index, img, alt) => (
                <div className={css.stat} key={index}>
                  <img
                    className={css.stats_img}
                    src={stat.img}
                    alt={stat.alt}
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
                  src={image.src || `https://placehold.co/100`}
                  alt={image.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
