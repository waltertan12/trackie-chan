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
    dispatcherID: AppDispatcher.register(function (payload) {
      if(payload.actionType === TrackConstants.TRACKS_RECEIVED) {
        resetTracks(payload.user);
        root.TrackStore.emit(CHANGE_EVENT);
      }
    })
  });
})(this);