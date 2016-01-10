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
          actionType: root.SessionConstants.USER_RECEIVED,
          user: user
        })
      }

      ApiUtils.fetchUser(userId, dispatchCallback);
    }

    //,

    // currentUserLoggedIn: function () {
    //   root.AppDispatcher.dispatch({
    //     actionType: //idk
    //   });
    // }
  };
})(this);