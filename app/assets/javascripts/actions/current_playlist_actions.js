(function (root) {
  "use strict";
  if (typeof root.CurrentPlaylistActions === "undefined") {
    root.CurrentPlaylistActions = {};
  }

  root.CurrentPlaylistActions = {
    playOrPauseTrack: function (action, track, optionalTracks) {
      if (action) {
        AppDispatcher.dispatch({
          actionType: CurrentPlaylistConstants.PLAY_TRACK,
          track: track,
          tracks: optionalTracks
        })
      } else {
        AppDispatcher.dispatch({
          actionType: CurrentPlaylistConstants.PAUSE_TRACK,
          track: track,
          tracks: optionalTracks
        })
      }
    },
    playerPlayOrPause: function (action) {
      if (action) {
        AppDispatcher.dispatch({
          actionType: CurrentPlaylistConstants.PLAY_CURRENT_TRACK
        })
      } else {
        AppDispatcher.dispatch({
          actionType: CurrentPlaylistConstants.PAUSE_CURRENT_TRACK
        })
      }
    },
    nextTrack: function () {
      AppDispatcher.dispatch({
        actionType: CurrentPlaylistConstants.NEXT_TRACK
      })
    },
    previousTrack: function () {
      AppDispatcher.dispatch({
        actionType: CurrentPlaylistConstants.PREVIOUS_TRACK
      })
    },
    changeVolume: function (volume) {
      AppDispatcher.dispatch({
        actionType: CurrentPlaylistConstants.VOLUME_CHANGED,
        volume: volume
      })
    },
    resetPlaylist: function (tracks) {
      AppDispatcher.dispatch({
        actionType: CurrentPlaylistConstants.RESET_PLAYLIST,
        tracks: tracks
      })
    }
  };
})(this);