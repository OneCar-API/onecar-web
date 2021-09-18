import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import AlterPassword from '../pages/AlterPassword';
import NewPassword from '../pages/NewPassword';

import ListAnnouncements from '../pages/Announcement/ListAnnouncements';
import ShowAnnouncement from '../pages/Announcement/ShowAnnouncement';
import ImportUsers from '../pages/ImportUser';
import ImportAnnouncements from '../pages/Announcement/ImportAnnouncements';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route
      path="/announcements"
      exact
      component={ListAnnouncements}
      isPrivate
    />
    <Route path="/announcement" component={ShowAnnouncement} isPrivate />
    <Route path="/import-users" component={ImportUsers} />
    <Route
      path="/import-announcements"
      component={ImportAnnouncements}
      isPrivate
    />

    <Route path="/forgot-password" component={AlterPassword} />
    <Route path="/reset-password" component={NewPassword} />
  </Switch>
);

export default Routes;
