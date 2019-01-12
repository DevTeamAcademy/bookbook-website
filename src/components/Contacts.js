import React, { Fragment } from 'react';
import { compose, withState, withHandlers } from 'recompose';

// global
import * as GC from '../constants';
// components
import { SectionTitle } from './SectionTitle';
import { ContactButtons } from './ContactButtons';
// helpers
import * as H from '../helpers';
// ui
import {
  FormInput,
  FormTextArea,
  ContactsInfo,
  ErrorMessage,
  FormContainer,
  ContactSection,
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

const initialFieldValues = {
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

const getErrors = (values) => ({
  yourName: !GC.USER_NAME_REGEX.test(values.yourName),
  email: !GC.EMAIL_REGEX.test(values.email),
  phoneNumber: !GC.PHONE_NUMBER_REGEX.test(values.phoneNumber),
  details: false,
});

const enhance = compose(
  withState('fields', 'setFields', initialFieldValues),
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
      const errors = getErrors(props.fields);
      const isInvalid = Object.values(errors).some(err => err === true);
      if (isInvalid) return props.setErrors(errors);
      return true; // TODO: http request here
    },
  }),
);

export const FormField = (props) => (
  <div style={{ position: 'relative' }}>
    {
      props.field.component({
        value: props.value,
        type: props.field.type,
        isInvalid: props.isInvalid,
        onFocus: () => props.handleHideError(props.field.name),
        onChange: (e) => props.handleFieldChange(e, props.field.name),
        placeholder: H.getLocaleItem([props.field.name], props.locale),
      })
    }
    {
      props.isInvalid
      && <ErrorMessage>{H.getLocaleItem(['errorMessages', props.field.name], props.locale)}</ErrorMessage>
    }
  </div>
);

export const Contacts = (props) => (
  <Fragment>
    <SectionTitle
      titleText={H.getLocaleItem(['contactUs'], props.locale)}
    />
    <FormContainer>
      {
        fields.map((field) => (
          <FormField
            field={field}
            locale={props.locale}
            value={props.fields[field.name]}
            isInvalid={props.errors[field.name]}
            handleHideError={props.handleHideError}
            key={`contact-form-field-${field.name}`}
            handleFieldChange={props.handleFieldChange}
          />
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
