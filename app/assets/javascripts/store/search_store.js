(function (root) {
  if (root.SearchStore === "undefined") {
    root.SearchStore = {};
  }

  var _results = [],
      resetResults = function (results) {
        _results = results;
      },
      CHANGE_EVENT = "CHANGE_EVENT";

  root.SearchStore = $.extend({}, EventEmitter.prototype, {
    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },
    results: function () {
      return _results.slice();
    },
    dispatchId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case SearchConstants.RESULTS_RECEIVED:
          resetResults(payload.results);
          SearchStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);