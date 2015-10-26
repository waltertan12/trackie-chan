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
          <UserLikeIndex userId={currentUser.id}/>
          <hr/>
          <FollowIndex userId={currentUser.id} 
                       type="following"
                       follows={currentUser.following}/>
        </div>
      );
    }
  });
})(this);