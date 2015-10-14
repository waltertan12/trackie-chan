(function (root) {
  if (typeof root.Navbar === "undefined") {
    root.Nav = {};
  }

  var Link = ReactRouter.Link;
  
  root.Navbar = React.createClass({
    logout: function (e) {
      e.preventDefault();
      ApiActions.deleteSession();
    },
    render: function () {
      var navbarRight;

      if (typeof window.currentUser !== "undefined") {
        navbarRight = (
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#">Upload</a></li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><Link to={"/users/" + window.currentUser.id}>Profile</Link></li>
                <li><a href="#">lol</a></li>
                <li><a href="#">so cool</a></li>
                <li role="separator" className="divider"></li>
                <li><a href="#" onClick={this.logout}>Logout</a></li>
              </ul>
              <Link to={"/users/:id"} />
            </li>
          </ul>
        );
      } else {
        navbarRight = (
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#">Upload</a></li>
            <p className="navbar-text">
              <a href="/sessions/new">Sign In</a> 
              &nbsp;or&nbsp; 
              <a href="/users/new">Create an Account</a>
            </p>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a href="#"></a></li>
                <li><a href="#">lol</a></li>
                <li><a href="#">so cool</a></li>
                <li role="separator" className="divider"></li>
                <li><a href="#">what i am even doing...</a></li>
              </ul>
            </li>
          </ul>
        );
      }

      return (
        <nav className="navbar navbar-default">
          <div className="container-fluid">
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
              <form className="navbar-form navbar-left" role="search">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Search"/>
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
              </form>
              {navbarRight}
            </div>
          </div>
        </nav>
      );
    }
  });
})(this);