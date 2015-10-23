/* global StoreHelper, PlaylistConstants, $, EventEmitter, AppDispatcher */
(function (root) {
  "use strict";

  if (typeof root.PlaylistStore === "undefined") {
    root.PlaylistStore = {};
  }

  var _placeholderPlaylist = {
        id: -1,
        tracks: [],
        tags: [],
        likes: [],
        title: "",
        description: ""
      },
      
      _playlists = {},

      addPlaylist = function (userId, playlist) {
        StoreHelper.adder(_playlists, userId, playlist);
      },

      removePlaylist = function (userId, playlistId) {
        StoreHelper.remover(_playlists, userId, playlistId);
      },

      resetPlaylist = function (userId, playlist) {
        StoreHelper.resetInnerObject(_playlists, userId, playlist);
      },

      resetUserPlaylists = function (userId, playlist) {
        StoreHelper.resetOuterObject(_playlists, userId, playlist);
      },

      CHANGE_EVENT = "CHANGE_EVENT";

  root.PlaylistStore =  $.extend({}, EventEmitter.prototype,{
    addChangeListener: function (callback) {
      root.PlaylistStore.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
      root.PlaylistStore.removeListener(CHANGE_EVENT, callback);
    },
    all: function () {
      return _playlists;
    },
    findUserPlaylists: function (userId) {
      if (typeof _playlists[userId] === "undefined") {
        return [];
      } else {
        return _playlists[userId];
      }
    },
    findPlaylist: function (userId, playlistId) {
      if (typeof _playlists[userId] === "undefined") {
        return _placeholderPlaylist;
      } else {
        for (var i = 0; i < _playlists[userId].length; i++) {
          if (_playlists[userId][i].id === playlistId) {
            return _playlists[userId][i];
          }
        }
        return _placeholderPlaylist;
      }
    },
    isTrackInPlaylist: function (userId, trackId, playlistId) {
      if (typeof _playlists[userId] === "undefined") {
        return false;
      } else {
        var playlist = root.PlaylistStore.findPlaylist(userId, playlistId);
        for (var i = 0; i < playlist.tracks.length; i++) {
          if (playlist.tracks[i].id === trackId) {
            return true;
          }
        }
      }
      return false;
    },
    dispatchId: AppDispatcher.register(function (payload) {
      switch(payload.actionType) {

        case PlaylistConstants.PLAYLIST_RECEIVED:
          resetPlaylist(payload.userId, payload.playlist);
          root.PlaylistStore.emit(CHANGE_EVENT);
          break;

        case PlaylistConstants.PLAYLISTS_RECEIVED:
          resetUserPlaylists(payload.userId, payload.playlists);
          root.PlaylistStore.emit(CHANGE_EVENT);
          break;

        case PlaylistConstants.PLAYLIST_UPDATED:
          resetPlaylist(payload.playlist.user_id, payload.playlist);
          root.PlaylistStore.emit(CHANGE_EVENT);
          break;

        case PlaylistConstants.PLAYLIST_CREATED:
          var userId = payload.playlist.user_id;
          addPlaylist(userId, payload.playlist);
          root.PlaylistStore.emit(CHANGE_EVENT);
          break;

        case PlaylistConstants.PLAYLIST_DESTROYED:
          var userId = payload.userId,
              playlistId = payload.playlistId;
          removePlaylist(userId, playlistId);
          root.PlaylistStore.emit(CHANGE_EVENT);
          break;
      }
    })
  }); 
})(this);