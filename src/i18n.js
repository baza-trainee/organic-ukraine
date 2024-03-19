import i18next from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // fallbackLng: ['uk', 'uk-UA'],
    fallbackLng: ['uk'],
    // debug: true,

    ns: [
      'Header',
      'SupportTheProject',
      'ArticlesAndTips',
      'FarmLocationsMap',
      'Footer',
      'Hero',
      'OrganicGoods',
      'OurPartners',
      'WhatWeDo',
    ],

    backend: {
      loadPath: 'locales/{{lng}}/{{ns}}/translation.json',
    },
  });
