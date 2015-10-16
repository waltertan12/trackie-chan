(function (root) {
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

      ApiUtils.fetchTracks(userId, dispatchCallback);
    },
    receiveSingleTrack: function (trackId) {
      var dispatchCallback = function (userId, track) {
        root.AppDispatcher.dispatch({
          actionType: root.TrackConstants.TRACK_RECEIVED,
          userId: userId,
          track: track
        });
      };

      ApiUtils.fetchTrack(trackId, dispatchCallback);
    },
    uploadTrack: function (uploadData) {
      var dispatchCallback = function (track) {
        root.AppDispatcher.dispatch({
          actionType: root.TrackConstants.TRACK_CREATED,
          userId: track.user_id,
          track: track
        });
      };
      
      ApiUtils.uploadTrackToCloudinary(uploadData, dispatchCallback);
    }
  };
})(this);