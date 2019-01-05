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
  { type: 'email', name: 'email', component: (props) => <FormInput {...props} /> },
  { type: 'tel', name: 'phoneNumber', component: (props) => <FormInput {...props} /> },
  { type: 'text', name: 'details', component: (props) => <FormTextArea {...props} /> },
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

const checkContactFormErrors = () => {
  return {
    yourName: true,
    email: true,
    phoneNumber: false,
    details: false,
  };
  // TODO: check invalid fields, e.g. {yourName: true, email: true}
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
      const isValid = errors.length === 0;
      if (!isValid) return props.setErrors(errors);
      return isValid;
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
        // fields.map((field, index) => {
        //   return field.component({
        //     type: field.type,
        //     key: `contact-form-field-${field.name}-${index}`,
        //     onChange: (e) => props.onFieldChange(e, field.name),
        //     placeholder: H.getLocaleItem([field.name], props.locale),
        //   });
        // })
      }
      {/* {<FormInput
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
      />} */}
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
