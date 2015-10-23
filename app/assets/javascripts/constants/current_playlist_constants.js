(function (root) {
  if (typeof root.CurrentPlaylistConstants === "undefined") {
    root.CurrentPlaylistConstants = {};
  }

  root.CurrentPlaylistConstants = {
    RESET_PLAYLIST: "RESET_PLAYLIST",
    PLAY_TRACK: "PLAY_TRACK",
    PLAY_CURRENT_TRACK: "PLAY_CURRENT_TRACK",
    PAUSE_CURRENT_TRACK: "PAUSE_CURRENT_TRACK",
    PAUSE_TRACK: "PAUSE_TRACK",
    NEXT_TRACK: "NEXT_TRACK",
    PREVIOUS_TRACK: "PREVIOUS_TRACK",
    VOLUME_CHANGED: "VOLUME_CHANGED"
  }
})(this);