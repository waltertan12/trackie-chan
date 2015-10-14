(function (root) {
  if (typeof root.CurrentUserSidebar === "undefined") {
    root.CurrentUserSidebar = {};
  }

  root.CurrentUserSidebar = React.createClass({
    render: function () {
      return (
        <div className="current-user-sidebar">
          <LikeIndex/>
          <FollowIndex />
        </div>
      );
    }
  });
})(this);