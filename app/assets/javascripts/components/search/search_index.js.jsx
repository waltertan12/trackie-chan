(function (root) {
  if (root.SearchIndex === "undefined") {
    root.SearchIndex = {};
  }

  root.SearchIndex = React.createClass({
    getInitialState: function () {
      return ({
        results: [],
        selected: "all"
      });
    },
    componentDidMount: function () {
      SearchStore.addChangeListener(this.setResults);
      var option = SearchStore.option();
      this.initialize();
    },
    initialize: function () {
      var option = SearchStore.option();

      var node = React.findDOMNode(this.refs[option]);
      node.className = "option-selected";

      this.options = [
        React.findDOMNode(this.refs.all),
        React.findDOMNode(this.refs.tags),
        React.findDOMNode(this.refs.users),
        React.findDOMNode(this.refs.playlists),
        React.findDOMNode(this.refs.tracks)
      ];
    },
    componentWillReceiveProps: function () {
      // switch(this.props.location.options) {
      //   case ""
      // }
      this.initialize();
    },
    componentWillUnmount: function () {
      SearchStore.removeChangeListener(this.setResults);
      SearchActions.resetOption();
    },
    setResults: function () {
      this.setState({results: SearchStore.results()});
    },
    setAllOptionsFalse: function () {
      this.options.forEach( function (option) {
        option.className = "";
      });
    },
    changeOptions: function (e) {
      this.setAllOptionsFalse();
      e.target.className = "option-selected";
      SearchActions.setOption(e.target.innerHTML);
    },
    returnCorrectComponent: function (result, key) {
      switch(result.type) {
        case "Track":
          return (
            <TrackIndexItem key={key} 
                            track={result} 
                            makeLink={true}/>
          );
        case "Playlist":
          return (
            <PlaylistIndexItem key={key} 
                               playlist={result}/>
          );
        case "User":
          return (
            <UserIndexItem key={key}
                           user={result} />
          );
      }
    },
    render: function () {
      var resultComponents;

      if (this.state.results.length === 0) {
        resultComponents = <li>No results :(</li>;
      } else {
        resultComponents = (
          this.state.results.map( function (result, key) {
            return this.returnCorrectComponent(result, key);
          }.bind(this))
        );
      }

      return (
        <div className="search-index">
          <div className="row">
            <div className="search-options col-md-4">
              <h1>Search By</h1>
              <ul>
                <li ref="all" onClick={this.changeOptions}>
                  All
                </li>
                <li ref="tags" onClick={this.changeOptions}>
                  Tags
                </li>
                <li ref="users" onClick={this.changeOptions}>
                  Users
                </li>
                <li ref="playlists" onClick={this.changeOptions}>
                  Playlists
                </li>
                <li ref="tracks" onClick={this.changeOptions}>
                  Tracks
                </li>
              </ul>
            </div>

            <div className="search-results col-md-8">
              <h1>Results for: {this.props.location.query.query}</h1>
              <ul>
                {resultComponents}
              </ul>
            </div>
          </div>
        </div>
      );
    }
  });
})(this);