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
          currentlyPlaying = TrackStore.isATrackCurrentlyPlaying(),
          currentTrackId = TrackStore.getCurrentTrackId(),
          playState;

      this.likeState = UserStore.doesCurrentUserLike("Track", track.id);

      if (currentlyPlaying && currentTrackId === this.props.track.id) {
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
      if (TrackStore.getCurrentTrackId() === this.props.track.id &&
          TrackStore.isATrackCurrentlyPlaying()) {
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
          <AddToPlaylistButton trackId= {this.props.track.id}
                               trackId={this.props.track.id}/>
          <div className="play-button" 
               onClick={this.playOrPause}>
               {this.state.playState}
          </div>
        </div>
      );
    }
  });
})(this);