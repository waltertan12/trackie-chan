(function (root) {
  if (root.FeedActions === "undefined") {
    root.FeedActions = {};
  }

  root.FeedActions = {
    userFeedPolling: false,
    exploreFeedPolling: false,
    startPolling: function (type) {
      switch(type) {
        case "user":
          if (!FeedActions.userFeedPolling) {
            FeedActions.receiveUserFeed()
            FeedActions.userFeedPolling = true;
            setInterval(FeedActions.receiveUserFeed, 600000);
          }
          break;
        case "explore":
          if (!FeedActions.exploreFeedPolling) {
            FeedActions.receiveExploreFeed()
            FeedActions.exploreFeedPolling = true;
            setInterval(FeedActions.receiveExploreFeed, 600000);
          }
          break;
      }
    },
    receiveUserFeed: function () {
      var dispatchCallback = function (feed) {
        AppDispatcher.dispatch({
          actionType: FeedConstants.USER_FEED_RECEIVED,
          feed: feed
        })
      }
      FeedUtils.fetchUserFeed(dispatchCallback);
    },
    receiveExploreFeed: function () {
      var dispatchCallback = function (feed) {
        AppDispatcher.dispatch({
          actionType: FeedConstants.EXPLORE_FEED_RECEIVED,
          feed: feed
        })
      }
      FeedUtils.fetchExploreFeed(dispatchCallback);
    }
  };
})(this);