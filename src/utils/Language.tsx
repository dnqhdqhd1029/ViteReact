import { useState, useEffect } from 'react';

const Language = () => {
  const [locale] = useState('en');
  const getResource = async () => {
    return await fetch(`/locales/${locale}-translation.json`).then((res) => console.log(res.json()));
  };
  useEffect(() => {
    getResource();
    /*if (resources) {
      const options: InitOptions = {
        lng: ['zh-chs'].includes(locale) ? 'cn' : locale,
        fallbackLng: 'ko',
        resources,
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
    }*/
  }, [locale]);

  return <></>;
};

export default Language;
