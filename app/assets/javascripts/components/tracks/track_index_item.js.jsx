(function (root) {
  if (typeof root.TrackIndexItem === "undefined") {
    root.TrackIndexItem = {};
  }
  var Link = ReactRouter.Link;
  root.TrackIndexItem = React.createClass({
    getInitialState: function () {
      return {playState: ""};
    },
    componentDidMount: function () {
      var audio_url = this.props.track.track_url,
          track = this.props.track;
      this.audio = new Audio(audio_url);
      this.likeState = UserStore.doesCurrentUserLike("Track", track.id);
      var playState;
      if (currentlyPlaying && currentAudio.trackId === this.props.track.id) {
        playState = "Pause";
      } else {
        playState = "Play"
      }
      this.setState({playState: playState});
    },
    // componentWillReceiveProps: function (nextProps) {
    //   var playState;
    //   if (currentlyPlaying && currentAudio.trackId === nextProps.track.id) {
    //     playState = "Pause";
    //   } else {
    //     playState = "Play"
    //   }
    //   this.setState({playState: playState});
    // },
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
      var track = this.props.track,
          trackTitle;

      // Make title linkable
      if (this.props.makeLink) {
        trackTitle = (
          <Link to={"/users/" + track.user_id + "/tracks/" + track.id}>
            {track.title}
          </Link>
        );
      } else {
        trackTitle = track.title;
      }
      return (
        <div className="track-index-item">
          {trackTitle}
          <LikeButton likableType="Track" 
                      likableId={this.props.track.id} />
          <div className="play-button" 
               onClick={this.playOrPause}>
               {this.state.playState}
          </div>
        </div>
      );
    }
  });
})(this);