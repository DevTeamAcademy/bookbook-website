import { withState } from 'recompose';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export { withGlobalStyles } from './withGlobalStyles';
export { withLocaleProvider } from './localeHocs';
export { withLocale } from './localeHocs';
export { withChangeLocale } from './localeHocs';
export { withPageHead } from './withPageHead';
export { withThemeProvider } from './withThemeProvider';
export { withTickyText } from './withTickyText';

export const withHoveredStatus = withState('hovered', 'setHoveredStatus', false);
export const withOpenedStatus = withState('opened', 'toggleOpenedStatus', false);
