(function (root) {
  if (typeof root.Navbar === "undefined") {
    root.Nav = {};
  }

  var Link = ReactRouter.Link;
  
  root.Navbar = React.createClass({
    getInitialState: function () {
      return {
        currentUser: SessionStore.getUser()
      };
    },
    componentDidMount: function () {
      UserStore.addChangeListener(this.setCurrentUser);
    },
    componentWillUnmount: function () {
      UserStore.removeChangeListener(this.setCurrentUser);
    },
    setCurrentUser: function () {
      this.setState({currentUser: UserStore.currentUser()});
    },
    login: function (e) {
      e.preventDefault();
      ModalActions.showLoginModal();
    },
    logout: function (e) {
      e.preventDefault();
      SessionActions.logout();
    },
    signUp: function (e) {
      e.preventDefault();
      ModalActions.showSignUpModal();
    },
    render: function () {
      var navbarRight;
      if (this.state.currentUser.id > 0) {
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
            <li><a href="#" onClick={this.login}>Upload</a></li>
            <p className="navbar-text">
              <a href="#" onClick={this.login}>Sign In</a> 
              &nbsp;&nbsp;&nbsp;or&nbsp;&nbsp;&nbsp;
              <a href="#" onClick={this.signUp}>Create an Account</a>
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
                <em>TrackieChan</em>
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