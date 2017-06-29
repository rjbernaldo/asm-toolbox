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
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  handleClick() {
    const loggedIn = this.props.email !== undefined && this.props.password !== undefined;
    if (loggedIn) {
      this.props.logout();
    } else {
      this.props.login(this.state);
    }
  }

  render() {
    const loggedIn = this.props.email !== undefined && this.props.password !== undefined;
    const backgroundColor = loggedIn ? { backgroundColor: '#ddffd9' } : {};

    return (
      <GBox pad={{ vertical: 'medium' }}>
        <h3>Credentials</h3>
        <GForm>
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
              icon={<GCli />}
              plain={true}
              label={<GLabel>{ loggedIn ? 'Log out' : 'Log in' }</GLabel>}
              onClick={this.handleClick}
            />
          </GBox>
        </GForm>
      </GBox>
    );
  }
}

export default Credentials;
