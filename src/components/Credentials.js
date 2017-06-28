import React, { Component } from 'react';

import GBox from 'grommet/components/Box';

const Credentials = (user) => {
  const Info = () => (
    <div>
      <h3>Credentials</h3>
      <div>Marketplace: { user.marketplace }</div>
      <div>Username: { user.username }</div>
    </div>
  );

  return (
    <GBox colorIndex="light-2" size="large" pad="small" margin={{ vertical: 'medium' }}>
      { user.username ? <Info /> : <h3>Please log in</h3> }
    </GBox>
  );
}

export default Credentials;
