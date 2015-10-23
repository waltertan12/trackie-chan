(function (root) {
  if (typeof root.Navbar === "undefined") {
    root.Nav = {};
  }

  var Link = ReactRouter.Link;
  
  root.Navbar = React.createClass({
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
    logout: function (e) {
      e.preventDefault();
      ApiActions.deleteSession();
    },
    render: function () {
      var navbarRight;
      if (typeof window.CURRENT_USER_ID !== "undefined") {
        navbarRight = (
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/tracks/upload">Upload</Link></li>
            <li className="dropdown">
              <a href="#" 
                 className="dropdown-toggle" 
                 data-toggle="dropdown" 
                 role="button" 
                 aria-haspopup="true" 
                 aria-expanded="false">
                  {this.state.currentUser.username}
                <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link to={"/users/" + this.state.currentUser.id}>
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to={"/users/settings"}>
                    Settings
                  </Link>
                </li>
                <li role="separator" className="divider"></li>
                <li><a href="#" onClick={this.logout}>Logout</a></li>
              </ul>
            </li>
          </ul>
        );
      } else {
        navbarRight = (
          <ul className="nav navbar-nav navbar-right">
            <li><a href="/sign_up">Upload</a></li>
            <p className="navbar-text">
              <a href="/sign_in">Sign In</a> 
              &nbsp;&nbsp;&nbsp;or&nbsp;&nbsp;&nbsp;
              <a href="/sign_up">Create an Account</a>
            </p>
          </ul>
        );
      }

      return (
        <nav className="navbar-outer">
        <nav className="navbar navbar-default">
          <div className="container-fullwidth">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to={"/"} className="navbar-brand">
                TrackieChan
              </Link>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <SearchBar inNav={true}/>
              <Link className="navbar-text trend-link" to="/explore">
                Trending
              </Link>
              {navbarRight}
            </div>
          </div>
        </nav>
        </nav>
      );
    }
  });
})(this);