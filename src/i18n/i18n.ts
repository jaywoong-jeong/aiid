import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import ko from './locales/ko';
import en from './locales/en';

i18n
  // 브라우저 언어 감지 사용
  .use(LanguageDetector)
  // react-i18next 초기화
  .use(initReactI18next)
  // i18n 초기화
  .init({
    resources: {
      ko: {
        translation: ko
      },
      en: {
        translation: en
      }
    },
    fallbackLng: 'ko',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false // 리액트에서는 이미 XSS 방지를 하므로
    }
  });

export default i18n;
