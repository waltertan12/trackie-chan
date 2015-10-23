(function (root) {
  if (root.TrackEditButton === "undefined") {
    root.TrackEditButton = {};
  }

  var Link = ReactRouter.Link;

  root.TrackEditButton = React.createClass({
    render: function () {
      var userId = this.props.userId,
          trackId = this.props.trackId,
          link = "/users/" + userId + "/tracks/" + trackId + "/edit",
          button;

      if (window.CURRENT_USER_ID > 0 &&
          window.CURRENT_USER_ID === userId) {
        return <Link to={link} className="btn Like">Edit</Link>;
      } else {
        return <div></div>;
      }
    }
  });
})(this);