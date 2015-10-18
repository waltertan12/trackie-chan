(function (root) {
  if (typeof root.TrackStore === "undefined") {
    root.TrackStore = {};
  }

  var _tracks = {},

      _currentTrackNumber = -1,
      
      _currentAudio = {playing: false, trackId: -1, track: new Audio(), playlist: []},
      
      _placeholderTrack = {
        id: -1, 
        track_url: "",
        title: "",
        description: "",
        image_url: "http://ak-hdl.buzzfed.com/static/enhanced/webdr05/2013/8/1/11/enhanced-buzz-29314-1375372673-18.jpg",
        username: "",
        comments: [],
        likes: [],
        tags: []
      },
      
      _lastUploadedTrack = _placeholderTrack,
      
      _progress = 0,
      
      resetPlaylist = function (tracks) {
        _currentAudio.playlist = tracks;
      },
      
      addSongToCurrentAudio = function (track) {
        _currentAudio.playlist.push(track);
      },
      
      removeSongFromCurrentAudio = function (track) {
        var playlist = _currentAudio.playlist;

        for (var i = 0; i < playlist.length; i++) {
          if (playlist[i].id === track.id) {
            playlist.splice(i, 1);
          }
        }
      },
      
      resetProgress = function (progress) {
        _progress = parseFloat(progress);
      },
      
      resetTracks = function (userId, tracks) {
        _tracks[userId] = tracks;
      },

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
        _lastUploadedTrack = track;
      },
      
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
      
      UPLOAD_EVENT = "UPLOAD_EVENT",
      CURRENT_PLAYLIST_EVENT = "CURRENT_PLAYLIST_EVENT";

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
    addPlaylistListener: function (callback) {
      this.on(CURRENT_PLAYLIST_EVENT, callback);
    },
    removePlaylistListener: function (callback) {
      this.removeListener(CURRENT_PLAYLIST_EVENT, callback);
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
    isATrackCurrentlyPlaying: function () {
      return _currentAudio.playing;
    },
    getPlaylist: function () {
      return _currentAudio.playlist;
    },
    getCurrentTrackId: function () {
      return _currentAudio.trackId;
    },
    playTrack: function (track) {
      root.TrackStore.pauseTrack();
      root.TrackStore.findTrackInPlaylist(track);
      var audio_url = _currentAudio.playlist[_currentTrackNumber].track_url;
      var audio = new Audio(audio_url);

      _currentAudio.trackId = track.id;
      _currentAudio.track = audio;

      // Add listener to play next track
      _currentAudio.track.addEventListener('ended', function (e) {
        if ((_currentTrackNumber + 1) < _currentAudio.playlist.length) {
          var newTrack = _currentAudio.playlist[_currentTrackNumber + 1];
          
          root.TrackStore.playTrack(newTrack)
          root.TrackStore.emit(CURRENT_PLAYLIST_EVENT);
        }
      }, false);

      _currentAudio.playing = true;
      _currentAudio.track.play();
    },
    pauseTrack: function () {
      _currentAudio.playing = false;
      _currentAudio.track.pause();
    },
    nextTrack: function () {
      root.TrackStore.pauseTrack();
      if ((_currentTrackNumber + 1) < _currentAudio.playlist.length) {
        var newTrack = _currentAudio.playlist[_currentTrackNumber + 1];
        
        root.TrackStore.playTrack(newTrack)
        root.TrackStore.emit(CURRENT_PLAYLIST_EVENT);
      }
    },
    previousTrack: function () {
      root.TrackStore.pauseTrack();
      if ((_currentTrackNumber - 1) >= 0) {
        var newTrack = _currentAudio.playlist[_currentTrackNumber - 1];
        
        root.TrackStore.playTrack(newTrack)
        root.TrackStore.emit(CURRENT_PLAYLIST_EVENT);
      }
    },
    findTrackInPlaylist: function (track) {
      console.log(_currentAudio.playlist);
      for (var i = 0; i < _currentAudio.playlist.length; i++) {

        if (_currentAudio.playlist[i].id === track.id) {
          console.log("Setting current track to" + i);
          _currentTrackNumber = i;
        }
      }
    },
    dispatcherID: AppDispatcher.register(function (payload) {
      if(payload.actionType === TrackConstants.TRACKS_RECEIVED) {
        resetTracks(payload.userId, payload.tracks);
        if (!root.TrackStore.isATrackCurrentlyPlaying()) {
          console.log("TrackStore - Resetting tracks");
          console.log(payload.tracks);
          resetPlaylist(payload.tracks);
        }

        root.TrackStore.emit(CHANGE_EVENT);

      } else if(payload.actionType === TrackConstants.TRACK_RECEIVED) {
        storeTrack(payload.userId, payload.track);

        root.TrackStore.emit(CHANGE_EVENT);

      } else if(payload.actionType === TrackConstants.TRACK_CREATED) {
        pushTrack(payload.userId, payload.track);
        resetUploadedTrack(payload.track);

        root.TrackStore.emit(CHANGE_EVENT);

      } else if (payload.actionType === TrackConstants.TRACK_PROGRESS) {
        resetProgress(payload.progress);

        root.TrackStore.emit(UPLOAD_EVENT);

      } else if (payload.actionType === TrackConstants.RESET_PLAYLIST) {
        resetPlaylist(payload.tracks);

        root.TrackStore.emit(CURRENT_PLAYLIST_EVENT);

      } else if (payload.actionType === TrackConstants.PLAY_TRACK) {
        root.TrackStore.playTrack(payload.track);

        root.TrackStore.emit(CURRENT_PLAYLIST_EVENT);

      } else if (payload.actionType === TrackConstants.PAUSE_TRACK) {
        root.TrackStore.pauseTrack();

        root.TrackStore.emit(CURRENT_PLAYLIST_EVENT);
      } else if (payload.actionType === TrackConstants.NEXT_TRACK) {
        root.TrackStore.nextTrack();

        root.TrackStore.emit(CURRENT_PLAYLIST_EVENT);
      } else if (payload.actionType === TrackConstants.PREVIOUS_TRACK) {
        root.TrackStore.previousTrack();

        root.TrackStore.emit(CURRENT_PLAYLIST_EVENT);
      }

    })
  });
})(this);