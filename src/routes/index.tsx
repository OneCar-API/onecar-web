import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import AlterPassword from '../pages/AlterPassword';
import NewPassword from '../pages/NewPassword';
import ListAnnouncements from '../pages/Announcement/ListAnnouncements';
import ShowAnnouncement from '../pages/Announcement/ShowAnnouncement';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/sign-up" component={SignUp} />
    <Route path="/password" component={AlterPassword} />
    <Route path="/new-password" component={NewPassword} />
    <Route path="/announcements" component={ListAnnouncements} />
    <Route path="/announcement" component={ShowAnnouncement} />
  </Switch>
);

export default Routes;

