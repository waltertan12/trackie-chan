(function (root) {
  if (typeof root.PlaylistStore === "undefined") {
    root.PlaylistStore = {};
  }
  var _placeholderPlaylist = {
        id: -1,
        tracks: [],
        likes: [],
        title: "",
        description: ""
      },
      _playlists = {},
      resetUserPlaylists = function (userId, playlist) {
        _playlists[userId] = playlist;
      },
      resetPlaylist = function (userId, playlist) {

      };

  root.PlaylistStore =  $.extend({}, EventEmitter.prototype,{
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
        for (var i = 0; i < _placeholderPlaylist[userId].length; i++) {
          if (_placeholderPlaylist[userId][i] === playlistId) {
            return _playlists[userId][i];
          }
        }
        return _placeholderPlaylist;
      }
    }
  }); 
})(this);