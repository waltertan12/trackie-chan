(function (root) {
  if (typeof root.Player === "undefined") {
    root.Player = {};
  }

  root.Player = React.createClass({
    getInitialState: function () {
      return {playState: "", trackName: ""};
    },
    componentDidMount: function () {
      TrackStore.addPlaylistListener(this.setPlayState);

      if (TrackStore.isATrackCurrentlyPlaying()) {
        this.setState({
          playState: "Pause"
        });
      } else {
        this.setState({
          playState: "Play"
        });
      }
    },
    componentWillUnmount: function () {
      TrackStore.removePlaylistListener(this.setPlayState);
    },
    setPlayState: function () {
      if (TrackStore.isATrackCurrentlyPlaying()) {
        this.setState({
          playState: "Pause"
        });
      } else {
        this.setState({
          playState: "Play" 
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
      if (this.state.playState === "Play") {
        this.setState({playState: "Pause"});
        action = true;
      } else {
        this.setState({playState: "Play"});
        action = false;
      }
      TrackActions.playerPlayOrPause(action);
    },
    render: function () {
      var playState = this.state.playState;
      return (
        <ul className="music-player">
          <li className="previous-button" 
               onClick={this.handlePrevious}>
            Previous
          </li>
          <li className="play-button" 
               onClick={this.handlePlay}>
            {playState}
          </li>
          <li className="next-button" 
               onClick={this.handleNext}>
            Next
          </li>
        </ul>
      );
    }
  });
})(this);