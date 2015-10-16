(function (root) {
  if (typeof root.LikeUtils === "undefined") {
    root.LikeUtils = {};
  }

  root.LikeUtils = {
    fetchUserLikes: function (userId, callback) {
      $.ajax({
        url: "/api/user_likes",
        type: "GET",
        dataType: "json",
        data: {user_id: userId},
        success: function (likes) {
          callback(userId, likes);
        },
        error: function (err) {
          console.log(error.responseText);
        }
      })
    }
  };
})(this);