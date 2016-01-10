(function (root) {
  'use strict';
  if (typeof root.SessionConstants === 'undefined') {
    root.SessionConstants = {};
  }

  root.SessionConstants.LOGIN  = 'LOGIN';
  root.SessionConstants.LOGOUT = 'LOGOUT';
  root.SessionConstants.USER_RECEIVED = 'USER_RECEIVED';

})(this);