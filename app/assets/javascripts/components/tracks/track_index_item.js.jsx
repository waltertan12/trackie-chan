(function (root) {
  if (typeof root.TrackIndexItem === "undefined") {
    root.TrackIndexItem = {};
  }

  root.TrackIndexItem = React.createClass({
    getInitialState: function () {
      var playState;
      if (currentlyPlaying && currentAudio.trackId === this.props.track.id) {
        playState = "Pause";
      } else {
        playState = "Play"
      }
      return {playState: playState};
    },
    componentDidMount: function () {
      var audio_url = this.props.track.track_url;
      this.audio = new Audio(audio_url);
    },
    playOrPause: function () {
      checkid = this.props.track;
      console.log(this.props.track.id);
      console.log(typeof this.props.track.id);

      if (currentlyPlaying && currentAudio.trackId === this.props.track.id) {
            currentlyPlaying = false;
            // currentAudio = {trackId: this.props.track.id, audio: this.audio};
            currentAudio.audio.pause();
            this.setState({playState: "Play"});
      } else {
        currentlyPlaying = true;
        currentAudio = {trackId: this.props.track.id, audio: this.audio};
        currentAudio.audio.play();
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