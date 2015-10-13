(function (root) {
  if (typeof root.UserConstants === "undefined") {
    root.UserConstants = {}
  }

  root.UserConstants = {
    USER_RECEIVED: "USER_RECEIVED",
    USER_CREATED: "USER_CREATED",
    USER_UPDATED: "USER_UPDATED"
  };

})(this);