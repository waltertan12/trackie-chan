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
    }
  };
})(this);