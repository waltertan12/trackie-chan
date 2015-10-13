(function (root) {
  if (typeof root.UserStore === "undefined") {
    root.UserStore = {};
  }

  var _user = null,
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
    dispatcherID: AppDispatcher.register(function (payload) {
      if(payload.actionType === UserConstants.USER_RECEIVED) {
        resetUser(payload.user);
        root.UserStore.emit(CHANGE_EVENT);
      }
    })
  });

})(this);