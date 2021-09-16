import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import AlterPassword from '../pages/AlterPassword';
import Announcement from '../pages/Announcement';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/password" exact component={AlterPassword} />
    <Route path="/announcement" exact component={Announcement} />
  </Switch>
);

export default Routes;

