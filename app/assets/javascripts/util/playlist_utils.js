(function (root) {
  if (typeof root.PlaylistUtils === "undefined") {
    root.PlaylistUtils = {};
  }

  root.PlaylistUtils = {
    fetchPlaylist: function (playlistId, callback) {
      $.ajax({
        url: "/api/playlists/" + playlistId,
        type: "GET",
        dataType: "json",
        success: function (playlist) {
          callback(playlist);
        },
        error: function (err) {
          console.log(err.responseText);
        }
      })
    },
    fetchPlaylists: function (userId, callback) {
      $.ajax({
        url: "/api/user_playlists/",
        type: "GET",
        dataType: "json",
        data: {user_id: userId},
        success: function (playlists) {
          callback(userId, playlists);
        },
        error: function (err) {

        }
      })
    },
    addTrackToPlaylist: function (trackId, playlistId, callback) {
      $.ajax({
        url: "/api/playlists/add_track",
        data: {track_id: trackId, playlist_id: playlistId},
        type: "POST",
        dataType: "json",
        success: function (playlist) {
          callback(playlist);
        },
        error: function (err) {
          console.log(err.responseText);
          console.log(err);
        }
      })

    },
    removeTrackFromPlaylist: function (trackId, playlistId, callback) {
      $.ajax({
        url: "/api/playlists/remove_track",
        data: {track_id: trackId, playlist_id: playlistId},
        type: "DELETE",
        dataType: "json",
        success: function (playlist) {
          callback(playlist);
        },
        error: function (err) {
          console.log(err.responseText);
          console.log(err);
        }
      })
    },
    createPlaylist: function (data, callback, redirect) {
      $.ajax({
        url: "api/playlists",
        dataType: "json",
        type: "POST",
        data: {
          playlist: data.playlist,
          track_id: data.track_id,
          tags: data.tags
        },
        success: function (playlist) {
          callback(playlist);
          var url = "/users/" + 
                    playlist.user_id + 
                    "/playlists/" + 
                    playlist.id;
          redirect(url);
        },
        error: function (err) {
          ErrorActions.receiveErrors(err.responseJSON);
        }

      })

    }
  };
})(this);