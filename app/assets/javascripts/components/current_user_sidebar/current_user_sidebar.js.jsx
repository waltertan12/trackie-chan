(function (root) {
  "user strict";
  if (typeof root.CurrentUserSidebar === "undefined") {
    root.CurrentUserSidebar = {};
  }

  root.CurrentUserSidebar = React.createClass({
    render: function () {
      return (
        <div className="user-sidebar col-md-4">
          <LikeIndex/>
          <FollowIndex followedUsers={[]}/>
        </div>
      );
    }
  });
})(this);