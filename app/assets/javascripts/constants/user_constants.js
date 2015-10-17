(function (root) {
  if (typeof root.UserConstants === "undefined") {
    root.UserConstants = {}
  }

  root.UserConstants = {
    CURRENT_USER_RECEIVED: "CURRENT_USER_RECEIVED",
    SET_USER_SHOW: "SET_USER_SHOW",
    USER_RECEIVED: "USER_RECEIVED",
    USER_CREATED: "USER_CREATED",
    USER_UPDATED: "USER_UPDATED"
  };

})(this);