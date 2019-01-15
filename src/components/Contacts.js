import React, { Fragment } from 'react';
import {
  compose,
  withState,
  withHandlers,
} from 'recompose';
// components
import { SectionTitle } from './SectionTitle';
import { ContactButtons } from './ContactButtons';
// global
import * as GC from '../constants';
// helpers
import * as H from '../helpers';
// ui
import {
  Loader,
  FormInput,
  ResultWindow,
  FormTextArea,
  ContactsInfo,
  FadeContainer,
  FormContainer,
  ContactSection,
  FormFieldContainer,
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
    component: (props) => <FormTextArea {...props} />,
  },
];

const initialFieldValues = {
  email: '',
  details: '',
  yourName: '',
  phoneNumber: '',
};

const initialErrors = {
  email: false,
  details: false,
  yourName: false,
  phoneNumber: false,
};

const getErrors = (values) => ({
  details: false,
  email: !GC.EMAIL_REGEX.test(values.email),
  yourName: !GC.USER_NAME_REGEX.test(values.yourName),
  phoneNumber: !GC.PHONE_NUMBER_REGEX.test(values.phoneNumber),
});

const enhance = compose(
  withState('errors', 'setErrors', initialErrors),
  withState('fields', 'setFields', initialFieldValues),
  withState('requestPending', 'setRequestPending', false),
  withState('showResultWindow', 'setShowResultWindow', false),
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
      const invalid = Object.values(errors).some(err => err === true);
      if (invalid) return props.setErrors(errors);
      props.setRequestPending(true);
      // Request:
      const Http = new XMLHttpRequest();
      const params = JSON.stringify({
        title: props.fields.yourName, // Some random data
        body: props.fields.email, // Some random data
        userId: 1, // Some random data
      });
      Http.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
      Http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      Http.onreadystatechange = () => {
        if (Http.readyState === 4 && Http.status === 201) { // Change to 200 someday or not.
          console.log(Http.responseText); // For demo purpose
          props.setRequestPending(false);
          props.setShowResultWindow(true);
          setTimeout(() => { props.setShowResultWindow(false); }, 2000);
        }
      };
      Http.send(params);
      return true;
    },
  }),
);

export const FormField = (props) => (
  <FormFieldContainer
    invalid={props.invalid}
    text={
      props.invalid
        ? H.getLocaleItem(['errorMessages', props.field.name], props.locale)
        : ''
    }
  >
    {
      props.field.component({
        value: props.value,
        type: props.field.type,
        invalid: props.invalid,
        onFocus: () => props.handleHideError(props.field.name),
        onChange: (e) => props.handleFieldChange(e, props.field.name),
        placeholder: H.getLocaleItem([props.field.name], props.locale),
      })
    }
  </FormFieldContainer>
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
            invalid={props.errors[field.name]}
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
    {
     props.requestPending
      && (
      <FadeContainer>
        <Loader />
      </FadeContainer>
      )
    }
    {
     props.showResultWindow
     && (
     <FadeContainer>
       <ResultWindow>
         {H.getLocaleItem(['successMessages', 'contactDataSent'], props.locale)}
       </ResultWindow>
     </FadeContainer>
     )
    }
  </Fragment>
);

export default enhance(Contacts);
