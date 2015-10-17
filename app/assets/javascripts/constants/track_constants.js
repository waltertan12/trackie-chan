(function (root) {
  if (typeof root.TrackConstants === "undefined") {
    root.TrackConstants = {}
  }

  root.TrackConstants = {
    TRACKS_RECEIVED: "TRACKS_RECEIVED",
    TRACK_RECEIVED: "TRACK_RECEIVED",
    TRACK_CREATED: "TRACK_CREATED",
    TRACK_PROGRESS: "TRACK_PROGRESS"
  };

})(this);