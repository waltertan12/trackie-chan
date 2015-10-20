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
    }
  };
})(this);