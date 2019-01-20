import * as H from '..';

describe('/helpers', () => {
  test('Testing locale has a value', () => {
    const test = {
      path: ['key1', 'key2'],
      locale: { key1: { key2: 'locale' } },
    };
    expect(H.getLocaleItem(test.path, test.locale)).toBe('locale');
  });
  test('Testing locale does not have a value', () => {
    const test = {
      path: ['key1', 'key3'],
      locale: { key1: { key2: 'locale' } },
    };
    expect(H.getLocaleItem(test.path, test.locale)).toBe('');
  });
});
