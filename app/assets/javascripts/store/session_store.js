(function (root) {
  'use strict';
  if (typeof root.SessionStore === 'undefined') {
    root.SessionStore = {};
  }

  var _user = {},
      CHANGE_EVENT = "CHANGE_EVENT";

  root.SessionStore = $.extend({}, EventEmitter.prototype, {
    isLoggedIn: function () {
      return !!localStorage.getItem("user");
    },

    isUser: function (username) {
      return (_user.username === username);
    },

    getUser: function () {
      var userCopy = jQuery.extend({}, _user);
      return userCopy;
    },

    getUserId: function () {
      return _user.id;
    },

    getUserUsername: function () {
      return (_user.username || localStorage.getItem("user"));
    },

    setSession: function (user) {
      localStorage.setItem("user", user.username);
      _user = user;
    },

    removeSession: function () {
      sessionStorage.clear();
      localStorage.removeItem("user");
      _user = {};
    },

    setUser: function (response) {
      _user = response.user;

      SessionStore.emit(CHANGE_EVENT);
    },

    dispatchId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case SessionConstants.LOGIN:
          root.SessionStore.setSession(payload.user);
          SessionStore.emit(CHANGE_EVENT);
          break;

        case SessionConstants.LOGOUT:
          root.SessionStore.removeSession();
          SessionStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);