$(function () {
  console.log("REACT reloading???");
  var root = document.getElementById("content");
  var Route = ReactRouter.Route;
  var Router = ReactRouter.Router;
  var Link = ReactRouter.Link;
  var IndexRoute = ReactRouter.IndexRoute;

  // Globals to see if music is playing...
  // Not sure if it's okay
  currentlyPlaying = false;
  currentAudio = {trackId: -1, audio: new Audio()};

  var App = React.createClass({
    render: function () {
      return (
        <div>
          <Navbar currentUser={window.currentUser}/>
          <div className="container">
            {this.props.children}
          </div>
        </div>
      );
    }
  });

  var routes = (
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="users/:userId" component={UserShow}/>
    </Route>
  );

  React.render(
    <Router currentUser={window.currentUser}>{routes}</Router>,
    root
  );
});