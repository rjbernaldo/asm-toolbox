import React, { Component } from 'react';

import GBox from 'grommet/components/Box';
import GMenu from 'grommet/components/Menu';
import GAnchor from 'grommet/components/Anchor';

import SearchIcon from 'grommet/components/icons/base/Search';
import UserIcon from 'grommet/components/icons/base/User';

import logo from '../../assets/images/logo.png';

const Header = () => (
  <GBox>
    <GMenu inline={true} direction="column" primary={true} size="small">
      <GAnchor label="Home" path="/" />
      <GAnchor label="Create Marketplace" path="/create-marketplace" />
      <GAnchor label="Create Admin" path="/create-admin" />
    </GMenu>
  </GBox>
);

export default Header;
