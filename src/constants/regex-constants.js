export const EMAIL_REGEX = new RegExp([
  '^(([^<>()\\[\\]\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\.,;:\\s@"]+)*)|',
  '/(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|',
  '(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
].join(''));
export const PHONE_NUMBER_REGEX = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
export const USER_NAME_REGEX = /^.{2,}$/;
