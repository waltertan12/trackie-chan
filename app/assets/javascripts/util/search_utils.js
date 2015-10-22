(function (root) {
  if (typeof root.SearchUtils === "undefined") {
    root.SearchUtils = {};
  }

  root.SearchUtils = {
    fetchQuery: function (query, callback) {
      $.ajax({
        url: "api/search",
        type: "GET",
        dataType: "json",
        data: query,
        success: function (results) {
          callback(results);
        },
        error: function (err) {
          console.log(err.responseText);
        }
      })
    }
  }
})(this);