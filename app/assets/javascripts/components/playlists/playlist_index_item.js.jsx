(function (root) {
  if (typeof root.PlaylistIndexItem === "undefined") {
    root.PlaylistIndexItem = {};
  }

  var Link = ReactRouter.Link;

  root.PlaylistIndexItem = React.createClass({
    render: function () {
      if (this.props.playlist.tracks.length === 0) {
        return <ul><li>No tracks in this playlist</li></ul>;
      } else {
        var playlist = this.props.playlist,
            tracks = this.props.playlist.tracks;
            link = "/users/" +
                   this.props.playlist.user_id + 
                   "/playlists/" +
                   this.props.playlist.id;
        return (
          <div className="playlist-index-item">
            <Link to={link}>{playlist.title}</Link>
            <ul className="playlist-index-item-track-container">
              {
                tracks.map( function (track) {
                  return (
                    <PlaylistIndexItemTrackItem key={track.id} 
                                                track={track} />
                  );
                })
              }
            </ul>
          </div>
        );
      }
    }
  });
})(this);