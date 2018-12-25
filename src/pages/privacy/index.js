import React from 'react';
// components
import PageHeader from '../../components/PageHeader';
import PageLayout from '../../components/PageLayout';
// helpers
import * as H from '../../helpers';
// hocs
import { withLocale } from '../../hocs';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const PrivacyPage = props => (
  <PageLayout locale={props.locale}>
    <PageHeader text={H.getLocaleItem(['privacyPolicy'], props.locale)} />
  </PageLayout>
);

export default withLocale(PrivacyPage);
