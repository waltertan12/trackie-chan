(function (root) {
  'use strict';
  if (typeof root.SessionStore === 'undefined') {
    root.SessionStore = {};
  }

  var _user = {},
      _placeholderUser = {
        id: -1, 
        tracks: [], 
        followers: [], 
        following: [],
        likes: [],
        playlists: []
      },
      CHANGE_EVENT = 'CHANGE_EVENT';

  root.SessionStore = $.extend({}, EventEmitter.prototype, {
    addChangeListener: function (callback) {
      root.SessionStore.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback){
      root.SessionStore.removeListener(CHANGE_EVENT, callback);
    },

    isLoggedIn: function () {
      return !!localStorage.getItem('user');
    },

    isUser: function (id) {
      return (_user.id === id);
    },

    getUser: function () {
      var userCopy = jQuery.extend({}, _user);
      return userCopy;
    },

    getUserId: function () {
      return _user.id;
    },

    getUserUsername: function () {
      return (_user.username || atob(localStorage.getItem('user')));
    },

    setSession: function (user) {
      localStorage.setItem('user', root.btoa(user.username));
      _user = user;
    },

    removeSession: function () {
      sessionStorage.clear();
      localStorage.removeItem('user');
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
          root.ApiActions.receiveCurrentUser(payload.user.id);
          SessionStore.emit(CHANGE_EVENT);
          break;

        case SessionConstants.LOGOUT:
          root.SessionStore.removeSession();
          root.ApiActions.receiveCurrentUser(-1);
          SessionStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);