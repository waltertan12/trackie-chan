(function (root) {
  "user strict";
  if (typeof root.CurrentUserSidebar === "undefined") {
    root.CurrentUserSidebar = {};
  }

  root.CurrentUserSidebar = React.createClass({
    render: function () {
      console.log(this.props);
      var currentUser = this.props.currentUser;
      console.log(currentUser);
      return (
        <div className="user-sidebar col-md-4">
          <LikeIndex/>
          <FollowIndex followedUsers={currentUser.followed}/>
        </div>
      );
    }
  });
})(this);