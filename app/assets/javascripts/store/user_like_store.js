(function (root) {
  if (typeof root.UserLikeStore === "undefined") {
    root.UserLikeStore = {};
  }

  var _userLikes = {},
      resetUserLikes = function (userId, likes) {
        _userLikes[userId] = likes;
      },
      addUserLike = function (userId, like) {

      },
      removeUserLike = function (userId, like) {

      },
      findUserLikeIndex = function (like) {

      },
      CHANGE_EVENT = "CHANGE_EVENT";

  root.UserLikeStore = $.extend({}, EventEmitter.prototype,{
    all: function () {
      return _userLikes;
    },
    findLikes: function (userId) {
      if (typeof _userLikes[userId] === "undefined") {
        return [];
      } else {
        return _userLikes[userId];
      }
    },
    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback)
    },
    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback)
    },
    hasUserLikes: function (userId) {
      return typeof _userLikes[userId] !== "undefined"
    },
    dispatcherId: AppDispatcher.register(function (payload) {
      if (payload.actionType === LikeConstants.USER_LIKES_RECEIVED) {
        resetUserLikes(payload.userId, payload.likes);
        root.UserLikeStore.emit(CHANGE_EVENT);
      } else if (payload.actionType === LikeConstants.LIKE_CREATED) {
        resetUserLikes(payload.userId, payload.likes);
        root.UserLikeStore.emit(CHANGE_EVENT);
      }
    })
  });
})(this);