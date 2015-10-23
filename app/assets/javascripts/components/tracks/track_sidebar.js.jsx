(function (root) {
  if (typeof root.TrackSidebar === "undefined") {
    root.TrackSidebar = {};
  }

  root.TrackSidebar = React.createClass({
    render: function () {
      var playlistIndex;
      if (this.props.type === "Track") {
        playlistIndex = (
          <TrackPlaylistIndex playlists={this.props.playlists} />
        );
      } else {
        playlistIndex= (
          <div></div>
        );
      }
      return (
        <div className="track-sidebar col-md-4">
          <TrackLikeIndex likes={this.props.likes}/>
          {playlistIndex}
        </div>
      );
    }
  });
})(this);