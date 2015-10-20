(function (root) {
  if (typeof root.AddToPlaylistButton === "undefined") {

  }

  var Link = ReactRouter.Link;
  
  root.AddToPlaylistButton = React.createClass({
    render: function () {
      var trackId = this.props.trackId;
      return (
        <Link className="btn btn-add-to-playlist btn-danger"
              to={"/playlist-form/" + trackId} >
          +Playlist
        </Link>
      );
    }
  });
})(this);