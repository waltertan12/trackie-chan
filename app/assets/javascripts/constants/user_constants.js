(function (root) {
  'use strict';
  if (typeof root.UserConstants === 'undefined') {
    root.UserConstants = {}
  }

  root.UserConstants.CURRENT_USER_RECEIVED = 'CURRENT_USER_RECEIVED';
  root.UserConstants.SET_USER_SHOW = 'SET_USER_SHOW';
  root.UserConstants.USER_RECEIVED = 'USER_RECEIVED';
  root.UserConstants.USER_CREATED = 'USER_CREATED';
  root.UserConstants.USER_UPDATED = 'USER_UPDATED';
  root.UserConstants.USER_DATA_RECEIVED = 'USER_DATA_RECEIVED';

})(this);