(function (root) {
  if (typeof root.Dashboard === "undefined") {
    root.Dashboard = {};
  }

  var Link = ReactRouter.Link;

  root.Dashboard = React.createClass({
    getInitialState: function () {
      return {currentUser: UserStore.findUser(window.CURRENT_USER_ID)};
    },
    componentDidMount: function () {
      UserStore.addChangeListener(this.setCurrentUser);
      UserLikeStore.addChangeListener(this.setCurrentUserLikes);
      if (typeof window.CURRENT_USER_ID !== "undefined" &&
          window.CURRENT_USER_ID !== this.state.currentUser.id) {
        this.getCurrentUser();
      }
    },
    componentWillUnmount: function () {
      UserStore.removeChangeListener(this.setCurrentUser);
      UserLikeStore.removeChangeListener(this.setCurrentUserLikes);
    },
    getCurrentUser: function () {
      ApiActions.receiveCurrentUser(window.CURRENT_USER_ID);
    },
    setCurrentUser: function () {
      this.setState({currentUser: UserStore.currentUser()});
    },
    getCurrentUserLikes: function () {

    },
    setCurrentUserLikes: function () {

    },
    render: function () {
      var tagline = (
        <h3>Find your favorite artists <br/> Explore new sounds</h3>
      );
      if(window.CURRENT_USER_ID > 0) {
        return (
          <div className="dashboard row">
            <div className="dashboard-feed-container">
              <h1>Feed</h1>
              <hr/>
              <DashboardFeedIndex />
            </div>
            <CurrentUserSidebar currentUser={this.state.currentUser}/>
          </div>
        );
      } else {
        return (
          <div>
            <div className="jumbotron landing-page">
              {tagline}
              <SearchBar isNav={false}/>
            </div>
            <div className="feature">
              <h2>Listen now:</h2>
              <div className="row">
                <div className="col-md-3">
                  <Link to="users/5">
                    <div className="user-feature">
                      <h4>Chance the Rapper</h4>
                    </div>
                  </Link>
                </div>
                <div className="col-md-3">
                  <Link to="users/6">
                    <div className="user-feature">
                      <h4>Cashmere Cat</h4>
                    </div>
                  </Link>
                </div>
                <div className="col-md-3">
                  <Link to="/">
                    <div className="user-feature">
                      <h4>Good Artist</h4>
                    </div>
                  </Link>
                </div>
                <div className="col-md-3">
                  <Link to="/">
                    <div className="user-feature">
                      <h4>Good Artist</h4>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <Link to="/">
                    <div className="user-feature">
                      <h4>Good Artist</h4>
                    </div>
                  </Link>
                </div>
                <div className="col-md-3">
                  <Link to="/">
                    <div className="user-feature">
                      <h4>Good Artist</h4>
                    </div>
                  </Link>
                </div>
                <div className="col-md-3">
                  <Link to="/">
                    <div className="user-feature">
                      <h4>Good Artist</h4>
                    </div>
                  </Link>
                </div>
                <div className="col-md-3">
                  <Link to="/">
                    <div className="user-feature">
                      <h4>Good Artist</h4>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="description">
                <h3>You gonna have so much FOMO if you do not sign up</h3>
                <p>no lie..</p>
                <a href="/sign_up" className="btn btn-success">
                  Please... sign up
                </a>
                <p>or, if you already have an account</p>
                <a href="/sign_in" className="btn btn-success">
                  Sign In
                </a>
              </div>
            </div>
          </div>
        );
      }
    }
  });
})(this);