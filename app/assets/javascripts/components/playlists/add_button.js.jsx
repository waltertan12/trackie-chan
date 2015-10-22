(function (root) {
  if (typeof root.AddToPlaylistButton === "undefined") {

  }

  var Link = ReactRouter.Link;
  
  root.AddToPlaylistButton = React.createClass({
    render: function () {
      var trackId = this.props.trackId,
          userId = this.props.userId;
      return (
        <Link className="btn btn-add-to-playlist btn-warning"
              to={"/users/" +  
                  userId + 
                  "/tracks/" +  
                  trackId + 
                  "/playlist-form"} >
          +Playlist
        </Link>
      );
    }
  });
})(this);