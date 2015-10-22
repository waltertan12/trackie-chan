(function (root) {
  if (typeof root.ErrorActions === "undefined") {
    root.ErrorActions = {};
  }

  root.ErrorActions = {
    receiveErrors: function(errors) {
      AppDispatcher.dispatch({
        actionType: ErrorConstants.ERRORS_RECEIVED,
        errors: errors
      });
    }
  };
})(this);