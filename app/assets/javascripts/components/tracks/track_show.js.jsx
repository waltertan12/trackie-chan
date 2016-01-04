(function (root) {
  if (typeof root.TrackShow === "undefined") {
    root.TrackShow = {}
  }

  root.TrackShow = React.createClass({
    getInitialState: function () {
      var trackId = parseInt(this.props.params.trackId),
          userId = parseInt(this.props.params.userId);

      return {track: TrackStore.findTrack(userId, trackId)};
    },
    componentDidMount: function () {
      TrackStore.addChangeListener(this.setTrack);
      ErrorStore.addChangeListener(this.setErrors);

      if (this.state.track.id === -1) {
        this.getTrack(this.props);
      } else {
        this.setTrack();
      }
    },
    componentWillUnmount: function () {
      TrackStore.removeChangeListener(this.setTrack);
      ErrorStore.removeChangeListener(this.setErrors);
    },
    componentWillReceiveProps: function (nextProps) {
      var userId = parseInt(nextProps.params.userId),
          trackId = parseInt(nextProps.params.trackId),
          newTrack = TrackStore.findTrack(trackId, userId);

      if (parseInt(trackId) === newTrack.id) {
        this.setTrack(userId, trackId);
        TrackActions.resetPlaylist([newTrack]);
      } else {
        this.getTrack(nextProps);
      }
    },
    getTrack: function (props) {
      var trackId = props.params.trackId;

      TrackActions.receiveSingleTrack(trackId);
    },
    setTrack: function (optionalUserId, optionalTrackId) {
      var trackId, userId;

      if (typeof optionalTrackId !== "undefined" &&
          typeof optionalUserId !== "undefined") {
        userId = parseInt(optionalUserId);
        trackId = parseInt(optionalTrackId);
      } else {
        trackId = parseInt(this.props.params.trackId);
        userId  = parseInt(this.props.params.userId);
      }

      this.setState({
        track: TrackStore.findTrack(userId, trackId)
      });
    },
    setErrors: function  () {
      var node = React.findDOMNode(document.getElementById("errors"));
      React.render(<ErrorDisplay errors={ErrorStore.all()}/>, node);
      this.setState({errors: ErrorStore.all()});
    },
    render: function () {
      return (
        <div className="container-fullwidth track-show row">
          <TrackShowHeader track={this.state.track}/>
          <div className="col-md-8 track-show-container ">
            <div className="container-fullwidth track-description">
              <div className="container-fullwidth">
                <h3>Description</h3>
                <p>{this.state.track.description}</p>
                <h3>Tags</h3>
                <Tags tags={this.state.track.tags}/>
              </div>
            </div>
            <CommentIndex trackId= {this.props.params.trackId} />
          </div>
          <TrackSidebar type="Track"
                        likes={this.state.track.likes}
                        playlists={this.state.track.playlists}/>
        </div>
      );
    }
  });
})(this);