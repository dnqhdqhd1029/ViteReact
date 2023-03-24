import i18n, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const locale = 'en';

const options: InitOptions = {
  lng: ['zh-chs'].includes(locale) ? 'cn' : locale,
  fallbackLng: 'ko',
  backend: {
    loadPath: '/locales/{{lng}}.json',
  },
  ns: 'translation',
  defaultNS: 'translation',
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  // react i18next special options (optional)
  // override if needed - omit if ok with defaults
  react: {
    bindI18n: 'languageChanged',
    bindI18nStore: '',
    transEmptyNodeValue: '',
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'span', 'p', 'table', 'thead', 'tbody', 'tfoot', 'tr', 'td', 'th', 'h1', 'h2', 'h3', 'h4', 'h5'],
    useSuspense: true,
  },
};

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init(options);

export default i18n;
