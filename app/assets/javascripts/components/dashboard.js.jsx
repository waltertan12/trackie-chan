(function (root) {
  if (typeof root.Dashboard === "undefined") {
    root.Dashboard = {};
  }

  root.Dashboard = React.createClass({
    componentDidMount: function () {
    },
    componentWillUnmount: function () {
    },
    getUser: function () {
    },
    setUser: function () {
    },
    render: function () {
      if(window.currentUser === "1235123sdv#&#Gbsdvba72n987r@&#!8as9d0as9dbfasdf") {
        return (
          <div>
            <div className="jumbotron">
              <h1>Welcome to stuff...</h1>
            </div>
          </div>
        );
      } else {
        return <div></div>;
      }
    }
  });
})(this);