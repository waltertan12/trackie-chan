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
      var track = this.props.track,
          currentlyPlaying = TrackStore.isATrackCurrentlyPlaying,
          playState;

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
      console.log("Setting play state");
      console.log("current track id: " + TrackStore.getCurrentTrackId());
      console.log("trackitem id: " + this.props.track.id);
      console.log(TrackStore.getCurrentTrackId() === this.props.track.id)
      if (TrackStore.getCurrentTrackId() === this.props.track.id) {
        this.setState({playState: "Pause"});
      } else if (TrackStore.getCurrentTrackId !== this.props.track.id) {
        this.setState({playState: "Play"});
      }
    },
    playOrPause: function () {
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