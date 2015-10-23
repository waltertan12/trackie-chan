/* global ApiUtils */
(function (root) {
  "use strict";
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
    updateUser: function (currentUserId, params, redirect) {
      var dispatchCallback = function (user) {
        root.AppDispatcher.dispatch({
          actionType: root.UserConstants.USER_UPDATED,
          user: user
        });
      };

      ApiUtils.updateUser(currentUserId, params, dispatchCallback, redirect);
    },
    deleteSingleUser: function (user) {

    },
    followUser: function (user) {
      var dispatchCallback = function (current_user) {
        root.AppDispatcher.dispatch({
          actionType: root.UserConstants.CURRENT_USER_RECEIVED,
          current_user: current_user
        });
      };

      ApiUtils.followUser(user, dispatchCallback);
    },
    unfollowUser: function (user) {
      var dispatchCallback = function (current_user) {
        root.AppDispatcher.dispatch({
          actionType: root.UserConstants.CURRENT_USER_RECEIVED,
          current_user: current_user
        });
      };

      ApiUtils.unfollowUser(user, dispatchCallback);
    },
    deleteSession: function () {
      // window.location.assign("/");
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
    },
    receiveSingleTrack: function (trackId) {
      var dispatchCallback = function (track) {
        root.AppDispatcher.dispatch({
          actionType: root.TrackConstants.TRACK_RECEIVED,
          track: track
        });
      };

      ApiUtils.fetchTrack(trackId, dispatchCallback);
    },
    uploadTrack: function (uploadData) {
      var dispatchCallback = function (track) {
        root.AppDispatcher.dispatch({
          actionType: root.TrackConstants.TRACK_CREATED,
          track: track
        });
      };
      
      ApiUtils.uploadTrackToCloudinary(uploadData, dispatchCallback);
    }
  };
})(this);