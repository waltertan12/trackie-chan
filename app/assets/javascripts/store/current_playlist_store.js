/* global CurrentPlaylistStore, PlaylistConstants, CurrentPlaylistConstants, AppDispatcher */
(function (root) {
  "use strict";

  if (root.CurrentPlaylistStore === "undefined") {
    root.CurrentPlaylistStore = {};
  }

  var _currentTrackNumber = -1,

      _hasPlayBeenPressed = false,

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
    
      _currentAudio = {
        playing: false, 
        trackId: -1, 
        track: new Audio(), 
        playlist: [],
        volume: 0.75
      },

      _nextPlaylist = [],

      resetVolume = function (volume) {
        _currentAudio.volume = volume;
        _currentAudio.track.volume = volume;
      },
      
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

      CURRENT_PLAYLIST_EVENT = "CURRENT_PLAYLIST_EVENT",

      VOLUME_EVENT = "VOLUME_EVENT";

  root.CurrentPlaylistStore = $.extend({}, EventEmitter.prototype, {
    addPlaylistListener: function (callback) {
      this.on(CURRENT_PLAYLIST_EVENT, callback);
    },
    removePlaylistListener: function (callback) {
      this.removeListener(CURRENT_PLAYLIST_EVENT, callback);
    },
    addVolumeListener: function(callback) {
      this.on(VOLUME_EVENT, callback);
    },
    removeVolumeListener: function (callback) {
      this.removeListener(VOLUME_EVENT, callback);
    },
    isATrackCurrentlyPlaying: function () {
      return _currentAudio.playing;
    },
    getCurrentAudio() {
      return _currentAudio;
    },
    getPlaylist: function () {
      return _currentAudio.playlist;
    },
    getNextPlaylist: function () {
      return _nextPlaylist;
    },
    getCurrentTrackId: function () {
      return _currentAudio.trackId;
    },
    getCurrentTrackMetadata: function () {
      return _currentAudio.playlist[_currentTrackNumber];
    },
    setCurrentTrackVolume: function () {
      _currentAudio.track.volume = _currentAudio.volume;
    },
    playTrack: function (track, tracks) {
      _hasPlayBeenPressed = true;
      CurrentPlaylistStore.pauseTrack();
      CurrentPlaylistStore.findTrackInPlaylist(track);

      var tempPlaylist = _currentAudio.playlist.slice();

      if (_currentTrackNumber === -1) {
        _currentAudio.playlist = _nextPlaylist.slice();
        CurrentPlaylistStore.findTrackInPlaylist(track);
      }

      if (_currentTrackNumber === -1 && typeof tracks !== "undefined") {
        _nextPlaylist = tempPlaylist.slice();
        _currentAudio.playlist = tracks;
        CurrentPlaylistStore.findTrackInPlaylist(track);
      }

      var audio_url = _currentAudio.playlist[_currentTrackNumber].track_url;
      var audio = new Audio(audio_url);

      _currentAudio.trackId = track.id;
      _currentAudio.track = audio;

      // Add listener to play next track
      _currentAudio.track.addEventListener("ended", function (e) {
        if ((_currentTrackNumber + 1) < _currentAudio.playlist.length) {
          var newTrack = _currentAudio.playlist[_currentTrackNumber + 1];
          
          CurrentPlaylistStore.playTrack(newTrack);
          CurrentPlaylistStore.emit(CURRENT_PLAYLIST_EVENT);
        }
      }, false);

      _currentAudio.playing = true;
      CurrentPlaylistStore.setCurrentTrackVolume();
      _currentAudio.track.play();
    },
    pauseTrack: function () {
      _currentAudio.playing = false;
      _currentAudio.track.pause();
    },
    nextTrack: function () {
      CurrentPlaylistStore.pauseTrack();
      if ((_currentTrackNumber + 1) < _currentAudio.playlist.length) {
        var newTrack = _currentAudio.playlist[_currentTrackNumber + 1];
        
        CurrentPlaylistStore.playTrack(newTrack);
        CurrentPlaylistStore.emit(CURRENT_PLAYLIST_EVENT);
      }
    },
    previousTrack: function () {
      CurrentPlaylistStore.pauseTrack();
      if ((_currentTrackNumber - 1) >= 0) {
        var newTrack = _currentAudio.playlist[_currentTrackNumber - 1];
        
        CurrentPlaylistStore.playTrack(newTrack);
        CurrentPlaylistStore.emit(CURRENT_PLAYLIST_EVENT);
      }
    },
    playCurrentTrack: function () {
      _currentAudio.playing = true;
      _hasPlayBeenPressed = true;
      if (_currentAudio.trackId === -1) {
        var track = _currentAudio.playlist[0];
        CurrentPlaylistStore.playTrack(track);
      } else {
        _currentAudio.track.play();
      }

    },
    pauseCurrentTrack: function () {
      CurrentPlaylistStore.pauseTrack();
    },
    findTrackInPlaylist: function (track) {
      for (var i = 0; i < _currentAudio.playlist.length; i++) {

        if (parseInt(_currentAudio.playlist[i].id) === parseInt(track.id)) {
          _currentTrackNumber = i;
          return;
        }
      }
      _currentTrackNumber = -1;
    },
    hasPlayBeenPressed: function () {
      return _hasPlayBeenPressed;
    },
    getVolume: function () {
      return _currentAudio.volume;
    },
    dispatcherID: AppDispatcher.register( function (payload) {
      switch(payload.actionType) {
        case TrackConstants.TRACKS_RECEIVED:
          if (!CurrentPlaylistStore.isATrackCurrentlyPlaying()) {
            resetPlaylist(payload.tracks);
          } else {
            _nextPlaylist = payload.tracks;
          }
          break;

        case TrackConstants.TRACK_RECEIVED:
          if (!CurrentPlaylistStore.isATrackCurrentlyPlaying()) {
            resetPlaylist([payload.track]);
          } else {
            _nextPlaylist = [payload.track];
          }
          break;

        case CurrentPlaylistConstants.RESET_PLAYLIST:
          if (!CurrentPlaylistStore.isATrackCurrentlyPlaying()) {
            resetPlaylist(payload.tracks);
          } else {
            _nextPlaylist = payload.tracks;
          }

          CurrentPlaylistStore.emit(CURRENT_PLAYLIST_EVENT);
          break;

        case CurrentPlaylistConstants.PLAY_TRACK:
          CurrentPlaylistStore.playTrack(payload.track, payload.tracks);

          CurrentPlaylistStore.emit(CURRENT_PLAYLIST_EVENT);
          break;

        case CurrentPlaylistConstants.PLAY_CURRENT_TRACK:
          CurrentPlaylistStore.playCurrentTrack();

          CurrentPlaylistStore.emit(CURRENT_PLAYLIST_EVENT);
          break;

        case CurrentPlaylistConstants.PAUSE_CURRENT_TRACK:
          CurrentPlaylistStore.pauseCurrentTrack();

          CurrentPlaylistStore.emit(CURRENT_PLAYLIST_EVENT);
          break;

        case CurrentPlaylistConstants.PAUSE_TRACK:
          CurrentPlaylistStore.pauseTrack();

          CurrentPlaylistStore.emit(CURRENT_PLAYLIST_EVENT);
          break;

        case CurrentPlaylistConstants.NEXT_TRACK:
          CurrentPlaylistStore.nextTrack();

          CurrentPlaylistStore.emit(CURRENT_PLAYLIST_EVENT);
          break;

        case CurrentPlaylistConstants.PREVIOUS_TRACK:
          CurrentPlaylistStore.previousTrack();

          CurrentPlaylistStore.emit(CURRENT_PLAYLIST_EVENT);
          break;

        case PlaylistConstants.PLAYLIST_RECEIVED:
          resetPlaylist(payload.playlist.tracks);
          
          CurrentPlaylistStore.emit(CURRENT_PLAYLIST_EVENT);
          break;

        case CurrentPlaylistConstants.VOLUME_CHANGED:
          resetVolume(payload.volume);

          CurrentPlaylistStore.emit(VOLUME_EVENT);
          break;
      }
    })
  });
})(this);