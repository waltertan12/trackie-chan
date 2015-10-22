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
    createPlaylist: function (data, redirect) {
      var dispatchCallback = function (playlist) {
        AppDispatcher.dispatch({
          actionType: PlaylistConstants.PLAYLIST_CREATED,
          playlist: playlist
        })
      };

      PlaylistUtils.createPlaylist(
        data,
        dispatchCallback,
        redirect
      );
    },
    updatePlaylist: function (playlist, redirect) {
      var dispatchCallback = function (playlist) {
        AppDispatcher.dispatch({
          actionType: PlaylistConstants.PLAYLIST_UPDATED,
          playlist: playlist
        })
      };

      PlaylistUtils.updatePlaylist(
        playlist, 
        dispatchCallback, 
        redirect
      );
    },
    destroyPlaylist: function (playlistId, redirect) {
      var dispatchCallback = function (playlistData) {
        AppDispatcher.dispatch({
          actionType: PlaylistConstants.PLAYLIST_DESTROYED,
          userId: playlistData.user_id,
          playlistId: playlistData.id
        })
      };

      PlaylistUtils.destroyPlaylist(
        playlistId, 
        dispatchCallback, 
        redirect
      );
    }
  };
})(this);