(function (root) {
  if (typeof root.Dashboard === "undefined") {
    root.Dashboard = {};
  }

  root.Dashboard = React.createClass({
    getInitialState: function () {
      return {currentUser: UserStore.findUser(window.CURRENT_USER_ID)};
    },
    componentDidMount: function () {
      UserStore.addChangeListener(this.setCurrentUser);
      if (typeof window.CURRENT_USER_ID !== "undefined" &&
          window.CURRENT_USER_ID !== this.state.currentUser.id) {
        this.getCurrentUser();
      }
    },
    componentWillUnmount: function () {
      UserStore.removeChangeListener(this.setCurrentUser);
    },
    getCurrentUser: function () {
      ApiActions.receiveCurrentUser(window.CURRENT_USER_ID);
    },
    setCurrentUser: function () {
      this.setState({currentUser: UserStore.currentUser()});
    },
    render: function () {
      if(window.CURRENT_USER_ID > 0) {
        return (
          <div className="dashboard row">
            <div className="dashboard-feed-container">
              <h2>Feed</h2>
              <DashboardFeedIndex />
            </div>
            <CurrentUserSidebar currentUser={this.state.currentUser}/>
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
              <div className="description">
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