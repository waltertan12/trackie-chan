(function (root) {
  if (typeof root.UploadProgress === "undefined") {
    root.UploadProgress = {};
  }
  
  var Link = ReactRouter.Link;
  root.UploadProgress = React.createClass({
    getInitialState: function () {
      return {value: 0, userId: -1, trackId: -1};
    },
    componentDidMount: function () {
      TrackStore.addUploadListener(this.setProgress);
      TrackStore.addChangeListener(this.setLinkInfo);
      this.setProgress();
    },
    componentWillUnmount: function () {
      TrackStore.removeUploadListener(this.setProgress);
      TrackStore.removeChangeListener(this.setLinkInfo);
    },
    setProgress: function () {
      this.setState({value: TrackStore.getProgress()});
    },
    setLinkInfo: function () {
      var track = TrackStore.findLastUploadedTrack();
      this.setState({userId: track.user_id, trackId: track.id});
    },
    render: function () {
      var redirectButton;
      if (this.state.value === 100) {
        redirectButton = (
          <Link to={"/users/" + 
                    this.state.userId +
                    "/tracks/" + 
                    this.state.trackId} 
                className="btn btn-success">
            Go to track
          </Link>
        );
      } else if (this.state.value <= 98) {
        redirectButton = <div><h3>Uploading Track</h3></div>;
      } else {
        redirectButton = <div><h3>Processing Track</h3></div>;
      }
      return (
        <div className="progress-show">
          <h1>Uploading Track</h1>
          <progress className="progress" 
                    max="100" 
                    value={this.state.value}/>
          <br/><br/>
          {redirectButton}
        </div>
      );
    }
  });
})(this);