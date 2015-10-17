(function (root) {
  if (typeof root.UserActions === "undefined") {
    root.UserActions = {};
  }

  root.UserActions = {
    updateUserShow: function (user) {
      AppDispatcher.dispatch({
        actionType: UserConstants.SET_USER_SHOW,
        user: user
      })
    }
  };
})(this);