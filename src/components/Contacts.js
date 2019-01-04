import React, { Fragment } from 'react';
// components
import { SectionTitle } from './SectionTitle';
import { ContactButtons } from './ContactButtons';
// helpers
import * as H from '../helpers';
// ui
import {
  FormContainer,
  FormInput,
  ContactSection,
  FormTextArea,
  ContactsInfo,
} from './ui';

//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const Contacts = (props) => (
  <Fragment>
    <SectionTitle
      titleText={H.getLocaleItem(['contactUs'], props.locale)}
    />
    <FormContainer>
      <FormInput
        type='text'
        placeholder={H.getLocaleItem(['yourName'], props.locale)}
      />
      <FormInput
        type='email'
        placeholder={H.getLocaleItem(['email'], props.locale)}
      />
      <FormInput
        type='tel'
        placeholder={H.getLocaleItem(['phoneNumber'], props.locale)}
      />
      <FormTextArea
        type='text'
        placeholder={H.getLocaleItem(['details'], props.locale)}
      />
      <ContactButtons
        allowAttachButton={props.allowAttachButton}
        attachButtonText={H.getLocaleItem(['attachFile'], props.locale)}
        contactButtonText={H.getLocaleItem(['send'], props.locale)}
      />
    </FormContainer>
    {
      props.allowContactSection
      && (
      <ContactSection>
        <ContactsInfo>
          Email<br />bukbook.unity@gmail.com<br />
          some.email@gmail.com<br /><br />
          Phone numbers<br />
          +380938135997<br />
          +380987654321
        </ContactsInfo>
      </ContactSection>
      )
    }
  </Fragment>
);

export default Contacts;
