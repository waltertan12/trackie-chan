(function (root) {
  if (typeof root.CurrentUserSidebar === "undefined") {
    root.CurrentUserSidebar = {};
  }

  root.CurrentUserSidebar = React.createClass({
    render: function () {
      return (
        <div className="current-user-sidebar col-md-4">
          <LikeIndex/>
          <FollowIndex />
        </div>
      );
    }
  });
})(this);