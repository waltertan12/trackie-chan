(function (root) {
  if (typeof root.TrackSidebar === "undefined") {
    root.TrackSidebar = {};
  }

  root.TrackSidebar = React.createClass({
    render: function () {
      return (
        <div className="track-sidebar col-md-4">
          <TrackLikeIndex likes={this.props.likes}/>
        </div>
      );
    }
  });
})(this);