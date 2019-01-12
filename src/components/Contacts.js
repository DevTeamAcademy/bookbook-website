import React, { Fragment } from 'react';
import { compose, withState, withHandlers } from 'recompose';

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

const fields = [
  {
    type: 'text',
    name: 'yourName',
    component: (props) => <FormInput {...props} />,
  },
  {
    type: 'email',
    name: 'email',
    component: (props) => <FormInput {...props} />,
  },
  {
    type: 'tel',
    name: 'phoneNumber',
    component: (props) => <FormInput {...props} />,
  },
  {
    type: 'text',
    name: 'details',
    component: (props) => <FormTextArea {...props} /> },
];

const initialFields = {
  yourName: '',
  email: '',
  phoneNumber: '',
  details: '',
};

const initialErrors = {
  yourName: false,
  email: false,
  phoneNumber: false,
  details: false,
};

// Name validation
const getNameError = name => {
  const nameRegex = /^.{2,}$/;
  const isValidName = nameRegex.test(name);
  return !isValidName ? 'Name Is Required' : false;
};

// Email validation
const getEmailError = email => {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValidEmail = emailRegex.test(email);
  return !isValidEmail ? 'Email Is Required' : false;
};

// PhoneNumber validation
const getPhoneNumberError = number => {
  const phoneNumberRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
  const isValidPhoneNumber = phoneNumberRegex.test(number);
  return !isValidPhoneNumber //
    ? 'Phone Number Is Required'
    : false; // TODO ...
};

const checkContactFormErrors = (fields) => {
  return {
    yourName: getNameError(fields.yourName),
    email: getEmailError(fields.email),
    phoneNumber: getPhoneNumberError(fields.phoneNumber),
    details: false,
  };
};

const enhance = compose(
  withState('fields', 'setFields', initialFields),
  withState('errors', 'setErrors', initialErrors),
  withHandlers({
    handleHideError: (props) => (name) => {
      const newErrors = props.errors;
      newErrors[name] = false;
      props.setErrors(newErrors);
    },
    handleFieldChange: (props) => (e, name) => {
      const field = e.currentTarget;
      const newFields = props.fields;
      newFields[name] = field.value;
      props.setFields(newFields);
    },
    handleSubmit: (props) => () => {
      const errors = checkContactFormErrors(props.fields);
      const errorsArr = (Object.values(errors)).filter(Boolean);
      const isValid = errorsArr.length === 0;
      debugger;
      if (!isValid) {
        alert('Is NOT valid!');
        return props.setErrors(errors);
      }
      alert('Is valid!');

      // TODO: send xhr request
    },
  }),
);

export const Contacts = (props) => (
  <Fragment>
    <SectionTitle
      titleText={H.getLocaleItem(['contactUs'], props.locale)}
    />
    <FormContainer>
      {
        fields.map((field, index) => (
          field.component({
            type: field.type,
            value: props.fields[field.name],
            isInvalid: props.errors[field.name],
            onFocus: () => props.handleHideError(field.name),
            key: `contact-form-field-${field.name}-${index}`,
            onChange: (e) => props.handleFieldChange(e, field.name),
            placeholder: H.getLocaleItem([field.name], props.locale),
          })
        ))
      }
      <ContactButtons
        onSubmit={props.handleSubmit}
        allowAttachButton={props.allowAttachButton}
        contactButtonText={H.getLocaleItem(['send'], props.locale)}
        attachButtonText={H.getLocaleItem(['attachFile'], props.locale)}
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

export default enhance(Contacts);
