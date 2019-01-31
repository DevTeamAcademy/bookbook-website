import React from 'react';
// components
import PageLayout from '../../components/PageLayout';
// hocs
import { withLocale } from '../../hocs';
// page
import HeadSection from './HeadSection';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const MainPage = props => (
  <PageLayout locale={props.locale}>
    <HeadSection locale={props.locale} />
  </PageLayout>
);

export default withLocale(MainPage);
