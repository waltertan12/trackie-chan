(function (root) {
  'use strict';

  if (typeof root.SessionActions === 'undefined') {
    root.SessionActions = {};
  }

  root.SessionActions = {

    login: function (userData) {
      var dispatchCallback = function (user) {
        root.AppDispatcher.dispatch({
          actionType: root.SessionConstants.LOGIN,
          user: user
        });
      };
      SessionUtils.login(userData, dispatchCallback);
    },

    logout: function () {
      var dispatchCallback = function () {
        root.AppDispatcher.dispatch({
          actionType: root.SessionConstants.LOGOUT
        })
      };
      SessionUtils.logout(dispatchCallback);
    },

    fetchUser: function (userId) {
      var dispatchCallback = function (user) {
        root.AppDispatcher.dispatch({
          actionType: root.SessionConstants.SESSION_USER_RECEIVED,
          user: user
        })
      }

      ApiUtils.fetchUser(userId, dispatchCallback);
    },

    createUser: function (user) {
      console.log(user);
      var dispatchCallback = function (user) {
        root.AppDispatcher.dispatch({
          actionType: root.SessionConstants.LOGIN,
          user: user
        })
      }

      ApiUtils.createUser(user, dispatchCallback);
    },

    demoLogin: function () {
      var dispatchCallback = function (user) {
        root.AppDispatcher.dispatch({
          actionType: root.SessionConstants.LOGIN,
          user: user
        })
      }

      SessionUtils.demoLogin(dispatchCallback);
    }
  };
})(this);