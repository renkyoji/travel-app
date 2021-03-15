import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import EN from './locales/en.json';
import RU from './locales/ru.json';
import DE from './locales/de.json';

const resources = {
    en: {
        translation: EN
    },
    ru: {
        translation: RU
    },
    de: {
        translation: DE
    }
};
i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "de",

        keySeparator: false,

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;