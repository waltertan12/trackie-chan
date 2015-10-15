(function (root) {
  if (typeof root.TrackStore === "undefined") {
    root.TrackStore = {};
  }

  var _tracks = [],
      resetTracks = function (tracks) {
        _tracks = tracks;
      },
      pushTrack = function (track) {
        _tracks.push(track);
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
        if (_tracks[i].id === parseInt(id)) {
          return _tracks[i];
        }
      };
      return ({
        id: -1, 
        track_url: "",
        title: "",
        description: "",
        image_url: "http://ak-hdl.buzzfed.com/static/enhanced/webdr05/2013/8/1/11/enhanced-buzz-29314-1375372673-18.jpg",
        username: "",
        comments: [],
        likes: []
      });
    },
    dispatcherID: AppDispatcher.register(function (payload) {
      if(payload.actionType === TrackConstants.TRACK_RECEIVED) {
        pushTrack(payload.track);
        root.TrackStore.emit(CHANGE_EVENT);
      }
      if(payload.actionType === TrackConstants.TRACK_CREATED) {
        pushTrack(payload.track);
        root.TrackStore.emit(CHANGE_EVENT);
      }
    })
  });
})(this);