(function (root) {
  if (typeof root.PlaylistConstants === "undefined") {
    root.PlaylistConstants = {}
  }

  root.PlaylistConstants = {
    PLAYLIST_RECEIVED: "PLAYLIST_RECEIVED",
    PLAYLISTS_RECEIVED: "PLAYLISTS_RECEIVED",
    PLAYLIST_UPDATED: "PLAYLIST_UPDATED",
    PLAYLIST_DESTROYED: "PLAYLIST_DESTROYED"
  };

})(this);