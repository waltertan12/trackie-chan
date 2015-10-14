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
          <div className="dashboard row">
            <div className="dashboard-feed-container">
              <h2>Feed</h2>
              <DashboardFeedIndex />
            </div>
            <CurrentUserSidebar />
          </div>
        );
      } else {
        return <div></div>;
      }
    }
  });
})(this);