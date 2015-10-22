(function (root) {
  if (root.SearchStore === "undefined") {
    root.SearchStore = {};
  }

  var _results = [],
      _option = "all",
      resetResults = function (results) {
        _results = results;
      },
      resetOption = function (option) {
        _option = option.toLowerCase();
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
    option: function () {
      return _option;
    },
    dispatchId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case SearchConstants.RESULTS_RECEIVED:
          resetResults(payload.results);
          SearchStore.emit(CHANGE_EVENT);
          break;
        case SearchConstants.OPTION_RECEIVED:
          resetOption(payload.option);
          break;
      }
    })
  });
})(this);