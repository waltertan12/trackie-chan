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
    updateSingleUser: function (user, params) {

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