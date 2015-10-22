(function (root) {
  if (root.PlaylistEditButton === "undefined") {
    root.PlaylistEditButton = {};
  }

  var Link = ReactRouter.Link;

  root.PlaylistEditButton = React.createClass({
    render: function () {
      var link = "/users/" +
                 this.props.userId +
                 "/playlists/" +
                 this.props.playlistId +
                 "/edit";
      if (window.CURRENT_USER_ID > -1 &&
          parseInt(this.props.userId) === window.CURRENT_USER_ID) {
        return (
          <Link to={link} className="btn Like">
            Edit
          </Link>
        );
      } else {
        return <div></div>;
      }
    }
  });
})(this);