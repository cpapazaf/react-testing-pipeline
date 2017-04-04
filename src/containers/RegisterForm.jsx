import React from "react";
import './RegisterForm.css';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: this.props.name || '', surname: '', thankYouDialog: false };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSurnameChange = this.handleSurnameChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    this.handleDialogClose = this.handleDialogClose.bind(this);
  }

  getChildContext() {
    return { muiTheme: getMuiTheme(baseTheme) };
  }

  handleNameChange(event, newValue) { this.setState({name: newValue});}
  handleSurnameChange(event, newValue) { this.setState({surname: newValue});}
  handleRegister(event) { this.setState({thankYouDialog: true}); }
  handleDialogClose(event) { this.setState({thankYouDialog: false, name: '', surname: ''}); }

  render() {
    const actions = [
      <FlatButton
        id = "ok-dialog-button"
        label="OK"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleDialogClose.bind(this)}
      />,
    ];
    return (
        <div id="register-form" className="registerForm">
          <Paper className="paperStyle" zDepth={3}>
            <div className="inPaperStyle">
              <h3 id="register-header-label">{this.props.registerHeaderLabel || 'Register Form'}</h3>
              <br />
              <TextField id="name-field" hintText="Name" onChange={this.handleNameChange} value={this.state.name}/><br />
              <TextField id="surname-field" hintText="Surname" onChange={this.handleSurnameChange}/><br />
              <br />
              <RaisedButton id="register-button" className="registerButton" label={this.props.registerButtonLabel || 'Register'} onTouchTap={this.handleRegister} />
            </div>
          </Paper>
          <Dialog
            id="thank-you-dialog"
            title={this.props.thankYouDialogTitle || "Registered"}
            actions={actions}
            modal={false}
            open={this.state.thankYouDialog}
            onRequestClose={this.handleDialogClose}
          >
          Thank you for registering {this.state.name} {this.state.surname}!
          </Dialog>
        </div>
    );
  }

}

RegisterForm.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default RegisterForm;
