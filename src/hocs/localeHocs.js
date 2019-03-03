import React, { Component, createContext } from 'react';
// constants
import * as GC from '../constants';
import * as H from '../helpers';
// locale
import locales from '../locale';
// /////////////////////////////////////////////////////////////////////////////////////////////////

const getLocale = () => H.ifElse(
  H.isNotNilAndNotEmpty(H.getItemFromLocalStorage('localeName')),
  H.getItemFromLocalStorage('localeName'),
  GC.LOCALE_NAME_UA,
);

const LocaleContext = createContext();

class LocaleProvider extends Component {
  constructor(props) {
    super(props);
    this.changeLocale = this.changeLocale.bind(this);
    this.state = {
      locales,
      localeName: GC.LOCALE_NAME_UA,
      changeLocale: this.changeLocale,
    };
  }

  componentDidMount() {
    this.changeLocale(getLocale());
  }


  changeLocale(localeName) {
    H.setItemToLocalStorage('localeName', localeName);
    this.setState({ localeName });
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
    {localeState => <BaseComponent {...props} localeName={localeState.localeName} changeLocale={localeState.changeLocale} />}

  </LocaleContext.Consumer>
);
