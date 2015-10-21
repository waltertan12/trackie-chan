(function (root) {
  if (root.SearchActions === "undefined") {
    root.SearchActions = {};
  }

  root.SearchActions = {
    receiveQuery: function (query, options) {
      if (typeof options === "undefined") {
        options = "all";
      }

      var dispatchCallback = function (results) {
        AppDispatcher.dispatch({
          actionType: SearchConstants.RESULTS_RECEIVED,
          results: results
        })
      }

      SearchUtils.fetchQuery(query, options, dispatchCallback);
    }
  }
})(this);
