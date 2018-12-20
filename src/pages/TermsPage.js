import React from 'react';
// components
import PageLayout from './PageLayout';
// hocs
import { withLocale } from '../hocs';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const TermsPage = props => (
  <PageLayout locale={props.locale}>
    <section>{props.locale.termsAndConditions}</section>
  </PageLayout>
);

export default withLocale(TermsPage);
