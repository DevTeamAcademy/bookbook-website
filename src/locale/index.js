// constants
import * as GC from '../constants';
// /////////////////////////////////////////////////////////////////////////////////////////////////

const UA = {
  email: 'Емейл',
  home: 'домашня',
  send: 'Надіслати',
  yourName: 'Ім\'я',
  details: 'Деталі',
  aboutUs: 'про нас',
  contacts: 'Контакти',
  contactUs: 'Контакти',
  phoneNumber: 'Телефон',
  attachFile: 'Додати файл',
  privacyPolicy: 'політика приватності',
  copyright: '2018 © Всі права захищено',
  termsAndConditions: 'умови використання',
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
  errorMessages: {
    yourName: 'Будь ласка, введіть існуюче ім`я',
    email: 'Електронна адреса невірна',
    phoneNumber: 'Номер невірний',
  },
  actions: {
    openBookbook: 'Відкрити @bookbook',
  },
};

const EN = {
  home: 'home',
  send: 'Send',
  email: 'Email',
  yourName: 'Name',
  details: 'Details',
  aboutUs: 'about us',
  contacts: 'contacts',
  contactUs: 'Contact Us',
  attachFile: 'Attach File',
  phoneNumber: 'Phone Number',
  privacyPolicy: 'privacy policy',
  copyright: '2018 © All rights reserved',
  termsAndConditions: 'terms and conditions',
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
  errorMessages: {
    yourName: 'Please, enter a valid name',
    email: 'Please, enter a valid email',
    phoneNumber: 'Please, enter a valid phone number',
  },
  actions: {
    openBookbook: 'Open @bookbook',
  },
};

const RU = {
  home: 'home',
  send: 'Send',
  email: 'Email',
  yourName: 'Name',
  details: 'Details',
  aboutUs: 'about us',
  contacts: 'contacts',
  contactUs: 'Contact Us',
  attachFile: 'Attach File',
  phoneNumber: 'Phone Number',
  privacyPolicy: 'privacy policy',
  copyright: '2018 © All rights reserved',
  termsAndConditions: 'terms and conditions',
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
  errorMessages: {
    yourName: 'Please, enter a valid name RU',
    email: 'Please, enter a valid email RU',
    phoneNumber: 'Please, enter a valid phone number RU',
  },
  actions: {
    openBookbook: 'Open @bookbook',
  },
};

const PL = {
  home: 'home',
  send: 'Send',
  email: 'Email',
  yourName: 'Name',
  details: 'Details',
  aboutUs: 'about us',
  contacts: 'contacts',
  contactUs: 'Contact Us',
  attachFile: 'Attach File',
  phoneNumber: 'Phone Number',
  privacyPolicy: 'privacy policy',
  copyright: '2018 © All rights reserved',
  termsAndConditions: 'terms and conditions',
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
  errorMessages: {
    yourName: 'Please, enter a valid name PL',
    email: 'Please, enter a valid email PL',
    phoneNumber: 'Please, enter a valid phone number PL',
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
