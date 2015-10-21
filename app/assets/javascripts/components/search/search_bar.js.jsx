(function (root) {
  if (root.SearchBar === "undefined") {
    root.SearchBar = {};
  }

  root.SearchBar = React.createClass({
    mixins: [ReactRouter.History],
    getInitialState: function () {
      return {query: ""};
    },
    updateSearch: function (e) {
      this.setState({query: e.target.value});
    },
    handleSubmit: function (e) {
      e.preventDefault();
      SearchActions.receiveQuery(this.state.query, "all")
      this.setState({query: ""});
      this.history.pushState(null, "/search");
    },
    render: function () {
      var classname;

      if (this.props.inNav) {
        classname = "navbar-form navbar-left";
        return (
          <form className={classname} 
                role="search" 
                onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input type="text"
                     className="form-control"
                     placeholder="Explore..."
                     onChange={this.updateSearch}
                     value={this.state.query} />
            </div>
              <button type="submit" className="btn btn-default">
                <span className="glyphicon glyphicon-search"/>
              </button>
          </form>
        );
      } else {
        classname = "landing-page-search-bar input-group";
        return (
        <form className={classname} role="search" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text"
                   className="form-control"
                   placeholder="Explore..."
                   onChange={this.updateSearch}
                   value={this.state.query} />
          </div>
          <span className="input-group-btn">
            <button type="submit" className="btn btn-default">
              <span className="glyphicon glyphicon-search"/>
            </button>
          </span>
        </form>
      );
      }
    }
  })
})(this);