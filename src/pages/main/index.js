import React from 'react';
// components
import PageLayout from '../../components/PageLayout';
// hocs
import { withLocale } from '../../hocs';
// page
import HeadSection from './HeadSection';
// video 
import VideoSection from '../../components/VideoSection';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const MainPage = props => (
  <PageLayout locale={props.locale}>
    <HeadSection locale={props.locale} />
    <VideoSection {...props} />
  </PageLayout>
);

export default withLocale(MainPage);
