(function (root) {
  if (typeof root.TrackPlaylistIndexItem === "undefined") {
    root.TrackPlaylistIndexItem = {};
  }

  var Link = ReactRouter.Link;

  root.TrackPlaylistIndexItem = React.createClass({
    render: function () {
      var playlist = this.props.playlist;
      return (
        <li className="track-playlist-index-item">
          <Link to={"/users/" + 
                    playlist.user_id + 
                    "/playlists/" + 
                    playlist.id}>
            <img src={playlist.image_url} height="25" width="25"/>&nbsp;
            {playlist.title}
          </Link>
        </li>
      );
    }
  })
})(this);