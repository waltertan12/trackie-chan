(function (root) {
  if (root.FeedStore === "undefined") {
    root.FeedStore = {};
  }

  var _userFeed = [],
      _exploreFeed = [],
      resetUserFeed = function (feed) {
        _userFeed = feed;
      },
      resetExploreFeed = function (feed) {
        _exploreFeed = feed;
      },
      CHANGE_EVENT = "CHANGE_EVENT";

  root.FeedStore = $.extend({}, EventEmitter.prototype, {
    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },
    userFeed: function () {
      return _userFeed;
    },
    exploreFeed: function () {
      return _exploreFeed;
    },
    dispatchId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case FeedConstants.USER_FEED_RECEIVED:
          resetUserFeed(payload.feed);
          FeedStore.emit(CHANGE_EVENT);
          break;
        case FeedConstants.EXPLORE_FEED_RECEIVED:
          resetExploreFeed(payload.feed);
          FeedStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);