import React, { Component } from 'react';

import GBox from 'grommet/components/Box';
import GForm from 'grommet/components/Form';
import GFormField from 'grommet/components/FormField';
import GFormFields from 'grommet/components/FormFields';
import GTextInput from 'grommet/components/TextInput';
import GButton from 'grommet/components/Button';
import GLabel from 'grommet/components/Label';
import GCli from 'grommet/components/icons/base/cli';

class Credentials extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  handleLogin(e) {
    e.preventDefault();

    this.props.login(this.state);
  }

  handleLogout(e) {
    e.preventDefault();

    this.setState({ email: '', password: '' });
    this.props.logout();
  }

  render() {
    const loggedIn = this.props.email !== '' && this.props.password !== '';
    const backgroundColor = loggedIn ? { backgroundColor: '#ddffd9' } : {};

    return (
      <GBox pad={{ vertical: 'medium' }}>
        <h3>Credentials</h3>
        <GForm onSubmit={loggedIn ? this.handleLogout : this.handleLogin}>
          <GFormFields>
            <GFormField label="Credentials" style={backgroundColor}>
              <GTextInput
                type="text"
                disabled={loggedIn}
                name="email"
                placeHolder="email"
                value={this.state.email}
                onDOMChange={this.handleChange}
              />
              <GTextInput
                type="text"
                disabled={loggedIn}
                name="password"
                placeHolder="password"
                value={this.state.password}
                onDOMChange={this.handleChange}
              />
            </GFormField>
          </GFormFields>
          <GBox pad={{ vertical: 'small' }}>
            <GButton
              type="submit"
              icon={<GCli />}
              plain={true}
              label={<GLabel>{ loggedIn ? 'Log out' : 'Log in' }</GLabel>}
              onClick={loggedIn ? this.handleLogout : this.handleLogin}
            />
          </GBox>
        </GForm>
      </GBox>
    );
  }
}

export default Credentials;
