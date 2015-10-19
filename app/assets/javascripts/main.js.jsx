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
          <Navbar/>
          <div className="container">
            {this.props.children}
          </div>
          <Player />
        </div>
      );
    }
  });

  var routes = (
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="users">
        <Route path="settings" component={UserSettings}/>
        <Route path=":userId" component={UserShow}>
        </Route>
          <Route path=":userId/tracks/:trackId" component={TrackShow}/>
      </Route>
      <Route path="tracks">
        <Route path="upload" component={TrackUpload}/>
        <Route path="progress" component={UploadProgress} />
      </Route>
    </Route>
  );

  React.render(
    <Router>{routes}</Router>,
    root
  );
});