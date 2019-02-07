// constants
import * as GC from '../constants';
// /////////////////////////////////////////////////////////////////////////////////////////////////

const UA = {
  email: 'Емейл',
  home: 'Домашня',
  send: 'Надіслати',
  name: 'Ім\'я',
  message: 'Деталі',
  aboutUs: 'Про нас',
  contacts: 'Контакти',
  contactUs: 'Контакти',
  phoneNumber: 'Телефон',
  attachFile: 'Додати файл',
  copyright: '2019 © Всі права захищено',
  termsAndConditions: 'Умови використання',
  privacyPolicy: 'Політика конфіденційності',
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
  successMessages: {
    contactDataSent: 'Ваші дані успішно надіслано',
  },
  errorMessages: {
    phoneNumber: 'Номер невірний',
    email: 'Електронна адреса невірна',
    name: 'Будь ласка, введіть існуюче ім`я',
  },
  actions: {
    openBookbook: 'Відкрити @bookbook',
  },
};

const EN = {
  home: 'Home',
  send: 'Send',
  email: 'Email',
  name: 'Name',
  message: 'Details',
  aboutUs: 'About us',
  contacts: 'Contacts',
  contactUs: 'Contact Us',
  attachFile: 'Attach File',
  phoneNumber: 'Phone Number',
  privacyPolicy: 'Privacy policy',
  copyright: '2019 © All rights reserved',
  termsAndConditions: 'Terms and conditions',
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
  successMessages: {
    contactDataSent: 'Ваші дані успішно надіслано EN',
  },
  errorMessages: {
    email: 'Please, enter a valid email',
    name: 'Please, enter a valid name',
    phoneNumber: 'Please, enter a valid phone number',
  },
  actions: {
    openBookbook: 'Open @bookbook',
  },
};

const RU = {
  home: 'Home',
  send: 'Send',
  email: 'Email',
  name: 'Name',
  message: 'Details',
  aboutUs: 'About us',
  contacts: 'Contacts',
  contactUs: 'Contact Us',
  attachFile: 'Attach File',
  phoneNumber: 'Phone Number',
  privacyPolicy: 'Privacy policy',
  copyright: '2019 © All rights reserved',
  termsAndConditions: 'Terms and conditions',
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
  successMessages: {
    contactDataSent: 'Ваші дані успішно надіслано RU',
  },
  errorMessages: {
    email: 'Please, enter a valid email RU',
    name: 'Please, enter a valid name RU',
    phoneNumber: 'Please, enter a valid phone number RU',
  },
  actions: {
    openBookbook: 'Open @bookbook',
  },
};

const PL = {
  home: 'Home',
  send: 'Send',
  email: 'Email',
  name: 'Name',
  message: 'Details',
  aboutUs: 'About us',
  contacts: 'Contacts',
  contactUs: 'Contact Us',
  attachFile: 'Attach File',
  phoneNumber: 'Phone Number',
  privacyPolicy: 'Privacy policy',
  copyright: '2019 © All rights reserved',
  termsAndConditions: 'Terms and conditions',
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
  successMessages: {
    contactDataSent: 'Ваші дані успішно надіслано PL',
  },
  errorMessages: {
    email: 'Please, enter a valid email PL',
    name: 'Please, enter a valid name PL',
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
