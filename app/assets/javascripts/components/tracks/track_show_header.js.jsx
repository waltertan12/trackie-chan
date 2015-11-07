(function (root) {
  if (typeof root.TrackShowHeader === "undefined") {
    root.TrackShowHeader = {};
  }

  var Link = ReactRouter.Link;

  root.TrackShowHeader = React.createClass({
    render: function () {
      var track = this.props.track;
      return (
        <div className="jumbotron track-show-header">
          <div>
            <div className="track-title">
              <h1>{track.title}</h1>
            </div>
            <TrackIndexItem track={track} />
          <img className="track-image"
                 src={track.image_url} 
                 height="150" 
                 width="150"/>
          </div>
          <br/>
          <TrackEditButton userId={track.user_id} trackId={track.id}/>
        </div>
      );
    }
  });
})(this);