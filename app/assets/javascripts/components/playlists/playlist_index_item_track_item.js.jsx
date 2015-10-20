(function (root) {
  if (typeof root.PlaylistIndexItemTrackItem === "undefined") {
    root.PlaylistIndexItemTrackItem = {};
  }

  root.PlaylistIndexItemTrackItem = React.createClass({
    render: function () {
      var track = this.props.track;
      return (
        <li className="playlist-index-item-track-item">
          <div className="play-button">Play</div>
          {track.title} by {track.username}
        </li>
      );
    }
  });
})(this);