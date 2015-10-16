(function (root) {
  if (typeof root.UserLikeIndex === "undefined") {
    root.UserLikeIndex = {};
  }

  root.UserLikeIndex = React.createClass({
    render: function () {
      return (
        <div className="like-index">
          <h3>Liked Tracks</h3>
          <ul>
            <li>No likes...</li>
          </ul>
        </div>
      )
    }
  });
})(this);