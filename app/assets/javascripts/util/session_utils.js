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

        },
        error: function (e) {

        }
      })
    },

    logout: function (callback) {
      $.ajax({
        url: "/api/sessions",
        method: "DELETE",
        success: function (data) {

        },
        error: function (e) {

        }
      })
    }
  };
})(this);