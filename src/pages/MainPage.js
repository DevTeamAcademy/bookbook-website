import React from 'react';
// components
import PageLayout from './PageLayout';
// hocs
import { withLocale } from '../hocs';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const MainPage = props => (
  <PageLayout locale={props.locale}>
    <section>{props.locale.home}</section>
  </PageLayout>
);

export default withLocale(MainPage);
