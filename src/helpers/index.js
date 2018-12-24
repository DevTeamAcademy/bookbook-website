import { pathOr } from 'ramda';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const getItemFromLocalStorageToken = (itemName) => localStorage.getItem(itemName);
export const setItemToLocalStorageToken = (itemName, itemValue) => localStorage.setItem(itemName, itemValue);

export const ifElse = (predicate, ifSt, elseSt) => {
  if (predicate) return ifSt;
  return elseSt;
};

export const getLocaleItem = (path, locale) => pathOr('', path, locale);
