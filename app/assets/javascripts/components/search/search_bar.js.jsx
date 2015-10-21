(function (root) {
  if (root.SearchBar === "undefined") {
    root.SearchBar = {};
  }

  root.SearchBar = React.createClass({
    getInitialState: function () {
      return {query: ""};
    },
    updateSearch: function (e) {
      this.setState({query: e.target.value});
    },
    handleSubmit: function (e) {
      e.preventDefault();
      $.ajax({
        url: "api/search",
        type: "GET",
        dataType: "json",
        data: {query: this.state.query, options: "all"},
        success: function (results) {
          console.log(results);
        },
        error: function (err) {
          console.log(err);
        }
      })
    },
    render: function () {
      var classname;

      if (this.props.inNav) {
        classname = "navbar-form navbar-left";
      } else {
        classname = "best-named-class-of-all-time-period";
      }

      return (
        <form className={classname} role="search" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text"
                   className="form-control"
                   placeholder="Search"
                   onChange={this.updateSearch}
                   value={this.state.query} />
          </div>
          <button type="submit" className="btn btn-default">
            Search
          </button>
        </form>
      );
    }
  })
})(this);