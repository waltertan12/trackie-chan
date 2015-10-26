(function (root) {
  "use strict";
  if (typeof root.UserSidebar === "undefined") {
    root.UserSidebar = {};
  }

  var Link = ReactRouter.Link;

  root.UserSidebar = React.createClass({
    render: function () {
      var user = this.props.user;
      return (
        <div className="user-sidebar col-md-4">
          <UserLikeIndex userId={user.id}/>
          <hr/>
          <FollowIndex userId={user.id} 
                       follows={user.following}
                       type="following" /> 
          <hr/>
          <FollowIndex userId={user.id} 
                       follows={user.followers}
                       type="followers" />
        </div>
      );
    }
  });
})(this);