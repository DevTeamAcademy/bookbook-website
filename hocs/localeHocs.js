import React, { Component, createContext } from 'react';
///////////////////////////////////////////////////////////////////////////////////////////////////

const LOCALE_NAME_EN = 'LOCALE_NAME_EN';
const LOCALE_NAME_UA = 'LOCALE_NAME_UA'; 
const LOCALE_NAME_RU = 'LOCALE_NAME_RU';
const LOCALE_NAME_PL = 'LOCALE_NAME_PL';

const locales = {
  [LOCALE_NAME_EN]: {
    name: 'bookbook content from locale in en',
  },
  [LOCALE_NAME_UA]: {
    name: 'bookbook content from locale',
  },
  [LOCALE_NAME_RU]: {
    name: 'bookbook content from locale',
  },
  [LOCALE_NAME_PL]: {
    name: 'bookbook content from locale',
  },
};

const LocaleContext = createContext();

class LocaleProvider extends Component {
  constructor(props) {
    super(props);

    this.changeLocale = (localeName) => {
      this.setState(state => {
        return {
          localeName,
        };
      });
    };

    this.state = {
      locales,
      localeName: LOCALE_NAME_EN,
      changeLocale: this.changeLocale
    };
  }

  render() {
    return (
      <LocaleContext.Provider value={this.state}>
        {this.props.children}
      </LocaleContext.Provider>
    );
  }
}

export const withLocaleProvider = (BaseComponent) => (props) => (
  <LocaleProvider>
    <BaseComponent {...props} />
  </LocaleProvider>
);

export const withLocale = (BaseComponent) => (props) => (
  <LocaleContext.Consumer>
    {(localeState) => (
        <BaseComponent {...props} locale={localeState.locales[localeState.localeName]} />
      )
    }
  </LocaleContext.Consumer>
);

// TODO: use it to change locale
export const withChangeLocale = (BaseComponent) => (props) => (
  <LocaleContext.Consumer>
    {(localeState) => (
        <BaseComponent {...props} changeLocale={localeVal.changeLocale} />
      )
    }
  </LocaleContext.Consumer>
);
