(function (root) {
  if (typeof root.LikeActions === "undefined") {
    root.LikeActions = {};
  }

  root.LikeActions = {
    receiveUserLikes: function (userId) {
      var dispatchCallback = function (userId, likes) {
        AppDispatcher.dispatch({
          actionType: LikeConstants.USER_LIKES_RECEIVED,
          userId: userId,
          likes: likes
        });
      };

      LikeUtils.fetchUserLikes(userId, dispatchCallback);
    },
    like: function (likableType, likableId) {
      var dispatchCallback = function (like) {
        AppDispatcher.dispatch({
          actionType: LikeConstants.LIKE_CREATED,
          userId: like.user_id,
          like: like
        });
      };

      LikeUtils.createLike(likableType, likableId, dispatchCallback);
    },
    unlike: function (likableType, likableId) {
      var dispatchCallback = function (like) {
        AppDispatcher.dispatch({
          actionType: LikeConstants.LIKE_DESTROYED,
          userId: like.user_id,
          like: like
        });
      };

      LikeUtils.destroyLike(likableType, likableId, dispatchCallback);
    }
  };
})(this);