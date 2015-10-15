(function (root) {
  if (typeof root.ApiUtils === "undefined") {
    root.ApiUtils = {};
  }

  root.ApiUtils = {
    fetchUser: function (userId, callback) {
      $.ajax({
        url: "/api/users/" + userId,
        type: "GET",
        dataType: "json",
        success: function (user) {
          callback(user);
        },
        error: function (err) {
          console.log(err.responseText);
        }
      })
    },
    updateUser: function (userId, params, callback) {
      $.ajax({
        url: "/api/users/" + userId,
        type: "PUT",
        dataType: "json",
        data: {user: params},
        success: function (user) {
          console.log(user);
          callback(user);
        },
        error: function (err) {
          console.log(err.responseText);
        }
      })
    },
    deleteUser: function (user) {
      $.ajax({
        url: "/api/users/" + user.id,
        type: "DELETE",
        dataType: "json",
        success: function (user) {

        },
        error: function (err) {
          console.log(err.responseText);
        }
      })
    },
    destroySession: function() {
      $.ajax({
        url: "/logout",
        type: "DELETE",
        success: function(response) {
          window.location.assign("/");
        },
        error: function (err) {
          console.log(err.responseText);
        }
      })
    },
    followUser: function (user) {
      $.ajax({
        type: "POST",
        url: "/api/followings",
        data: {followed_id: user.id},
        success: function (follow) {
          console.log("following " + user.username);
        },
        error: function (err) {
          console.log(err.responseText)
        }
      })
    },
    unfollowUser: function (user) {
      $.ajax({
        type: "DELETE",
        url: "/api/followings",
        data: {followed_id: user.id},
        success: function (follow) {
          console.log("unfollowing " + user.username);
        },
        error: function (err) {
          console.log(err.responseText)
        }
      })
    },
    fetchTrack: function (trackId, callback) {
      $.ajax({
        url: ""
      })
    }
  };
})(this);