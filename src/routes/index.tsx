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
import RegisterAds from '../pages/RegisterAds/RegisterAdsMain';
import RegisterAdsDetails from '../pages/RegisterAds/RegisterAdsDetails';
import RegisterAdsDescription from '../pages/RegisterAds/RegisterAdsDescription'
import RegisterAdsMsg from '../pages/RegisterAds/RegisterAdsMsg';



const Routes: React.FC = () => (
  <Switch>
    
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/adverts" component={ListAnnouncements} isPrivate />
    <Route path="/advert" component={ShowAnnouncement} isPrivate />
    <Route path="/import-users" component={ImportUsers} />
    <Route path="/import-ads" component={ImportAnnouncements} isPrivate />
    
    <Route path="/forgot-password" component={AlterPassword} />
    <Route path="/reset-password" component={NewPassword} />
    
    <Route path="/register-ads-msg" component={RegisterAdsMsg} />
    <Route path="/register-ads" component={RegisterAds} />
    <Route path="/register-ads-details" component={RegisterAdsDetails} />
    <Route path="/register-ads-description" component={RegisterAdsDescription} />


    
  </Switch>
);

export default Routes;
