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
        <h3>
          Find upcoming artists <br/><br/> Explore new sounds<br/><br/>
        </h3>
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
                  <Link to="/users/35">
                    <div className="user-feature">
                      <img src="http://i.imgur.com/iuQrQb7.jpg?1">
                        <h4>Toro Y Moi</h4>
                      </img>
                    </div>
                  </Link>
                </div>
                <div className="col-md-3">
                  <Link to="/users/13">
                    <div className="user-feature">
                      <img src="http://i.imgur.com/Muk75L3.jpg?1"/>
                      <h4>Cashmere Cat</h4>
                    </div>
                  </Link>
                </div>
                <div className="col-md-3">
                  <Link to="/users/21">
                    <div className="user-feature">
                      <img src="http://i.imgur.com/A2e3a5I.jpg?1" />
                      <h4>Future Islands</h4>
                    </div>
                  </Link>
                </div>
                <div className="col-md-3">
                  <Link to="/users/14">
                    <div className="user-feature">
                      <img src="http://i.imgur.com/o6eIUdA.jpg?1" />
                      <h4>Chairlift</h4>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3">
                  <Link to="/users/34">
                    <div className="user-feature">
                      <img src="http://i.imgur.com/ySgnZX5.jpg?1" />
                      <h4>TNGHT</h4>
                    </div>
                  </Link>
                </div>
                <div className="col-md-3">
                  <Link to="/users/22">
                    <div className="user-feature">
                      <img src="http://i.imgur.com/ttPfUsI.jpg" />
                      <h4>Japandroids</h4>
                    </div>
                  </Link>
                </div>
                <div className="col-md-3">
                  <Link to="/users/38">
                    <div className="user-feature">
                      <img src="http://i.imgur.com/89qng9H.jpg?1" />
                      <h4>Youth Lagoon</h4>
                    </div>
                  </Link>
                </div>
                <div className="col-md-3">
                  <Link to="/users/32">
                    <div className="user-feature">
                      <img src="http://i.imgur.com/qQ88bfI.jpg" />
                      <h4>The National</h4>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="description">
                <h3>Join in on the discovery</h3>
                <p>Like songs. Share comments. Create playlists.</p>
                <a href="/sign_up" className="btn btn-primary">
                  Create an account
                </a><br/><br/>
                <p>
                  or, if you already have an account&nbsp;&nbsp;
                  <a href="/sign_in" className="btn btn-primary">
                    Sign In
                  </a>
                </p>
              </div>
            </div>
          </div>
        );
      }
    }
  });
})(this);