import React from 'react';
// components
import PageLayout from '../../components/PageLayout';
// hocs
import { withLocale } from '../../hocs';
// page
import MainSection from './MainSection';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const MainPage = props => (
  <PageLayout locale={props.locale}>
    <MainSection locale={props.locale} />
  </PageLayout>
);

export default withLocale(MainPage);
