import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import AlterPassword from '../pages/AlterPassword';
import NewPassword from '../pages/NewPassword';
import Announcement from '../pages/Announcement';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/sign-up" exact component={SignUp} />
    <Route path="/password" exact component={AlterPassword} />
    <Route path="/new-password" exact component={NewPassword} />
    <Route path="/announcement" exact component={Announcement} />
  </Switch>
);

export default Routes;

