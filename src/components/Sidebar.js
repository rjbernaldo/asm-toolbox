import React, { Component } from 'react';

import GBox from 'grommet/components/Box';
import GImage from 'grommet/components/Image';
import GMenu from 'grommet/components/Menu';
import GAnchor from 'grommet/components/Anchor';
import GHeading from 'grommet/components/Heading';

import SearchIcon from 'grommet/components/icons/base/Search';
import UserIcon from 'grommet/components/icons/base/User';

import logo from '../../assets/images/logo.png';

const Header = () => (
  <GBox>
    <GMenu inline={true} direction="column" primary={true} size="small">
      <GBox size="small" pad="medium" style={{ paddingBottom: '0px' }}>
        <GAnchor path="/">
          <GImage style={{ width: '80px' }} src={logo} />
        </GAnchor>
      </GBox>
      <GBox pad="medium" style={{ paddingBottom: '0px' }}>
        <GHeading tag="h4">
          Onboarding
        </GHeading>
      </GBox>
      <GAnchor label="Create Marketplace" path="/create-marketplace" />
      <GAnchor label="Create Admin" path="/create-admin" />
      <GBox pad="medium" style={{ paddingBottom: '0px' }}>
        <GHeading tag="h4">
          Items
        </GHeading>
      </GBox>
      <GAnchor label="Edit Item" path="/edit-item" />
      <GAnchor label="Refund Item" path="/refund-item" />
      <GBox pad="medium" style={{ paddingBottom: '0px' }}>
        <GHeading tag="h4">
          Misc
        </GHeading>
      </GBox>
      <GAnchor label="List Callbacks" path="/list-callbacks" />
      <GAnchor label="Move Funds" path="/move-funds" />
    </GMenu>
  </GBox>
);

export default Header;
