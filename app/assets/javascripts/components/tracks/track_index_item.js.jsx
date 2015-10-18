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
      TrackStore.addPlaylistListener(this.setPlayState);
      // var audio_url = this.props.track.track_url,
      var track = this.props.track,
          currentlyPlaying = TrackStore.isATrackCurrentlyPlaying,
          playState;

      // this.audio = new Audio(audio_url);

      this.likeState = UserStore.doesCurrentUserLike("Track", track.id);

      if (currentlyPlaying && currentAudio.trackId === this.props.track.id) {
        playState = "Pause";
      } else {
        playState = "Play";
      }
      this.setState({playState: playState});
    },
    componentWillUnmount: function () {
      TrackStore.removePlaylistListener(this.setPlayState);
    },
    setPlayState: function () {
      if (TrackStore.getCurrentTrackId !== this.props.track.id) {
        this.setState({playState: "Play"});
      }
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
      // if (currentlyPlaying && 
      //     currentAudio.trackId === this.props.track.id) {
      //       currentlyPlaying = false;
      //       currentAudio.audio.pause();
      //       this.setState({playState: "Play"});
      // } else if (currentlyPlaying && 
      //     currentAudio.trackId !== this.props.track.id) {
      //       currentAudio.audio.pause();
      //       currentAudio = {trackId: this.props.track.id, audio: this.audio};
      //       currentAudio.audio.play();
      //       this.setState({playState: "Pause"});
      // }
      //   else {
      //   currentlyPlaying = true;
      //   currentAudio = {trackId: this.props.track.id, audio: this.audio};
      //   currentAudio.audio.play();
      //   this.setState({playState: "Pause"});
      // }
      var playState = this.state.playState;

      if (playState === "Play") {
        TrackActions.playOrPauseTrack(true,  this.props.track);
        this.setState({playState: "Pause"});
      } else {
        TrackActions.playOrPauseTrack(false, this.props.track);
        this.setState({playState: "Play"});
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