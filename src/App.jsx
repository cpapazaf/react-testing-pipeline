import React from 'react';
import ReactDOM from 'react-dom';
import RegisterForm from './containers/RegisterForm.jsx';

const App = () => (
    <RegisterForm registerHeaderLabel="Login Form" registerButtonLabel="Login" thankYouDialogTitle="Logged In"/>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

