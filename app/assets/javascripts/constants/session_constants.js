(function (root) {
  'use strict';
  if (typeof root.SessionConstants === 'undefined') {
    root.SessionConstants = {};
  }

  root.SessionConstants.LOGIN  = 'LOGIN';
  root.SessionConstants.LOGOUT = 'LOGOUT';
  root.SessionConstants.SESSION_USER_RECEIVED = 'SESSION_USER_RECEIVED';

})(this);