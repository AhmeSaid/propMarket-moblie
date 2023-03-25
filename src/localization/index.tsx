import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {en} from './languages/en';
import {ar} from './languages/ar';

const resources = {
  en,
  ar,
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'ar',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
