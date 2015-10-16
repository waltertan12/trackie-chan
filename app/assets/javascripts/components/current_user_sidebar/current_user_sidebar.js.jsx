(function (root) {
  "user strict";
  if (typeof root.CurrentUserSidebar === "undefined") {
    root.CurrentUserSidebar = {};
  }

  root.CurrentUserSidebar = React.createClass({
    render: function () {
      var currentUser = this.props.currentUser;
      return (
        <div className="user-sidebar col-md-4">
          <LikeIndex/>
          <FollowIndex following={currentUser.following}/>
        </div>
      );
    }
  });
})(this);