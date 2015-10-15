(function (root) {
  if (typeof root.TrackIndexItem === "undefined") {
    root.TrackIndexItem = {};
  }
  var Link = ReactRouter.Link;
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
    componentDidUpdate: function () {
      var audio_url = this.props.track.track_url;
      this.audio = new Audio(audio_url);
    },
    playOrPause: function () {

      if (currentlyPlaying && 
          currentAudio.trackId === this.props.track.id) {
            currentlyPlaying = false;
            currentAudio.audio.pause();
            this.setState({playState: "Play"});
      } else if (currentlyPlaying && 
          currentAudio.trackId !== this.props.track.id) {
            currentAudio.audio.pause();
            currentAudio = {trackId: this.props.track.id, audio: this.audio};
            currentAudio.audio.play();
            this.setState({playState: "Pause"});
      }
        else {
        currentlyPlaying = true;
        currentAudio = {trackId: this.props.track.id, audio: this.audio};
        currentAudio.audio.play();
        this.setState({playState: "Pause"});
      }
    },
    render: function () {
      var trackTitle;
      if (this.props.makeLink) {
        trackTitle = (
          <Link to={"/tracks/" + this.props.track.id}>
            {this.props.track.title}
          </Link>
        );
      } else {
        trackTitle = this.props.track.title;
      }
      return (
        <div className="track-index-item">
          {trackTitle}
          <div className="play-button" 
               onClick={this.playOrPause}>
               {this.state.playState}
          </div>
        </div>
      );
    }
  });
})(this);