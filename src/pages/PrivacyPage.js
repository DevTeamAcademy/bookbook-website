import React from 'react';
// components
import PageLayout from './PageLayout';
// hocs
import { withLocale } from '../hocs';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const PrivacyPage = props => (
  <PageLayout locale={props.locale}>
    <section>{props.locale.privacyPolicy}</section>
  </PageLayout>
);

export default withLocale(PrivacyPage);
