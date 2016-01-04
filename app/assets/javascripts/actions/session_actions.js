(function (root) {
  'use strict';
  if (typeof root.SessionActions === 'undefined') {
    root.SessionActions = {};
  }

  root.SessionActions = {
    login: function (userData) {
      var dispatchCallback = function () {

      };
    SessionUtils.login();
  },

    logout: function () {
      var dispatchCallback = function () {

      };
      SessionUtils.logout();
    }
  };
})(this);