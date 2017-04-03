import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import RegisterForm from '../src/containers/RegisterForm';

storiesOf('Register', module)
  .add('with name', () => (
    <RegisterForm name='test'/>
  ))
  .add('empty', () => (
    <RegisterForm />
  ));

