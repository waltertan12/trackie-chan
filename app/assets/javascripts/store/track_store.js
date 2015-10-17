(function (root) {
  if (typeof root.TrackStore === "undefined") {
    root.TrackStore = {};
  }

  var _tracks = {},
      _currentAudio = {playing: false, playlist: []},
      _placeholderTrack = {
        id: -1, 
        track_url: "",
        title: "",
        description: "",
        image_url: "http://ak-hdl.buzzfed.com/static/enhanced/webdr05/2013/8/1/11/enhanced-buzz-29314-1375372673-18.jpg",
        username: "",
        comments: [],
        likes: []
      },
      _lastUploadedTrack = _placeholderTrack,
      _progress = 0,
      resetProgress = function (progress) {
        _progress = parseFloat(progress);
      },
      resetTracks = function (userId, tracks) {
        _tracks[userId] = tracks;
      },
      // Editing / updating a track
      resetTrack = function (userId, track) {
        if (typeof _tracks[userId] === "undefined") {
          _tracks[userId] = [track];
          return true;
        } else {
          for (var i = 0; i < _tracks[userId].length; i++) {
            if (_tracks[userId][i]) {
              _tracks[userId][i] === track;
              return;
            }
          }
          _tracks[userId].push(track);
        }
      },
      resetUploadedTrack = function (track) {
        _uploadedTrackMetadata = track;
      },
      // Uploading a new track
      pushTrack = function (userId, track) {
        if (typeof _tracks[userId] === "undefined") {
          _tracks[userId] = [track];
        } else {
          _tracks[userId].push(track);
        }
      },
      storeTrack = function (userId, track) {
        if (typeof _tracks[userId] === "undefined") {
          _tracks[userId] = [track];
        } else {
          for (var i = 0; i < _tracks[userId].length; i++) {
            if (_tracks[userId][i].id === track.id) {
              _tracks[userId][i] = track;
              return;
            }
          }
          _tracks[userId].push(track);
        }
      },
      CHANGE_EVENT = "CHANGE_EVENT",
      UPLOAD_EVENT = "UPLOAD_EVENT";

  root.TrackStore = $.extend({}, EventEmitter.prototype,{
    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },
    getProgress: function () {
      return _progress;
    },
    addUploadListener: function (callback) {
      this.on(UPLOAD_EVENT, callback);
    },
    removeUploadListener: function (callback) {
      this.removeListener(UPLOAD_EVENT, callback);
    },
    all: function () {
      return _tracks;
    },
    findUserTracks: function (userId) {
      if (typeof _tracks[userId] === "undefined") {
        return [];
      } else {
        return _tracks[userId];
      }
    },
    findTrack: function (userId, trackId) {
      if (typeof _tracks[userId] === "undefined") {
        return _placeholderTrack;
      } else {
        for (var i = 0; i < _tracks[userId].length; i++) {
          if (_tracks[userId][i].id === trackId) {
            return _tracks[userId][i];
          }
        }
        return _placeholderTrack;
      }
    },
    findLastUploadedTrack: function () {
      return _lastUploadedTrack;
    },
    dispatcherID: AppDispatcher.register(function (payload) {
      if(payload.actionType === TrackConstants.TRACKS_RECEIVED) {
        resetTracks(payload.userId, payload.tracks);

        root.TrackStore.emit(CHANGE_EVENT);

      } else if(payload.actionType === TrackConstants.TRACK_RECEIVED) {
        storeTrack(payload.userId, payload.track);

        root.TrackStore.emit(CHANGE_EVENT);

      } else if(payload.actionType === TrackConstants.TRACK_CREATED) {
        pushTrack(payload.userId, payload.track);
        resetUploadedTrackMetadata(payload.track);

        root.TrackStore.emit(CHANGE_EVENT);

      } else if (payload.actionType === TrackConstants.TRACK_PROGRESS) {
        resetProgress(payload.progress);

        root.TrackStore.emit(UPLOAD_EVENT);
      }
    })
  });
})(this);