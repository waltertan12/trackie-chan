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
      console.log("render dashboard");
      if(window.currentUser === "1235123sdv#&#Gbsdvba72n987r@&#!8as9d0as9dbfasdf") {
        return (
          <div>
            <h2>Feed</h2>
            <DashboardFeedIndex />
            <CurrentUserSidebar />
          </div>
        );
      } else {
        return <div></div>;
      }
    }
  });
})(this);