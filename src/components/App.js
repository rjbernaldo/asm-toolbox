import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import GApp from 'grommet/components/App';
import GBox from 'grommet/components/Box';
import GSplit from 'grommet/components/Split';

import Sidebar from './Sidebar';
import Home from './Home';

const App = () => (
  <GApp centered={false}>
    <GSplit flex="right">
      <GBox colorIndex="light-2" full="vertical">
        <Sidebar />
      </GBox>
      <GBox pad="small">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </GBox>
    </GSplit>
  </GApp>
);
          // <Route path="/create-marketplace" component={CreateMarketplace} />

export default App;
