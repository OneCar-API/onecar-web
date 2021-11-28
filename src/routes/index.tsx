/* eslint-disable import/extensions */
import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import AlterPassword from '../pages/AlterPassword';
import NewPassword from '../pages/NewPassword';
import AdsManagement from '../pages/AdsManagement/index';

import ListAnnouncements from '../pages/Announcement/ListAnnouncements';
import ShowAnnouncement from '../pages/Announcement/ShowAnnouncement';
import ImportUsers from '../pages/ImportUser';
import ImportAnnouncements from '../pages/Announcement/ImportAnnouncements';

import RegisterAds from '../pages/RegisterAds/RegisterAdsMain';
import RegisterAdsDetails from '../pages/RegisterAds/RegisterAdsDetails';
import RegisterAdsDescription from '../pages/RegisterAds/RegisterAdsDescription';
import RegisterAdsMsg from '../pages/RegisterAds/RegisterAdsMsg';

import User from '../pages/UserProfile/index';

const Routes: React.FC = () => (
  <Switch>
    <Route
      path={['/signin', '/invite-user', '/confirm-user']}
      component={SignIn}
    />

    <Route path="/signup" component={SignUp} />
    <Route path="/adverts" component={ListAnnouncements} />
    <Route path="/import-users" component={ImportUsers} isPrivate />
    <Route path="/import-ads" component={ImportAnnouncements} isPrivate />

    <Route path="/forgot-password" component={AlterPassword} isPrivate />
    <Route path="/reset-password" component={NewPassword} isPrivate />

    <Route path="/" exact component={ListAnnouncements} isPrivate />
    <Route path="/advert/:id" component={ShowAnnouncement} />
    <Route path="/forgot-password" component={AlterPassword} isPrivate />
    <Route path="/reset-password" component={NewPassword} isPrivate />
    <Route path="/register-ads-msg" component={RegisterAdsMsg} isPrivate />
    <Route path="/register-ads" component={RegisterAds} isPrivate />
    <Route
      path="/register-ads-details"
      component={RegisterAdsDetails}
      isPrivate
    />
    <Route
      path="/register-ads-description"
      component={RegisterAdsDescription}
      isPrivate
    />
    <Route path="/ads-management" component={AdsManagement} isPrivate />
    <Route path="/user" component={User} isPrivate />
  </Switch>
);

export default Routes;
