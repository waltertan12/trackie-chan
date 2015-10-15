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

      if (currentlyPlaying && 
          currentAudio.trackId === this.props.track.id) {
            console.log("Option 1");
            currentlyPlaying = false;
            currentAudio.audio.pause();
            this.setState({playState: "Play"});
      } else if (currentlyPlaying && 
          currentAudio.trackId !== this.props.track.id) {
            console.log("Option 2");
            currentAudio.audio.pause();
            currentAudio = {trackId: this.props.track.id, audio: this.audio};
            currentAudio.audio.play();
            this.setState({playState: "Pause"});
      }
        else {
        console.log("Option 3");
        currentlyPlaying = true;
        currentAudio = {trackId: this.props.track.id, audio: this.audio};
        currentAudio.audio.play();
        this.setState({playState: "Pause"});
      }
    },
    render: function () {
      return (
        <div className="track-index-item">
          {this.props.track.title}
          <div className="play-button" 
               onClick={this.playOrPause}>
               {this.state.playState}
          </div>
        </div>
      );
    }
  });
})(this);