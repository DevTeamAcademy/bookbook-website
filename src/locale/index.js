// constants
import * as GC from '../constants';
// /////////////////////////////////////////////////////////////////////////////////////////////////

const UA = {
  home: 'домашня',
  aboutUs: 'про нас',
  contacts: 'контакти',
  textTerms: 'приклад. По прошению вольноприходящего ученика Академии Тараса Шевченко (по входящей книге № 386). Определено: Поелику Шевченко известен Совету по своим работам и награжден уже за успехи в живописи серебряною медалью 2-го достоинства, то удостоить его звания неклассного художника и представить на утверждение общему собранию Академии',
  termsAndConditions: 'наша команда',
  textHeadline: 'наша команда',
  privacyPolicy: 'політика приватності',
  copyright: '2018 © Всі права захищено',
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
  textTerms: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  termsAndConditions: 'terms and conditions',
  textHeadline: 'terms and conditions',
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

const RU = {
  home: 'home',
  aboutUs: 'about us',
  contacts: 'contacts',
  termsAndConditions: 'terms and conditions',
  privacyPolicy: 'privacy policy',
  textHeadline: 'terms and conditions',
  textTerms: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
  termsAndConditions: 'terms and conditions',
  privacyPolicy: 'privacy policy',
  textHeadline: 'terms and conditions',
  textTerms: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  
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
