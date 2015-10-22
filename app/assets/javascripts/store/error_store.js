(function(root) {
  'use strict';
  if (typeof root.ErrorStore === "undefined") {
    root.ErrorStore = {};
  }

  var ERROR_CHANGED = 'ERROR_CHANGED';

  var _errors = [];

  var resetErrors = function(errors) {
    _errors = errors;
  };

  root.ErrorStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _errors;
    },

    addChangeListener: function(callback) {
      this.on(ERROR_CHANGED, callback);
    },

    removeChangeListener: function(callback) {
      this.removeListener(ERROR_CHANGED, callback);
    },

    dispatcherID: AppDispatcher.register(function(payload) {
      switch (payload.actionType) {
        case ErrorConstants.ERRORS_RECEIVED:
        resetErrors(payload.errors);
        ErrorStore.emit(ERROR_CHANGED);
        break;
      }
    })
  });
}(this));