(function (root) {
  if (typeof root.FeedUtils === "undefined") {
    root.FeedUtils = {};
  }

  root.FeedUtils = {
    fetchUserFeed: function (callback) {
      $.ajax({
        url: "/api/feeds/user",
        type: "GET",
        dataType: "json",
        success: function (feed) {
          callback(feed);
        },
        error: function (err) {
          console.log(err);
        }
      })
    },
    fetchExploreFeed: function (callback) {
      $.ajax({
        url: "/api/feeds/explore",
        type: "GET",
        dataType: "json",
        success: function (feed) {
          callback(feed);
        },
        error: function (err) {
          console.log(err);
        }
      })
    }
  }

})(this);