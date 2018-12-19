import React from 'react';
// components
import PageLayout from './PageLayout';
// hocs
import { withLocale } from '../hocs';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const AboutPage = props => (
  <PageLayout locale={props.locale}>
    <section>{props.locale.aboutUs}</section>
  </PageLayout>
);

export default withLocale(AboutPage);
