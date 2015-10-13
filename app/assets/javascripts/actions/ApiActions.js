(function (root) {
  if (typeof root.ApiActions === "undefined") {
    root.ApiActions = {};
  }

  root.ApiActions = {
    receiveSingleUser: function (userId) {
      var dispatchCallback = function (user) {
        console.log("Dispatching");
        root.AppDispatcher.dispatch({
          actionType: root.UserConstants.USER_RECEIVED,
          user: user
        });
      };

      ApiUtils.fetchUser(userId, dispatchCallback);
    },
    updateSingleUser: function (user, params) {

    },
    deleteSingleUser: function (user) {

    },
    deleteSession: function () {
      window.location.assign("/");
      ApiUtils.destroySession();
    }
  };
})(this);