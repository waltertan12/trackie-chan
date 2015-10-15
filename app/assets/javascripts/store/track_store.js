(function (root) {
  if (typeof root.TrackStore === "undefined") {
    root.TrackStore = {};
  }

  var _tracks = [],
      resetTracks = function (tracks) {
        _tracks = tracks;
      },
      CHANGE_EVENT = "CHANGE_EVENT";

  root.TrackStore = $.extend({}, EventEmitter.prototype,{
    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },
    all: function () {
      return _tracks;
    },
    find: function (id) {
      for (var i = 0; i < _tracks.length; i++) {
        if (_tracks[i].id === id) {
          return _tracks[i];
        }
      };
    },
    pushTrack: function (track) {
      _tracks.push(track);
    }
    dispatcherID: AppDispatcher.register(function (payload) {
      if(payload.actionType === TrackConstants.TRACKS_RECEIVED) {
        resetTracks(payload.user);
        root.TrackStore.emit(CHANGE_EVENT);
      }
      if(payload.actionType === TrackConstants.TRACK_CREATED) {
        appendTrack(payload.track)
        root.TrackStore.emit(CHANGE_EVENT);
      }
    })
  });
})(this);