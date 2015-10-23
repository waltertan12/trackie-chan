(function (root) {
  if (typeof root.PlaylistIndexItemTrackItem === "undefined") {
    root.PlaylistIndexItemTrackItem = {};
  }

  root.PlaylistIndexItemTrackItem = React.createClass({
    getInitialState: function () {
      return {playState: ""};
    },
    componentDidMount: function () {
      CurrentPlaylistStore.addPlaylistListener(this.setPlayState);
      this.pause = <span className='glyphicon glyphicon-pause'/>;
      this.play = <span className='glyphicon glyphicon-play'/>;
      this.setPlayState(this.props);
    },
    componentWillReceiveProps: function (nextProps) {
      this.setPlayState(nextProps);
    },
    componentWillUnmount: function () {
      CurrentPlaylistStore.removePlaylistListener(this.setPlayState);
    },
    setPlayState: function (optionalProps) {
      if (typeof optionalProps === "undefined") {
        optionalProps = this.props;
      }
      if (CurrentPlaylistStore.getCurrentTrackId() === optionalProps.track.id && CurrentPlaylistStore.isATrackCurrentlyPlaying()) {
        this.setState({playState: this.pause});
      } else {
        this.setState({playState: this.play});
      }
    },
    playOrPause: function () {
      var playState = this.state.playState;

      if (playState === this.play) {
        CurrentPlaylistActions.playOrPauseTrack(
          true, 
          this.props.track, 
          this.props.tracks
        );
        this.setState({playState: this.pause});
      } else {
        CurrentPlaylistActions.playOrPauseTrack(
          false, 
          this.props.track
        );
        this.setState({playState: this.play});
      }
    },
    render: function () {
      var track = this.props.track;
      return (
        <div className="playlist-index-item-track-item clearfix" 
             onClick={this.playOrPause}>
          <div className="play-button" onClick={this.playOrPause}>
            {this.state.playState}
          </div>
          <b>{track.title}</b> by <b>{track.username}</b>
        </div>
      );
    }
  });
})(this);