(function (root) {
  if (typeof root.LikeIndex === "undefined") {
    root.LikeIndex = {};
  }

  root.LikeIndex = React.createClass({
    render: function () {
      return (
        <div className="like-index">
          <ul>
            <li>No likes...</li>
          </ul>
        </div>
      )
    }
  });
})(this);