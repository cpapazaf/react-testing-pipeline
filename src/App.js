import React from 'react';
import ReactDOM from 'react-dom';
import RegisterForm from './containers/RegisterForm';

const App = () => (
    <RegisterForm />
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

