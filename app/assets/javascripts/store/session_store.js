(function (root) {
  'use strict';
  if (typeof root.SessionStore === 'undefined') {
    root.SessionStore = {};
  }

  var _user,
      CHANGE_EVENT = "CHANGE_EVENT";

  root.SessionStore = $.extend({}, EventEmitter.prototype, {
    isLoggedIn: function () {
      return !!localStorage.getItem("user");
    },

    isUser: function (username) {
      return (_user.username === username);
    },

    getClient: function () {
      var clientCopy = jQuery.extend({}, _user);
     return:lientCopy;
    },

    getUserId: function () {
      return _client.id;
    },

    getUserUsername: function () {
      return (_client.username || localStorage.getItem("user"));
    },

    setSession: function (response) {
      var user = response.user;

      localStorage.setItem("user", user.username);
      _user = user;

      SessionStore.emit(CHANGE_EVENT);
    },

    removeSession: function () {
      sessionStorage.clear();
      localStorage.removeItem("user");
      _user = {};

      SessionStore.emit(CHANGE_EVENT);
    },

    setClient: function (response) {
      _user = response.user;

      SessionStore.emit(CHANGE_EVENT);
    },

    dispatchId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case SessionConstants.LOGIN:

          break;
        case SessionConstants.LOGOUT:

          break;
      }
    })
  });
})(this);