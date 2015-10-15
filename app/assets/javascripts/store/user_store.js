(function (root) {
  if (typeof root.UserStore === "undefined") {
    root.UserStore = {};
  }

  var _user = {id: null, tracks: [], followers: [], followed: []},
      _currentUser = {id: null, tracks: [], followers: [], followed: []},
      _retrievedUsers = {},
      compareUsers = function (userOne, userTwo) {
        return JSON.stringify(userOne) === JSON.stringify(userTwo);
      },
      resetCurrentUser = function (currentUser) {
        // if (typeof _retrievedUsers[currentUser.id] === "undefined") {
        //   _retrievedUsers[currentUser.id] = currentUser;
        //   _currentUser = currentUser;
        // } else if (_retrievedUsers[currentUser.id] !== currentUser) {
        //   _retrievedUsers[currentUser.id] = currentUser;
        _currentUser = currentUser;
        // } 
        // else {
        //   _currentUser = _retrievedUsers[_currentUser.id]
        // }
      }
      resetUser = function (user) {
        // if (typeof _retrievedUsers[user.id] === "undefined") {
        //   _retrievedUsers[user.id] = user;
        //   _user = user;
        // } else if (_retrievedUsers[user.id] !== user) {
        //   _retrievedUsers[user.id] = user;
        _user = user;
        // } else {
        //   _user = [user.id];
        // }
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
    retrievedUsers: function () {
      return _retrievedUsers;
    },
    pushToRetrievedUsers: function (user) {
      if (typeof _retrievedUsers[user.id] === "undefined") {
        _retrievedUsers[user.id] = user;
      } else if (_retrievedUsers[user.id] !== user) {
        _retrievedUsers[user.id] = user;
      }
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
      if(payload.actionType === UserConstants.USER_UPDATED) {
        resetCurrentUser(payload.user);
        root.UserStore.emit(CHANGE_EVENT);
      }
    })
  });

})(this);