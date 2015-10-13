(function (root) {
  if (typeof root.Navbar === "undefined") {
    root.Nav = {};
  }

  root.Navbar = React.createClass({
    render: function () {
      return (
        <nav className="navbar navbar-default">
          <div className="container container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="<%= root_url%>">TrackieChan</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="/users/new">
                    Create an Account
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li><a href="/sessions/new">Login</a></li>
                <li className="dropdown">
                  <a href="#" 
                     className="dropdown-toggle" 
                     data-toggle="dropdown" 
                     role="button" 
                     aria-haspopup="true" 
                     aria-expanded="false">
                      Dropdown
                      <span className="caret">
                      </span>
                    </a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">One more separated link</a></li>
                  </ul>
                </li>
              </ul>

              <form className="navbar-form navbar-left" role="search">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Search"/>
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
              </form>
            </div>
          </div>
        </nav>
      );
    }
  });
})(this);


// <ul className="nav navbar-nav navbar-right">
//                 <li><a href="#">Creat an Account</a></li>
//                 <li><a href="#">Login</a></li>
//                 <li className="dropdown">
//                   <a href="#" className="dropdown-toggle" 
//                               data-toggle="dropdown" role="button" 
//                               aria-haspopup="true" 
//                               aria-expanded="false">
//                     Dropdown 
//                     <span className="caret">
//                     </span>
//                   </a>
//                     <ul className="dropdown-menu">
//                       <li><a href="#">Action</a></li>
//                       <li><a href="#">Another action</a></li>
//                       <li><a href="#">Something else here</a></li>
//                       <li role="separator" className="divider"></li>
//                       <li><a href="#">Separated link</a></li>
//                     </ul>
//                 </li>
//               </ul>