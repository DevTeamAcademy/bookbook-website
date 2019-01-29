import React, { Fragment } from 'react';
import {
  compose,
  withState,
  withHandlers } from 'recompose';
import { withTheme } from 'styled-components';
import { themeGet } from 'styled-system';
// components
import Loader from './Loader';
import { SectionTitle } from './SectionTitle';
import ContactButtons from './ContactButtons';
// global
import * as GC from '../constants';
import * as TC from '../constants/test-constants';
// helpers
import * as H from '../helpers';
// ui
import { Flex, Text, FadeContainer } from '../ui';
import {
  FormInput,
  ResultWindow,
  FormTextArea,
  FormFieldContainer } from './ui';
//  /////////////////////////////////////////////////////////////////////////////////////////////////

export const fields = [
  {
    type: 'text',
    name: 'name',
    component: (props) => <FormInput data-testid={TC.TEST_CONTACT_FORM_YOUR_NAME} {...props} />,
  },
  {
    type: 'email',
    name: 'email',
    component: (props) => <FormInput data-testid={TC.TEST_CONTACT_FORM_EMAIL} {...props} />,
  },
  {
    type: 'tel',
    name: 'phoneNumber',
    component: (props) => <FormInput data-testid={TC.TEST_CONTACT_FORM_PHONE_NUMBER} {...props} />,
  },
  {
    type: 'text',
    name: 'message',
    component: (props) => <FormTextArea data-testid={TC.TEST_CONTACT_FORM_DETAILS} {...props} />,
  },
];

const initialFieldValues = {
  name: '',
  email: '',
  message: '',
  phoneNumber: '',
};

const initialErrors = {
  name: false,
  email: false,
  message: false,
  phoneNumber: false,
};

const getErrors = (values) => ({
  message: false,
  email: !GC.EMAIL_REGEX.test(values.email),
  name: !GC.USER_NAME_REGEX.test(values.name),
  phoneNumber: !GC.PHONE_NUMBER_REGEX.test(values.phoneNumber),
});

// TODO: with theme
const enhance = compose(
  withTheme,
  withState('errors', 'setErrors', initialErrors),
  withState('fields', 'setFields', { ...initialFieldValues }),
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
      const Http = new XMLHttpRequest();
      // TODO: clarify request data format
      const params = JSON.stringify({
        title: props.fields.name,
        body: props.fields.email,
        userId: 1,
      });
      Http.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
      Http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      Http.onreadystatechange = () => {
        if (Http.readyState === 4 && Http.status === 201) {
          // TODO: Change to 200 someday or not.
          props.setFields({ ...initialFieldValues });
          props.setRequestPending(false);
          props.setShowResultWindow(true);
          setTimeout(() => {
            props.setShowResultWindow(false);
          }, 2000);
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
    <Flex mt={22} alignItems='center' flexDirection='column'>
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
    </Flex>
    {
      props.allowContactSection
      && (
        <Flex
          height={205}
          position='relative'
          bg={themeGet('colors.lightGrey', '#f1f1f1')((props))}
        >
          <Text
            mt={19}
            ml={31}
            fontSize={15}
            lineHeight={1.5}
          >
            <Flex flexDirection='column'>
              <Text>Email</Text>
              <Text>bukbook.unity@gmail.com</Text>
              <Text mb={12}>some.email@gmail.com</Text>
              <Text>Phone numbers</Text>
              <Text>+380938135997</Text>
              <Text>+380987654321</Text>
            </Flex>
          </Text>
        </Flex>
      )
    }
    {
      props.requestPending && <Loader />
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
