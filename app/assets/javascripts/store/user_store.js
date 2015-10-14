(function (root) {
  if (typeof root.UserStore === "undefined") {
    root.UserStore = {};
  }

  var _user = {id: null, tracks: [], followers: [], followed: []},
      _currentUser = {id: null, tracks: [], followers: [], followed: []},
      resetCurrentUser = function (currentUser) {
        _currentUser = currentUser;
      }
      resetUser = function (user) {
        _user = user;
      },
      CHANGE_EVENT = "CHANGE_EVENT";

  root.UserStore = $.extend({}, EventEmitter.prototype,{
    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },
    user: function () {
      return _user;
    },
    currentUser: function () {
      return _currentUser;
    },
    dispatcherID: AppDispatcher.register(function (payload) {
      if(payload.actionType === UserConstants.USER_RECEIVED) {
        resetUser(payload.user);
        root.UserStore.emit(CHANGE_EVENT);
      }
      if(payload.actionType === UserConstants.CURRENT_USER_RECEIVED) {
        resetCurrentUser(payload.current_user);
        root.UserStore.emit(CHANGE_EVENT);
      }
    })
  });

})(this);