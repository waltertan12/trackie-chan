(function (root) {
  if (typeof root.PlaylistActions === "undefined") {
    root.PlaylistActions = {};
  }

  root.PlaylistActions = {
    receivePlaylist: function (playlistId) {
      var dispatchCallback = function (playlist) {
        AppDispatcher.dispatch({
          actionType: PlaylistConstants.PLAYLIST_RECEIVED,
          userId: playlist.user_id,
          playlist: playlist
        });
      }

      PlaylistUtils.fetchPlaylist(playlistId, dispatchCallback);
    },
    receivePlaylists: function (userId) {
      var dispatchCallback = function (userId, playlists) {
        AppDispatcher.dispatch({
          actionType: PlaylistConstants.PLAYLISTS_RECEIVED,
          userId: userId,
          playlists: playlists
        });
      }

      PlaylistUtils.fetchPlaylists(userId, dispatchCallback);
    },
    addTrackToPlaylist: function (trackId, playlistId) {
      var dispatchCallback = function (playlist) {
        AppDispatcher.dispatch({
          actionType: PlaylistConstants.PLAYLIST_UPDATED,
          playlist: playlist
        })
      }

      PlaylistUtils.addTrackToPlaylist(
        trackId,
        playlistId,
        dispatchCallback
      );
    },
    removeTrackFromPlaylist: function (trackId, playlistId) {
      var dispatchCallback = function (playlist) {
        AppDispatcher.dispatch({
          actionType: PlaylistConstants.PLAYLIST_UPDATED,
          playlist: playlist
        })
      }

      PlaylistUtils.removeTrackFromPlaylist(
        trackId,
        playlistId,
        dispatchCallback
      );
    },
    createPlaylist: function (userId) {

    }
  };
})(this);