import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RegisterForm from './containers/RegisterForm';
 
const App = () => (
  <MuiThemeProvider>
    <RegisterForm />
  </MuiThemeProvider>
);
 
ReactDOM.render(
  <App />,
  document.getElementById('app')
);

