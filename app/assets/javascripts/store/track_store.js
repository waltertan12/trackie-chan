/* global $, EventEmitter, AppDispatcher, TrackConstants, StoreHelper */
(function (root) {
  "use strict";
  if (typeof root.TrackStore === "undefined") {
    root.TrackStore = {};
  }

  var _tracks = {},
      
      _placeholderTrack = {
        id: -1, 
        track_url: "",
        title: "",
        description: "",
        image_url: "http://ak-hdl.buzzfed.com/static/enhanced/webdr05/2013/8/1/11/enhanced-buzz-29314-1375372673-18.jpg",
        username: "",
        playlists: [],
        comments: [],
        likes: [],
        tags: []
      },
      
      _lastUploadedTrack = _placeholderTrack,
      
      _progress = 0,
      
      resetProgress = function (progress) {
        _progress = parseFloat(progress);
      },
      
      resetTracks = function (userId, tracks) {
        _tracks[userId] = tracks;
      },

      resetTrack = function (userId, track) {
        StoreHelper.resetInnerObject(_tracks, userId, track);
      },
      
      resetUploadedTrack = function (track) {
        _lastUploadedTrack = track;
      },
      
      pushTrack = function (userId, track) {
        StoreHelper.adder(_tracks, userId, track);
      },
      
      storeTrack = function (userId, track) {
        StoreHelper.resetInnerObject(_tracks, userId, track);
      },

      removeTrack = function (userId, trackId) {
        StoreHelper.remover(_tracks, userId, trackId);
      },
      
      CHANGE_EVENT = "CHANGE_EVENT",
      
      UPLOAD_EVENT = "UPLOAD_EVENT",

      CURRENT_PLAYLIST_EVENT = "CURRENT_PLAYLIST_EVENT",

      VOLUME_EVENT = "VOLUME_EVENT";

  root.TrackStore = $.extend({}, EventEmitter.prototype,{
    // Start listeners
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
    addVolumeListener: function (callback) {
      this.on(VOLUME_EVENT, callback);
    },
    removeVolumeListener: function (callback) {
      this.removeListener(VOLUME_EVENT, callback);
    },
    // End listeners

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
    addLikeToTrack: function (trackId, user) {
      var track = root.TrackStore.findTrack(user.id, trackId);

      if (track.id !== -1) {
        var like = {
          user_id: user.id, 
          username: user.username,
          image_url: user.image_url
        };
        track.likes.push(like);
      }
    },
    removeLikeFromTrack: function (trackId, user) {
      var track = root.TrackStore.findTrack(user.id, trackId);

      if (track.id !== -1) {
        var likeIndex = root.TrackStore.findLikeIndex(track);

        track.like.splice(likeIndex, 1);
      }
    },
    findLastUploadedTrack: function () {
      return _lastUploadedTrack;
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case TrackConstants.TRACKS_RECEIVED:
          resetTracks(payload.userId, payload.tracks);

          root.TrackStore.emit(CHANGE_EVENT);
          break;

        case TrackConstants.TRACK_RECEIVED:
          storeTrack(payload.userId, payload.track);

          root.TrackStore.emit(CHANGE_EVENT);
          break;

        case TrackConstants.TRACK_CREATED:
          pushTrack(payload.userId, payload.track);
          resetUploadedTrack(payload.track);

          root.TrackStore.emit(CHANGE_EVENT);
          break;

        case TrackConstants.TRACK_PROGRESS:
          resetProgress(payload.progress);

          root.TrackStore.emit(UPLOAD_EVENT);
          break;

        case TrackConstants.TRACK_UPDATED:
          resetTrack(payload.userId, payload.track);

          root.TrackStore.emit(CHANGE_EVENT);
          break;
          
        case TrackConstants.TRACK_DESTROYED:
          removeTrack(payload.userId, payload.trackId);

          root.TrackStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);