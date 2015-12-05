(function (root) {
  if (typeof root.UserLikeStore === "undefined") {
    root.UserLikeStore = {};
  }

  var _userLikes = {},
      _placeholderLike = {
        id: -1, 
        title: "", 
        likable_type: "track",
        likable_id: -1,
        artist: ""
      },
      resetUserLikes = function (userId, likes) {
        StoreHelper.resetOuterObject(_userLikes, userId, likes);
      },
      addUserLike = function (userId, like) {
        StoreHelper.adder(_userLikes, userId, like);
      },
      removeUserLike = function (userId, like) {
        StoreHelper.remover(_userLikes, userId, like.id)
      },
      findUserLikeIndex = function (like) {

      },
      CHANGE_EVENT = "CHANGE_EVENT";

  root.UserLikeStore = $.extend({}, EventEmitter.prototype,{
    all: function () {
      return _userLikes;
    },
    findLikes: function (userId) {
      if (typeof _userLikes[userId] !== "undefined") {
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
      switch(payload.actionType) {
        case LikeConstants.USER_LIKES_RECEIVED:
          resetUserLikes(payload.userId, payload.likes);
          root.UserLikeStore.emit(CHANGE_EVENT);
          break;

        case LikeConstants.LIKE_CREATED:
          addUserLike(payload.userId, payload.like);
          root.UserLikeStore.emit(CHANGE_EVENT);
          break;

        case LikeConstants.LIKE_DESTROYED:
          removeUserLike(payload.userId, payload.like);
          root.UserLikeStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);