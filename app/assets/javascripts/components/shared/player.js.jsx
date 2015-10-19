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
      var metadata = TrackStore.getCurrentTrackMetadata(),
          info;

      if (typeof metadata.title !== "undefined") {
        info = <marquee>{metadata.title} by {metadata.username}</marquee>;
      } else {
        info = <marquee>MUCH jamz MUCH jamz MUCH jamz MUCH jamz</marquee>;
      }

      if (TrackStore.isATrackCurrentlyPlaying()) {
        this.setState({
          playState: "Pause",
          info: info
        });
      } else {
        this.setState({
          playState: "Play",
          info: info
        });
      }
    },
    componentWillUnmount: function () {
      TrackStore.removePlaylistListener(this.setPlayState);
    },
    setPlayState: function () {
      var metadata = TrackStore.getCurrentTrackMetadata(),
          info;

      if (typeof metadata.title !== "undefined") {
        info = <marquee>{metadata.title} by {metadata.username}</marquee>;
      } else {
        info = <marquee>MUCH jamz MUCH jamz MUCH jamz MUCH jamz</marquee>;
      }

      if (TrackStore.isATrackCurrentlyPlaying()) {
        this.setState({
          playState: "Pause",
          info: info
        });
      } else {
        this.setState({
          playState: "Play",
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
      var playState = this.state.playState,
          metadata = TrackStore.getCurrentTrackMetadata();

      return (
        <div className="music-player">
          <ul>
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
            <li>
              <strong>
                {this.state.info}
              </strong>
            </li>
          </ul>
          
          <marquee direction="left" behavior="scroll">
            wow 
            MOM 
            wow 
            nomom 
            nograon Zone 
            <strong>\/\/o\/\/</strong> 
            souch good song 
            <em>u r artist</em> 
            bohemian lyfe 
          </marquee>
        </div>
      );
    }
  });
})(this);