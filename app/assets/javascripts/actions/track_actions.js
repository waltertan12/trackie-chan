(function (root) {
  "use strict";

  if (typeof root.TrackActions === "undefined") {
    root.TrackActions = {};
  }

  root.TrackActions = {
    receiveTracks: function (userId) {
      var dispatchCallback = function (userId, tracks) {
        root.AppDispatcher.dispatch({
          actionType: root.TrackConstants.TRACKS_RECEIVED,
          userId: userId,
          tracks: tracks
        });
      };

      TrackUtils.fetchTracks(userId, dispatchCallback);
    },
    receiveSingleTrack: function (trackId) {
      var dispatchCallback = function (userId, track) {
        root.AppDispatcher.dispatch({
          actionType: root.TrackConstants.TRACK_RECEIVED,
          userId: userId,
          track: track
        });
      };

      TrackUtils.fetchTrack(trackId, dispatchCallback);
    },
    uploadTrack: function (uploadData) {
      var dispatchCallback = function (track) {
        root.AppDispatcher.dispatch({
          actionType: root.TrackConstants.TRACK_CREATED,
          userId: track.user_id,
          track: track
        });
      };

      var progressCallback = function (progress, userId, trackId) {
        root.AppDispatcher.dispatch({
          actionType: root.TrackConstants.TRACK_PROGRESS,
          userId: userId,
          trackId: trackId,
          progress: progress
        })
      };
      
      TrackUtils.uploadTrackToCloudinary(
        uploadData, 
        dispatchCallback, 
        progressCallback
      );
    },
    destroyTrack: function (trackData, redirect) {
      var dispatchCallback = function (track) {
        root.AppDispatcher.dispatch({
          actionType: root.TrackConstants.TRACK_DELETED,
          userId: track.user_id,
          track: track
        });
      };

      TrackUtils.destroyTrack(trackData, dispatchCallback, redirect);
    },
    updateTrack: function (trackData, redirect) {
      var dispatchCallback = function (track) {
        root.AppDispatcher.dispatch({
          actionType: root.TrackConstants.TRACK_UPDATED,
          userId: track.user_id,
          trackId: track.id
        });
      };

      TrackUtils.updateTrack(trackData, dispatchCallback, redirect);
    }
  };
})(this);