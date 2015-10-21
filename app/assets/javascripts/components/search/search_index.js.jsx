(function (root) {
  if (root.SearchIndex === "undefined") {
    root.SearchIndex = {};
  }

  root.SearchIndex = React.createClass({
    getInitialState: function () {
      return {results: []};
    },
    componentDidMount: function () {
      SearchStore.addChangeListener(this.setResults);
    },
    componentWillUnmount: function () {
      SearchStore.removeChangeListener(this.setResults);
    },
    setResults: function () {
      this.setState({results: SearchStore.results()});
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
          <h1>Searching</h1>
          <ul>
            {resultComponents}
          </ul>
        </div>
      );
    }
  });
})(this);