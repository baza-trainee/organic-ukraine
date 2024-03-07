import React from 'react';

import css from './WhatWeDo.module.css';

import { Container } from '../Common/Container/Container';


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
            <button className={css.read_button}>{t('Button')}</button>

            <div className={css.stats_container}>
              <div className={css.stat}>
                <img
                  className={css.stats_img}
                  src="./src/assets/WhatWeDo/farms.png"
                  alt="farms"
                />
                <span className={css.stat_value}>53</span>
                <span className={css.stat_label}>{t('Farms')}</span>
              </div>
              <div className={css.stat}>
                <img
                  className={css.stats_img}
                  src="./src/assets/WhatWeDo/lands.png"
                  alt="farms"
                />
                <span className={css.stat_value}>221</span>
                <span className={css.stat_label}>{t('Lands')}</span>
              </div>
              <div className={css.stat}>
                <img
                  className={css.stats_img}
                  src="./src/assets/WhatWeDo/workers.png"
                  alt="farms"
                />
                <span className={css.stat_value}>3770</span>
                <span className={css.stat_label}>{t('Workers')}</span>
              </div>
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

