import * as H from '..';

it('Testing locale has a value', () => {
  const test = {
    path: ['key1', 'key2'],
    path2: ['key1', 'key3'],
    locale: { key1: { key2: 'locale' } },
  };
  expect(H.getLocaleItem(test.path, test.locale)).toEqual('locale');
  expect(H.getLocaleItem(test.path2, test.locale)).toEqual('');
});

it('isTrue should check value is equals true', () => {
  expect(H.isTrue(true)).toEqual(true);
  expect(H.isTrue(false)).toEqual(false);
  expect(H.isTrue('true')).toEqual(false);
  expect(H.isTrue({})).toEqual(false);
  expect(H.isTrue([])).toEqual(false);
});

it('isFalse should check value is equals true', () => {
  expect(H.isFalse(false)).toEqual(true);
  expect(H.isFalse(true)).toEqual(false);
  expect(H.isFalse('true')).toEqual(false);
  expect(H.isFalse({})).toEqual(false);
  expect(H.isFalse([])).toEqual(false);
});
