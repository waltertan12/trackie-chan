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
    updateUser: function (user) {
      $.ajax({
        url: "/api/users/" + user.id,
        type: "PUT",
        dataType: "json",
        success: function (user) {

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
  };
})(this);