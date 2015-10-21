(function (root) {
  if (root.SearchIndex === "undefined") {
    root.SearchIndex = {};
  }

  root.SearchIndex = React.createClass({
    getInitialState: function () {
      return {results: []};
    },
    returnCorrectComponent: function (result) {

    },
    render: function () {
      var resultComponents;
      if (results.length === 0) {
        resultComponents = <li>You are bad at searching</li>;
      } else {
        resultComponents = (
          this.state.results.map( function (result) {
            return ;
          })
        );
      }
    }
  });
})(this);