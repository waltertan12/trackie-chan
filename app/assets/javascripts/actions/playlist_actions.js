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
      var dispatchCallback = function (playlists) {
        AppDispatcher.dispatch({
          actionType: PlaylistConstants.PLAYLISTS_RECEIVED,
          userId: playlist.user_id,
          playlists: playlists
        });
      }

      PlaylistUtils.fetchPlaylists(userId, dispatchCallback);
    }
  };
})(this);