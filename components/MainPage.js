import React, { Fragment } from 'react';
// components
import PageLayout from './PageLayout';
// hocs
import { withLocale } from '../hocs';
///////////////////////////////////////////////////////////////////////////////////////////////////

export const MainPage = (props) => (
  <PageLayout>
    <section>
      {props.locale.name}
    </section>
  </PageLayout>
);

export default withLocale(MainPage);
