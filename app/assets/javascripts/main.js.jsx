$(function () {
  var root = document.getElementById("content");
  var Route = ReactRouter.Route;
  var Router = ReactRouter.Router;
  var Link = ReactRouter.Link;
  var IndexRoute = ReactRouter.IndexRoute;

  var App = React.createClass({
    render: function () {
      return (
        <div>
          <Navbar/>
          <div className="main container">
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
          <Route path=":userId/playlists/:playlistId" 
                 component={PlaylistShow}/>
          <Route path=":userId/playlists/:playlistId/edit" 
                 component={PlaylistEdit}/>
          <Route path=":userId/tracks/:trackId/playlist-form" 
                 component={PlaylistForm}/>
          <Route path=":userId/tracks/:trackId/edit" component={TrackEdit} />
      </Route>
      <Route path="tracks">
        <Route path="upload" component={TrackUpload}/>
        <Route path="progress" component={UploadProgress} />
      </Route>
      <Route path="search" component={SearchIndex}/>
      <Route path="explore" component={ExploreFeed}/>
    </Route>
  );

  React.render(
    <Router>{routes}</Router>,
    root
  );
});