import React, { Component } from 'react';

import GBox from 'grommet/components/Box';

const Credentials = () => (
  <GBox colorIndex="light-2" size="large" pad="small" margin={{ vertical: 'medium' }}>
    <h3>Credentials</h3>
    <div>Marketplace: test.com</div>
    <div>Username: admin@test.com</div>
  </GBox>
);

export default Credentials;
