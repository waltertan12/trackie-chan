(function (root) {
  if (typeof root.ApiActions === "undefined") {
    root.ApiActions = {};
  }

  root.ApiActions = {
    receiveSingleUser: function (userId) {
      console.log("ApiActions");
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
  };
})(this);