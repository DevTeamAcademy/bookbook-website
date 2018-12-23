import React from 'react';
// components
import PageHeader from '../../components/PageHeader';
import PageLayout from '../../components/PageLayout';
// hocs
import { withLocale } from '../../hocs';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const AboutPage = props => (
  <PageLayout locale={props.locale}>
    <PageHeader text={props.locale.aboutUs} />
  </PageLayout>
);

export default withLocale(AboutPage);
