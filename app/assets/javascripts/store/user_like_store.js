(function (root) {
  if (typeof root.UserLikeStore === "undefined") {
    root.UserLikeStore = {};
  }

  var _userLikes = {},
      resetUserLikes = function (userId, likes) {
        _userLikes[userId] = likes;
      },
      CHANGE_EVENT = "CHANGE_EVENT";

  root.UserLikeStore = {
    
    dispatcherId: AppDispatcher.register(function (payload) {

    })
  };
})(this);