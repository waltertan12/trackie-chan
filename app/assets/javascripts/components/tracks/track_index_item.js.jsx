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
      // TrackStore.addPlaylistListener(this.setPlayState);
      CurrentPlaylistStore.addPlaylistListener(this.setPlayState);
      var track = this.props.track,
          currentlyPlaying = CurrentPlaylistStore.isATrackCurrentlyPlaying(),
          currentTrackId = CurrentPlaylistStore.getCurrentTrackId(),
          playState;

      this.pause = <span className='glyphicon glyphicon-pause'/>;
      this.play = <span className='glyphicon glyphicon-play'/>;

      if (currentlyPlaying && currentTrackId === this.props.track.id) {
        playState = this.pause;
      } else {
        playState = this.play;
      }
      this.setState({playState: playState});
    },
    componentWillUnmount: function () {
      // TrackStore.removePlaylistListener(this.setPlayState);
      CurrentPlaylistStore.removePlaylistListener(this.setPlayState);
    },
    setPlayState: function () {
      if (CurrentPlaylistStore.getCurrentTrackId() === this.props.track.id &&
          CurrentPlaylistStore.isATrackCurrentlyPlaying()) {

        this.setState({playState: this.pause});

      } else if (CurrentPlaylistStore.getCurrentTrackId !== this.props.track.id) {
        this.setState({playState: this.play});
      }
    },
    playOrPause: function () {
      var playState = this.state.playState;

      if (playState === this.play) {
        CurrentPlaylistActions.playOrPauseTrack(
          true,  
          this.props.track, 
          [this.props.track]
        );

        this.setState({playState: this.pause});
      } else {
        CurrentPlaylistActions.playOrPauseTrack(
          false, 
          this.props.track
        );

        this.setState({playState: this.play});
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
          <div className="track-index-item-header">
            <div className="play-button" 
                 onClick={this.playOrPause}>
                 {this.state.playState}
            </div>
            <p>
              <Link to={"/users/" + track.user_id}>
                {track.username}
              </Link>
            </p>
            <b>{trackTitle}</b>
          </div>
          <div className="track-index-item-buttons">
            <LikeButton likableType="Track" 
                        likableId={this.props.track.id} />
            <AddToPlaylistButton userId={this.props.track.user_id}
                                 trackId={this.props.track.id}/>
          </div>
        </div>
      );
    }
  });
})(this);