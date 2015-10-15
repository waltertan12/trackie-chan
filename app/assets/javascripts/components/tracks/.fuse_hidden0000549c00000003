(function (root) {
  if (typeof root.TrackShow === "undefined") {
    root.TrackShow = {}
  }

  root.TrackShow = React.createClass({
    getInitialState: function () {
      var trackId = this.props.params.trackId;
      return {track: TrackStore.find(trackId)};
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
      this.getTrack(nextProps);
    },
    getTrack: function (props) {
      ApiActions.receiveSingleTrack(props.params.trackId);
    },
    setTrack: function () {
      this.setState({track: TrackStore.find(this.props.params.trackId)});
    },
    render: function () {
      return (
        <div className="container track-show row">
          <TrackShowHeader track={this.state.track}/>
          <div className="track-show-container col-md-8">
            <CommentIndex />
          </div>
          <CurrentUserSidebar currentUser={UserStore.currentUser()}/>
        </div>
      );
    }
  });
})(this);