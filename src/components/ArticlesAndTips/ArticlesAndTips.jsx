import React, { useEffect, useState } from 'react';

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
import articleImgOne from '../../assets/ArticlesAndTips/firstModalArticle.png';
import articleImgTwo from '../../assets/ArticlesAndTips/secondModalArticle.png';
import articleImgThree from '../../assets/ArticlesAndTips/thirdModalArticle.png';

import arrow from '../../assets/icons/arrowDown.svg';
import Modal from './ArticlesModal';

const firstArticle = {
  img: articleImgOne,
  title: 'Як органічне сільське господарство впливає на наше середовище',
  content:
    'Органічне сільське господарство відіграє важливу роль у збереженні нашого середовища та створенні стійкого агрокультурного екосистеми. По-перше, воно відмовляється від використання синтетичних хімічних добрив та пестицидів, що сприяє запобіганню забрудненню ґрунту та водних ресурсів. Органічне сільське господарство також сприяє збереженню біорізноманіття. Заборона використання генетично модифікованих організмів та практика висіву різноманітних культур допомагає створювати стійкі екосистеми, які підтримують природний цикл життя рослин та тварин. Крім того, органічні ферми сприяють сталому управлінню природними ресурсами, використовуючи методи обробки ґрунту та системи зрошення, які зменшують витрати води та мінімізують викиди шкідливих речовин в атмосферу. Вибір органічних продуктів підтримує ці екологічно дружні практики, сприяючи сталому сільському господарству та збереженню природних ресурсів для майбутніх поколінь.',
  date: '21.02.2024',
};
const secondArticle = {
  img: articleImgTwo,
  title:
    '5 простих кроків для переходу до щоденного споживання органічних продуктів',
  content:
    "Щоденне споживання органічних продуктів стає не тільки тенденцією, але і здоровим вибором для вашого тіла та довкілля. Ось кілька простих кроків, які допоможуть вам легко впровадити органічні продукти у вашу щоденну дієту: Поступовий Перехід: Почніть заміну звичайних продуктів на їхні органічні аналоги поступово. Це дозволить вам пристосуватися до нового стилю харчування без раптових змін. Місцеві Ринки та Фермерські Крамниці: Відвідайте місцеві ринки та фермерські крамниці, де часто можна знайти свіжі та місцеві органічні продукти. Звертайте Увагу на Ярлики: Органічні продукти мають спеціальні ярлики чи сертифікати, які їхньою наявністю підтверджують. Приділяйте увагу придбанню продуктів з відповідними маркуваннями. Самостійне Вирощування: Розгляньте можливість вирощування власних овочів та фруктів. Це не тільки заощадження, але і гарантія їхньої якості. Збалансоване Харчування: Органічні продукти - це не лише овочі та фрукти. Додайте до свого раціону органічні м'ясні продукти, молоко та інші органічні складові для повноцінного харчування. Вибір органічних продуктів може стати природнім та корисним кроком для покращення вашого здоров'я та внесення позитивного внеску в екологічну ситуацію.",
  date: '08.02.2024',
};
const thirdArticle = {
  img: articleImgThree,
  title: "Чому органічні продукти - кращий вибір для вашого здоров'я",
  content:
    "Органічні продукти стають не просто модою, але розумним та відповідальним вибором для тих, хто прагне зберегти та поліпшити своє здоров'я. Їх відмінна якість та корисні властивості базуються на унікальних принципах вирощування та виробництва, які здатні забезпечити оптимальне функціонування вашого організму. Переваги органічних продуктів починаються з їхнього вирощування. Вони не піддаються впливу синтетичних хімічних добрив чи пестицидів, що робить їх вільними від залишків шкідливих речовин. Це особливо важливо для тих, хто стурбований можливими негативними впливами хімічних речовин на своє здоров'я. Органічні продукти мають вищий рівень поживних речовин, таких як вітаміни, мінерали та антиоксиданти. Вони сприяють підтримці імунітету, нормалізації роботи органів та систем організму. Крім того, вони не містять штучних добавок, барвників чи консервантів, що може позитивно впливати на тих, хто страждає на алергії чи інші чутливості. Обираючи органічні продукти, ви не лише зберігаєте своє здоров'я, але й підтримуєте стале та екологічно чисте сільське господарство. Це - вклад у власний благополуччя та довкілля, що робить органічні продукти не лише смачними, але й мудрим вибором для кожного.",
  date: '23.01.2024',
};

export const ArticlesAndTips = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    img: '',
    title: '',
    content: '',
    date: '',
  });
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  const openModal = (img, title, content, date) => {
    setModalContent({ img, title, content, date });
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };

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
                  <button
                    className={styles.arrowBtn}
                    onClick={() =>
                      openModal(
                        firstArticle.img,
                        firstArticle.title,
                        firstArticle.content,
                        firstArticle.date
                      )
                    }
                  >
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
                  <button
                    className={styles.arrowBtn}
                    onClick={() =>
                      openModal(
                        secondArticle.img,
                        secondArticle.title,
                        secondArticle.content,
                        secondArticle.date
                      )
                    }
                  >
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
                  <button
                    className={styles.arrowBtn}
                    onClick={() =>
                      openModal(
                        thirdArticle.img,
                        thirdArticle.title,
                        thirdArticle.content,
                        thirdArticle.date
                      )
                    }
                  >
                    <img src={arrow} alt="logo" className={styles.arrow}></img>
                  </button>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </Container>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        img={modalContent.img}
        title={modalContent.title}
        content={modalContent.content}
        date={modalContent.date}
      />
    </section>
  );
};
