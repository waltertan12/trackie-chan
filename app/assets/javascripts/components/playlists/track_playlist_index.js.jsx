(function (root) {
  if (typeof root.TrackPlaylistIndex === "undefined") {
    root.TrackPlaylistIndex = {};
  }

  root.TrackPlaylistIndex = React.createClass({
    render: function () {
      console.log("Props for playlistindex");
      console.log(this.props);
      var playlistItems;
      if (this.props.playlists.length === 0) {
        playlistItems = <li>This track is not in any playlists</li>
      } else {
        playlistItems = (
          this.props.playlists.map( function (playlist) {
            return (
              <TrackPlaylistIndexItem 
                      key={playlist.id} 
                      playlist={playlist} />
            );
          })
        );
      }
      return (
        <div className="track-playlist-index">
          <h3>Playlists</h3>
          <hr/>
          <ul>
            {playlistItems}
          </ul>
        </div>
      )
    }
  });
})(this);