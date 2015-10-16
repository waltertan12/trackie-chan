(function (root) {
  if (typeof root.TrackShow === "undefined") {
    root.TrackShow = {}
  }

  root.TrackShow = React.createClass({
    getInitialState: function () {
      var trackId = this.props.params.trackId;
      var userId = this.props.userId;
      return {track: TrackStore.findTrack(userId, trackId)};
    },
    componentDidMount: function () {
      TrackStore.addChangeListener(this.setTrack);
      if (this.state.track.id === -1) {
        this.getTrack(this.props);
      }
    },
    componentWillUnmount: function () {
      TrackStore.removeChangeListener(this.setTrack);
    },
    componentWillReceiveProps: function (nextProps) {
      var userId = this.props.userId,
          trackId = nextProps.params.trackId,
          newTrack = TrackStore.findTrack(trackId, this.props.userId);

      if (parseInt(trackId) === newTrack.id) {
        this.setTrack(trackId);
      } else {
        this.getTrack(nextProps);
      }
    },
    getTrack: function (props) {
      var userId = this.props.userId,
          trackId = nextProps.params.trackId;

      TrackActions.receiveSingleTrack(userId, trackId);
    },
    setTrack: function (optionalTrackId) {
      var trackId = this.props.params.trackId,
          userId  = this.props.userId;
      // if (typeof optionalTrackId === "undefined") {

      // } else {
        this.setState({
          track: TrackStore.findTrack(userId, trackId)
        });
      // }
    },
    render: function () {
      return (
        <div className="container track-show row">
          <TrackShowHeader track={this.state.track}/>
          <div className="container-fullwidth track-description">
            <div className="container">
              <h3>Description</h3>
              <p>{this.state.track.description}</p>
            </div>
          </div>
          <div className="track-show-container col-md-8">
            <CommentIndex trackId= {this.props.params.trackId} />
          </div>
          <CurrentUserSidebar currentUser={UserStore.currentUser()}/>
        </div>
      );
    }
  });
})(this);