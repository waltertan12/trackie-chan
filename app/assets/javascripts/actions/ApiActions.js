(function (root) {
  if (typeof root.ApiActions === "undefined") {
    root.ApiActions = {};
  }

  root.ApiActions = {
    receiveSingleUser: function (userId) {
      var dispatchCallback = function (user) {
        root.AppDispatcher.dispatch({
          actionType: root.UserConstants.USER_RECEIVED,
          user: user
        });
      };

      ApiUtils.fetchUser(userId, dispatchCallback);
    },
    receiveCurrentUser: function (currentUserId) {
      var dispatchCallback = function (current_user) {
        root.AppDispatcher.dispatch({
          actionType: root.UserConstants.CURRENT_USER_RECEIVED,
          current_user: current_user
        });
      };

      ApiUtils.fetchUser(currentUserId, dispatchCallback);
    },
    updateUser: function (currentUserId, params) {
      var dispatchCallback = function (user) {
        root.AppDispatcher.dispatch({
          actionType: root.UserConstants.USER_UPDATED,
          user: user
        });
      };

      ApiUtils.updateUser(currentUserId, params, dispatchCallback);
    },
    deleteSingleUser: function (user) {

    },
    followUser: function (user) {
      ApiUtils.followUser(user);
    },
    unfollowUser: function (user) {
      ApiUtils.unfollowUser(user);
    },
    deleteSession: function () {
      window.location.assign("/");
      ApiUtils.destroySession();
    },
    receiveTracks: function (userId) {
      var dispatchCallback = function (tracks) {
        root.AppDispatcher.dispatch({
          actionType: root.TrackConstants.TRACKS_RECEIVED,
          tracks: tracks
        });
      };

      ApiUtils.fetchTracks(userId, dispatchCallback);
    }
  };
})(this);