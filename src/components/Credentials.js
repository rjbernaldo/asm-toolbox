import React, { Component } from 'react';

import GBox from 'grommet/components/Box';
import GForm from 'grommet/components/Form';
import GFormField from 'grommet/components/FormField';
import GFormFields from 'grommet/components/FormFields';
import GTextInput from 'grommet/components/TextInput';
import GButton from 'grommet/components/Button';
import GLabel from 'grommet/components/Label';
import GCli from 'grommet/components/icons/base/cli';

const Credentials = (user) => {
  const Info = () => (
    <GForm>
      <GFormFields>
        <GFormField label="Credentials">
          <GTextInput value="email@email.com" disabled={true} />
          <GTextInput value="password" disabled={true} />
        </GFormField>
      </GFormFields>
      <GBox pad={{ vertical: 'small' }}>
        <GButton icon={<GCli />} label={<GLabel>Log out</GLabel>} plain={true} onClick={() => { console.log('test'); }} />
      </GBox>
    </GForm>
  );

  const LoginForm = () => (
    <GForm>
      <GFormFields>
        <GFormField label="Credentials">
          <GTextInput placeHolder="email" />
          <GTextInput placeHolder="password" />
        </GFormField>
      </GFormFields>
      <GBox pad={{ vertical: 'small' }}>
        <GButton icon={<GCli />} label={<GLabel>Log in</GLabel>} plain={true} onClick={() => { console.log('test'); }} />
      </GBox>
    </GForm>
  );

  return (
    <GBox pad={{ vertical: 'medium' }}>
      <h3>Credentials</h3>
      { user.username ? <Info /> : <LoginForm /> }
    </GBox>
  );
}

export default Credentials;
