(function (root) {
  if (typeof root.TrackIndex === "undefined") {
    root.TrackIndex = {};
  }

  root.TrackIndex = React.createClass({
    // componentDidMount: function () {
    //   console.log("Track Index mounted");
    //   if (this.props.tracks.length !== 0) {
    //     TrackActions.resetPlaylist(this.props.tracks);
    //   }
    // },
    // componentWillReceiveProps: function (nextProps) {
    //   if (nextProps.tracks.length !== 0) {
    //     console.log("Receivng props");
    //     console.log(nextProps);
    //     TrackActions.resetPlaylist(nextProps.tracks);
    //   }
    // },
    render: function () {
      return (
        <div className="track-index">
          {
            this.props.tracks.map( function (track) {
              return (
                <TrackIndexItem key={track.id} 
                                track={track} 
                                makeLink={true} />
              );
            })
          }
        </div>
      );
    }
  });
})(this);