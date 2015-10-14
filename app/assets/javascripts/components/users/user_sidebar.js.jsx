(function (root) {
  "use strict";
  if (typeof root.UserSidebar === "undefined") {
    root.UserSidebar = {};
  }

  root.UserSidebar = React.createClass({
    render: function () {
      var user = this.props.user;
      return (
        <div className="user-sidebar col-md-4">
          <LikeIndex/>
          <FollowIndex followedUsers={user.followed} />
        </div>
      );
    }
  });
})(this);