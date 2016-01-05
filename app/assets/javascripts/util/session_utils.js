(function (root) {
  if (typeof root.SessionUtils === "undefined") {
    root.SessionUtils = {};
  }

  root.SessionUtils = {
    login: function (loginData, callback) {
      $.ajax({
        url: "/api/sessions",
        method: "POST",
        data: {user: loginData},
        success: function (user) {
          callback(user);
        },
        error: function (e) {
          console.log(e.responseText);
        }
      })
    },

    logout: function (callback) {
      $.ajax({
        url: "/api/sessions/" + SessionStore.getUserId(),
        method: "DELETE",
        success: function (data) {
          // window.location.assign("/");
          callback();
          console.log(data);
        },
        error: function (e) {
          console.log(e.responseText);
        }
      })
    }
  };
})(this);