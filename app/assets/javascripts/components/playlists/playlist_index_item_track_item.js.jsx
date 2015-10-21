(function (root) {
  if (typeof root.PlaylistIndexItemTrackItem === "undefined") {
    root.PlaylistIndexItemTrackItem = {};
  }

  root.PlaylistIndexItemTrackItem = React.createClass({
    getInitialState: function () {
      return {playState: ""};
    },
    componentDidMount: function () {
      TrackStore.addPlaylistListener(this.setPlayState);
      this.setPlayState();
      this.pause = <span className='glyphicon glyphicon-pause'/>;
      this.play = <span className='glyphicon glyphicon-play'/>;
    },
    componentWillUnmount: function () {
      TrackStore.removePlaylistListener(this.setPlayState);
    },
    setPlayState: function () {
      if (TrackStore.getCurrentTrackId() === this.props.track.id &&
          TrackStore.isATrackCurrentlyPlaying()) {
        this.setState({playState: this.pause});
      } else if (TrackStore.getCurrentTrackId !== this.props.track.id) {
        this.setState({playState: this.play});
      }
    },
    playOrPause: function () {
      var playState = this.state.playState;

      if (playState === this.play) {
        TrackActions.playOrPauseTrack(
          true, 
          this.props.track, 
          this.props.tracks
        );
        this.setState({playState: this.pause});
      } else {
        TrackActions.playOrPauseTrack(false, this.props.track);
        this.setState({playState: this.play});
      }
    },
    render: function () {
      var track = this.props.track;
      console.log("playlist index item track item");
      console.log(this.props);
      return (
        <div className="playlist-index-item-track-item clearfix">
          <div className="play-button" onClick={this.playOrPause}>
            {this.state.playState}
          </div>
          <b>{track.title}</b> by {track.username}
        </div>
      );
    }
  });
})(this);