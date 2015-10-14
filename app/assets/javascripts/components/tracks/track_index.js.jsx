(function (root) {
  if (typeof root.TrackIndex === "undefined") {
    root.TrackIndex = {};
  }

  root.TrackIndex = React.createClass({
    render: function () {
      return (
        <div className="track-index">
          {
            this.props.tracks.map( function (track) {
              return <TrackIndexItem key={track.id} track={track} />;
            })
          }
        </div>
      );
    }
  });
})(this);