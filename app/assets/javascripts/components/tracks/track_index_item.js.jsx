(function (root) {
  if (typeof root.TrackIndexItem === "undefined") {
    root.TrackIndexItem = {};
  }

  root.TrackIndexItem = React.createClass({
    getInitialState: function () {
      var playState;
      if (currentlyPlaying && currentAudio === this.audio) {
        playState = "Pause";
      } else {
        playState = "Play"
      }
      return {playState: playState};
    },
    componentDidMount: function () {
      var audio_url = this.props.track.track_url;
      this.audio = new Audio(audio_url);
      this.playState;

      if (currentlyPlaying && currentAudio === this.audio) {
        this.playState = "Pause";
      } else {
        this.playState = "Play"
      }
      console.log(this.playState);
    },
    playOrPause: function () {
      if (currentlyPlaying) {
        currentlyPlaying = false;
        currentAudio.pause();
        this.setState({playState: "Play"});
      } else {
        currentlyPlaying = true;
        currentAudio = this.audio;
        this.audio.play();
        this.setState({playState: "Pause"});
      }
    },
    render: function () {
      console.log(this.playState);
      return (
        <div className="track-index-item">
          {this.props.track.title}
          <div onClick={this.playOrPause}>{this.state.playState}</div>
        </div>
      );
    }
  });
})(this);