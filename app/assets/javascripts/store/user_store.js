(function (root) {
  if (typeof root.UserStore === "undefined") {
    root.UserStore = {};
  }

  var _placeholderUser = {
        id: -1, 
        tracks: [], 
        followers: [], 
        following: [],
        likes: [],
        playlists: []
      },
      _user = _placeholderUser,
      _currentUser = _placeholderUser,
      _retrievedUsers = {},
      compareUsers = function (userOne, userTwo) {
        return JSON.stringify(userOne) === JSON.stringify(userTwo);
      },
      resetCurrentUser = function (currentUser) {
        _currentUser = currentUser;
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
    doesCurrentUserFollow: function (user) {
      for (var i = 0; i < _currentUser.following.length; i++) {
        if (_currentUser.following[i].id === user.id) {
          return true;
        }
      }
      return false
    },
    doesCurrentUserLike: function (likableType, likableId) {
      var like;
      for (var i = 0; i < _currentUser.likes.length; i++) {
        like = _currentUser.likes[i];
        if (like.likable_type === likableType && 
            like.likable_id === likableId) {
          return true;
        }
      }
      return false;
    },
    all: function () {
      return _retrievedUsers;
    },
    findUser: function (userId) {
      if (typeof _retrievedUsers[userId] === "undefined") {
        return _placeholderUser;
      } else {
        return _retrievedUsers[userId];
      }
    },
    storeUser: function (user) {
      _retrievedUsers[user.id] = user;
    },
    dispatcherID: AppDispatcher.register(function (payload) {
      if(payload.actionType === UserConstants.USER_RECEIVED) {
        root.UserStore.storeUser(payload.user);
        resetUser(payload.user);

        root.UserStore.emit(CHANGE_EVENT);

      } else if(payload.actionType === UserConstants.CURRENT_USER_RECEIVED) {
        root.UserStore.storeUser(payload.current_user);
        resetCurrentUser(payload.current_user);

        root.UserStore.emit(CHANGE_EVENT);

      } else if(payload.actionType === UserConstants.USER_UPDATED) {
        root.UserStore.storeUser(payload.user);
        resetCurrentUser(payload.user);

        root.UserStore.emit(CHANGE_EVENT);

      } else if (payload.actionType === UserConstants.SET_USER_SHOW) {
        resetUser(payload.user);

        root.UserStore.emit(CHANGE_EVENT);
      } else if (payload.actionType === TrackConstants.TRACK_CREATED &&
                 payload.userId === _currentUser.id) {
        _currentUser.tracks.push(payload.track);
        root.UserStore.storeUser(_currentUser);
      }
    })
  });

})(this);