(function (root) {
  if (typeof root.LikeActions === "undefined") {
    root.LikeActions = {};
  }

  root.LikeActions = {
    receiveUserLikes: function (userId) {
      var dispatchCallback = function (userId, likes) {
        AppDispatcher.dispatch({
          actionType: UserLikeConstants.USER_LIKES_RECEIVED,
          userId: userId,
          likes: likes
        });
      };

      LikeUtils.fetchUserLikes(userId, dispatchCallback);
    }
  };
})(this);