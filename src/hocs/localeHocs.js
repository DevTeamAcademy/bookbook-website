import React, { Component, createContext } from 'react';
// constants
import * as GC from '../constants';
// locale
import locales from '../locale';
// /////////////////////////////////////////////////////////////////////////////////////////////////

const LocaleContext = createContext();

// TODO: set locale to storage and get from there
class LocaleProvider extends Component {
  constructor(props) {
    super(props);
    this.changeLocale = localeName => this.setState({ localeName });
    this.state = {
      locales,
      localeName: GC.LOCALE_NAME_EN,
      changeLocale: this.changeLocale,
    };
  }

  render() {
    return <LocaleContext.Provider value={this.state}>{this.props.children}</LocaleContext.Provider>;
  }
}

export const withLocaleProvider = BaseComponent => props => (
  <LocaleProvider>
    <BaseComponent {...props} />
  </LocaleProvider>
);

export const withLocale = BaseComponent => props => (
  <LocaleContext.Consumer>
    {localeState => <BaseComponent {...props} locale={localeState.locales[localeState.localeName]} />}
  </LocaleContext.Consumer>
);

export const withChangeLocale = BaseComponent => props => (
  <LocaleContext.Consumer>
    {localeState => <BaseComponent {...props} changeLocale={localeState.changeLocale} />}
  </LocaleContext.Consumer>
);
