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
      if (SessionStore.isLoggedIn()) {
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