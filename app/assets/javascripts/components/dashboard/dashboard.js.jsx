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
        return (
          <div>
            <div className="jumbotron landing-page">
              wow so many songs. good muzik. eargasm
              aka trackiechan
              <input type="search" placeholder="Explore :(" className="form-control"/>
            </div>
            <div className="feature">
              <div className="row">
                <div className="col-md-3 user-feature">
                  Good Artist
                </div>
                <div className="col-md-3 user-feature">
                  Good Artist
                </div>
                <div className="col-md-3 user-feature">
                  Good Artist
                </div>
                <div className="col-md-3 user-feature">
                  Good Artist
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 user-feature">
                  Good Artist
                </div>
                <div className="col-md-3 user-feature">
                  Good Artist
                </div>
                <div className="col-md-3 user-feature">
                  Good Artist
                </div>
                <div className="col-md-3 user-feature">
                  Good Artist
                </div>
              </div>
              <div class="description">
                <h3>You gonna have so much FOMO if you do not sign up</h3>
                <p>no lie..</p>
                <a href="/users/new" className="btn btn-success">
                  Please... sign up
                </a>
              </div>
            </div>
          </div>
        );
      }
    }
  });
})(this);