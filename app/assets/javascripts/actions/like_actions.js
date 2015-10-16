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
      AppDispatcher.dispatch({
        actionType: LikeConstants.LIKE_CREATED,
        userId: userId,
        likes: likes
      });
    },
    unlike: function (likableType, likableId) {
      AppDispatcher.dispatch({
        actionType: LikeConstants.LIKE_CREATED,
        userId: userId,
        likes: likes
      });
    }
  };
})(this);