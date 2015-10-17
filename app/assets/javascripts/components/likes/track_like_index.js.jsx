(function (root) {
  if (typeof root.TrackLikeIndex === "undefined") {
    root.TrackLikeIndex = {};
  }

  root.TrackLikeIndex = React.createClass({
    render: function () {
      return (
        <div className="track-like-index">
          <h3>Likes</h3>
          <ul>
            <li>No likes...</li>
          </ul>
        </div>
      )
    }
  });
})(this);