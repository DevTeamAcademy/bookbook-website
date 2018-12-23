import React from 'react';
// components
import PageHeader from '../../components/PageHeader';
import PageLayout from '../../components/PageLayout';
// hocs
import { withLocale } from '../../hocs';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const PrivacyPage = props => (
  <PageLayout locale={props.locale}>
    <PageHeader text={props.locale.privacyPolicy} />
  </PageLayout>
);

export default withLocale(PrivacyPage);
