(function (root) {
  if (typeof root.FollowIndex === "undefined") {
    root.FollowIndex = {};
  }

  root.FollowIndex = React.createClass({
    render: function () {
      return (
        <div className="follow-index">
          <ul>
            <li>No follows yet...</li>
          </ul>
        </div>
      );
    }
  });
})(this);