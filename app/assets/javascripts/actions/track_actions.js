(function (root) {
  if (typeof root.TrackActions === "undefined") {
    root.TrackActions = {};
  }

  root.TrackActions = {
    playOrPauseTrack: function (action, track) {
      // Check if track is currrently playing
      // if it is, pause the shit out of it
      // otherwise
      // Dispatch shit to pause all other mounted tracks
      // Then
      // track.play or something
      console.log("Track Action");
      console.log(action);
      console.log("Track");
      console.log(track);

      if (action) {
        AppDispatcher.dispatch({
          actionType: TrackConstants.PLAY_TRACK,
          track: track
        })
      } else {
        AppDispatcher.dispatch({
          actionType: TrackConstants.PAUSE_TRACK,
          track: track
        })
      }
    },
    nextTrack: function () {
      // Iterate to the next audiofile on the TrackStore playlist
      // If there are no tracks... too bad
    },
    resetPlaylist: function (tracks) {
      console.log("Track action resetting playlist");
      AppDispatcher.dispatch({
        actionType: TrackConstants.RESET_PLAYLIST,
        tracks: tracks
      })
    },
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

      var progressCallback = function (progress, userId, trackId) {
        root.AppDispatcher.dispatch({
          actionType: root.TrackConstants.TRACK_PROGRESS,
          userId: userId,
          trackId: trackId,
          progress: progress
        })
      };
      
      ApiUtils.uploadTrackToCloudinary(
        uploadData, 
        dispatchCallback, 
        progressCallback
      );
    }
  };
})(this);