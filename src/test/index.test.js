import server from './server.test';
import register from './register.test';
import login from './login.test';
import logout from './logout.test';
import reset from './reset.test';
import dbErrorHandler from './dbErrorHandler.test';
import profile from './profile.test';
import verification from './email.verification.test';
import assignRole from './assignRole.test';
import socialLogin from './socialLogin.test';
import notification from './notification.test';
import autoFill from './autoFill.test';
import onewayRequest from './onewayRequest.test';
import returnTripRequest from './returnTripRequest.test';
import approveRequest from './request.avail.test';
import search from './request.search.test';
import Comment from './comment.test';
import Accommodations from './accommodation.test';


describe('API test', () => {
  describe('Server test', server);
  describe('Register test', register);
  describe('Login test', login);
  describe('logout test', logout);
  describe('reset test', reset);
  describe('DbErrorHandler Test', dbErrorHandler);
  describe('Profile page Test', profile);
  describe('Email Verification test', verification);
  describe('Register test', assignRole);
  describe('Social Login test', socialLogin);
  describe('Notification test', notification);
  describe('Remember user information', autoFill);
  describe('one_way Request  test', onewayRequest);
  describe('returnTripRequest Request  test', returnTripRequest);
  describe('Approve request test', approveRequest);
  describe('Search functionality test', search);
  describe('Comment test', Comment);
  describe('Accommodation test', Accommodations);
});
