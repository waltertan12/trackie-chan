(function (root) {
  if (typeof root.PlaylistIndexItem === "undefined") {
    root.PlaylistIndexItem = {};
  }

  var Link = ReactRouter.Link;

  root.PlaylistIndexItem = React.createClass({
    render: function () {
      var playlist = this.props.playlist,
          tracks = this.props.playlist.tracks;
          link = "/users/" +
                 this.props.playlist.user_id + 
                 "/playlists/" +
                 this.props.playlist.id,
          userLink = "/users/" + this.props.playlist.user_id;
      if (this.props.playlist.tracks.length === 0) {
        return (
          <div className="playlist-index-item">
            <p><Link to={userLink}>{playlist.username}</Link></p>
            <b><Link to={link}>{playlist.title}</Link></b>
            <hr/>
            <ul className="playlist-index-item-track-container">
              <li>This playlist has no tracks</li>
            </ul>
          </div>
        );
      } else {
        return (
          <div className="playlist-index-item">
            <p><Link to={userLink}>{playlist.username}</Link></p>
            <b><Link to={link}>{playlist.title}</Link></b>
            <hr/>
            <ul className="playlist-index-item-track-container">
              {
                tracks.map( function (track) {
                  return (
                    <PlaylistIndexItemTrackItem tracks={tracks}
                                                key={track.id} 
                                                track={track} />
                  );
                }.bind(this))
              }
            </ul>
          </div>
        );
      }
    }
  });
})(this);