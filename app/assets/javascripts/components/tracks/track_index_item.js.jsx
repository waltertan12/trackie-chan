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
      var track = this.props.track,
          likeState = UserStore.doesCurrentUserLike("Track", track.id),
          trackTitle;
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
                      likableId={this.props.track.id}
                      likeState={likeState}/>
          <div className="play-button" 
               onClick={this.playOrPause}>
               {this.state.playState}
          </div>
        </div>
      );
    }
  });
})(this);