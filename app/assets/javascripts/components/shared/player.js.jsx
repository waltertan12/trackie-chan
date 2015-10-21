(function (root) {
  if (typeof root.Player === "undefined") {
    root.Player = {};
  }

  root.Player = React.createClass({
    getInitialState: function () {
      return {playState: "", info: ""};
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
      var metadata = TrackStore.getCurrentTrackMetadata(),
          info;

      if (typeof metadata !== "undefined" &&
          typeof metadata.title !== "undefined") {
        info = <p>{metadata.title} by {metadata.username}</p>;
      } else {
        info = <p>MUCH jamz MUCH jamz MUCH jamz MUCH jamz</p>;
      }

      if (TrackStore.isATrackCurrentlyPlaying()) {
        this.setState({
          playState: this.pause,
          info: info
        });
      } else {
        this.setState({
          playState: this.play,
          info: info
        });
      }
    },
    handleNext: function () {
      TrackActions.nextTrack();
    },
    handlePrevious: function () {
      TrackActions.previousTrack();
    },
    handlePlay: function () {
      var action;
      if (this.state.playState === this.play) {
        this.setState({
          playState: this.pause
        });
        action = true;
      } else {
        this.setState({playState: this.play});
        action = false;
      }
      TrackActions.playerPlayOrPause(action);
    },
    render: function () {
      var playState = this.state.playState;
      if (TrackStore.hasPlayBeenPressed()) {
        return (
          <div className="music-player">
            <ul>
              <li className="music-player-button previous-button" 
                   onClick={this.handlePrevious}>
                <span className=" glyphicon glyphicon-backward" />
              </li>
              <li className="music-player-button play-button" 
                   onClick={this.handlePlay}>
                {playState}
              </li>
              <li className="music-player-button next-button" 
                   onClick={this.handleNext}>
                <span className=" glyphicon glyphicon-forward" />
              </li>
              <li>
                <strong>
                  {this.state.info}
                </strong>
              </li>
            </ul>
          </div>
        );
      } else {
        return <div/>;
      }
    }
  });
})(this);