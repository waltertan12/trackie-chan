(function (root) {
  if (typeof root.SearchUtils === "undefined") {
    root.SearchUtils = {};
  }

  root.SearchUtils = {
    fetchQuery: function (query, options, callback) {
      $.ajax({
        url: "api/search",
        type: "GET",
        dataType: "json",
        data: {query: query, options: options},
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