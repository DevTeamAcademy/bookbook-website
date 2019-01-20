import React from 'react';
// components
import PageLayout from '../../components/PageLayout';
import Contacts from '../../components/Contacts';
// hocs
import { withLocale } from '../../hocs';
// page
import HeadSection from './HeadSection';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const MainPage = props => (
  <PageLayout locale={props.locale}>
    <HeadSection locale={props.locale} />
    <Contacts 
      locale={props.locale} 
      allowAttachButton={false}
      allowContactSection={false}
    />
  </PageLayout>
);

export default withLocale(MainPage);
