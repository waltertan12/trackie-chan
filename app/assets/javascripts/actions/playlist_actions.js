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

      ApiUtils.fetchPlaylist(playlistId, dispatchCallback);
    }
  };
})(this);