import React from 'react';
// components
import PageLayout from './PageLayout';
// hocs
import { withLocale } from '../hocs';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const ContactPage = props => (
  <PageLayout locale={props.locale}>
    <section>{props.locale.contactUs}</section>
  </PageLayout>
);

export default withLocale(ContactPage);
