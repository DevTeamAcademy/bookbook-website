import React from 'react';
// components
import Contacts from '../../components/Contacts';
import PageHeader from '../../components/PageHeader';
import PageLayout from '../../components/PageLayout';
// helpers
import * as H from '../../helpers';
// hocs
import { withLocale } from '../../hocs';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const ContactsPage = props => (
  <PageLayout locale={props.locale}>
    <Contacts locale={props.locale} />
  </PageLayout>
);

export default withLocale(ContactsPage);
