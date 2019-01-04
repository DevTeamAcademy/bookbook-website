import React from 'react';
import { FormButtonsContainer, AttachButton, ContactButton } from './ui';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const ContactButtons = (props) => (
  <FormButtonsContainer>
    {
      props.allowAttachButton
      && <AttachButton>{props.attachButtonText}</AttachButton>
    }
    <ContactButton>{props.contactButtonText}</ContactButton>
  </FormButtonsContainer>
);
