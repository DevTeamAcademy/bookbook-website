import React from 'react';
import { FormButtonsContainer, AttachButton, ContactButton } from './ui';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const ContactButtons = (props) => (
  <FormButtonsContainer>
    {
      props.allowAttachButton
      && <AttachButton>{props.attachButtonText}</AttachButton>
    }
    <ContactButton onClick={props.onSubmit}>{props.contactButtonText}</ContactButton>
  </FormButtonsContainer>
);
