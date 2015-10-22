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
          console.log(err.responseText);
        }
      })
    },
    createLike: function (likableType, likableId, callback) {
      $.ajax({
        url: "/api/likes",
        dataType: "json",
        type: "POST",
        data: {
          like: {
            likable_type: likableType,
            likable_id: likableId
          }
        },
        success: function (like) {
          callback(like);
        },
        error: function (err) {
          console.log(err);
          if (err.responseText === "Not logged in error") {
            window.location.assign("/sign_in"); 
          }
        }
      })
    },
    destroyLike: function (likableType, likableId, callback) {
      $.ajax({
        url: "/api/likes/" + likableId,
        dataType: "json",
        type: "DELETE",
        data: {
          like: {
            likable_type: likableType,
            likable_id: likableId
          }
        },
        success: function (like) {
          console.log(like);
          callback(like);
        },
        error: function (err) {
          console.log(err);
          if (err.responseText === "Not logged in error") {
            window.location.assign("/sign_in"); 
          }
        }
      })
    }
  };
})(this);