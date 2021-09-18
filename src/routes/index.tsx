import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import AlterPassword from '../pages/AlterPassword';
import NewPassword from '../pages/NewPassword';

import ListAnnouncements from '../pages/Announcement/ListAnnouncements';
import ShowAnnouncement from '../pages/Announcement/ShowAnnouncement';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={ListAnnouncements} />
    <Route path="/announcement" component={ShowAnnouncement} />

    <Route path="/signin" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />

    <Route path="/forgot-password" component={AlterPassword} />
    <Route path="/reset-password" component={NewPassword} />
  </Switch>
);

export default Routes;
