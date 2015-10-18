(function (root) {
  if (typeof root.TrackShowHeader === "undefined") {
    root.TrackShowHeader = {};
  }

  root.TrackShowHeader = React.createClass({
    render: function () {
      var track = this.props.track
      return (
        <div className="jumbotron track-show-header">
          <div>
            <h1>Wow</h1>
            <TrackIndexItem track={track} />
          <img className="track-image"
                 src={track.image_url} 
                 height="150" 
                 width="150"/>
          </div>
        </div>
      );
    }
  });
})(this);