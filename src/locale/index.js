// constants
import * as GC from '../constants';
// /////////////////////////////////////////////////////////////////////////////////////////////////

const UA = {
  home: 'домашня',
  aboutUs: 'про нас',
  contacts: 'контакти',
  termsAndConditions: 'Терміни та умови',
  privacyPolicy: 'Політика приватності',
  copyright: 'Copyrights 2019 @bookbook',
  languages: [
    {
      localeName: GC.LOCALE_NAME_EN,
      value: 'English',
    },
    {
      localeName: GC.LOCALE_NAME_UA,
      value: 'Українська',
    },
    {
      localeName: GC.LOCALE_NAME_RU,
      value: 'Русский',
    },
    {
      localeName: GC.LOCALE_NAME_PL,
      value: 'Polski',
    },
  ],
  mainPage: {
    mainSectionFirstText: 'Отримайте новий досвід читання!',
    mainSectionSecondText: `
      @bookbook - платформа, яка дозволяє
      не тільки зберегти та поширити
      прочитане... :)
    `,
  },
  actions: {
    openBookbook: 'Відкрити @bookbook',
  },
};

const EN = {
  home: 'home',
  aboutUs: 'about us',
  contacts: 'contacts',
  termsAndConditions: 'Terms and Conditions',
  privacyPolicy: 'Pivacy Policy',
  copyright: '2018 © All rights reserved',
  languages: [
    {
      localeName: GC.LOCALE_NAME_EN,
      value: 'English',
    },
    {
      localeName: GC.LOCALE_NAME_UA,
      value: 'Українська',
    },
    {
      localeName: GC.LOCALE_NAME_RU,
      value: 'Русский',
    },
    {
      localeName: GC.LOCALE_NAME_PL,
      value: 'Polski',
    },
  ],
  mainPage: {
    mainSectionFirstText: 'Get a new reading experience!',
    mainSectionSecondText: `
      @bookbook - platform that allows you not only
      to save and distribute the read... :)
    `,
  },
  actions: {
    openBookbook: 'Open @bookbook',
  },
};

const RU = {
  home: 'home',
  aboutUs: 'about us',
  contacts: 'contacts',
  termsAndConditions: 'terms and conditions',
  privacyPolicy: 'privacy policy',
  copyright: '2018 © All rights reserved',
  languages: [
    {
      localeName: GC.LOCALE_NAME_EN,
      value: 'English',
    },
    {
      localeName: GC.LOCALE_NAME_UA,
      value: 'Українська',
    },
    {
      localeName: GC.LOCALE_NAME_RU,
      value: 'Русский',
    },
    {
      localeName: GC.LOCALE_NAME_PL,
      value: 'Polski',
    },
  ],
  mainPage: {
    mainSectionFirstText: 'Get a new reading experience!',
    mainSectionSecondText: `
      @bookbook - platform that allows you not only
      to save and distribute the read... :)
    `,
  },
  actions: {
    openBookbook: 'Open @bookbook',
  },
};

const PL = {
  home: 'home',
  aboutUs: 'about us',
  contacts: 'contacts',
  termsAndConditions: 'Terms and Conditions',
  privacyPolicy: 'Privacy policy',
  copyright: '2018 © All rights reserved',
  languages: [
    {
      localeName: GC.LOCALE_NAME_EN,
      value: 'English',
    },
    {
      localeName: GC.LOCALE_NAME_UA,
      value: 'Українська',
    },
    {
      localeName: GC.LOCALE_NAME_RU,
      value: 'Русский',
    },
    {
      localeName: GC.LOCALE_NAME_PL,
      value: 'Polski',
    },
  ],
  mainPage: {
    mainSectionFirstText: 'Get a new reading experience!',
    mainSectionSecondText: `
      @bookbook - platform that allows you not only
      to save and distribute the read... :)
    `,
  },
  actions: {
    openBookbook: 'Open @bookbook',
  },
};

// TODO: with all locale and translations
const locales = {
  [GC.LOCALE_NAME_UA]: UA,
  [GC.LOCALE_NAME_EN]: EN,
  [GC.LOCALE_NAME_RU]: RU,
  [GC.LOCALE_NAME_PL]: PL,
};

export default locales;
