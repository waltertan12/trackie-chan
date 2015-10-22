(function (root) {
  if (root.SearchActions === "undefined") {
    root.SearchActions = {};
  }

  root.SearchActions = {
    receiveQuery: function (query) {
      if (typeof options === "undefined") {
        options = "all";
      }

      var dispatchCallback = function (results) {
        AppDispatcher.dispatch({
          actionType: SearchConstants.RESULTS_RECEIVED,
          results: results
        })
      }

      SearchUtils.fetchQuery(query, dispatchCallback);
    },
    setOption: function (option) {
      AppDispatcher.dispatch({
        actionType: SearchConstants.OPTION_RECEIVED,
        option: option
      });
    },
    resetOption: function () {
      SearchActions.setOption("all");
    }
  }
})(this);
