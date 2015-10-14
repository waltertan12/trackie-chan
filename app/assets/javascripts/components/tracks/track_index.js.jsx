(function (root) {
  if (typeof root.TrackIndex === "undefined") {
    root.TrackIndex = {};
  }

  root.TrackIndex = React.createClass({
    render: function () {
      console.log(this.props);
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