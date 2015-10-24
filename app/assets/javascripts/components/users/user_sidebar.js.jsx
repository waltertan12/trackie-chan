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
          <div className="user-sidebar-stats">
            <h3>
              <Link to={"/users/" + user.id + "followers"}>
                Followers:
              </Link>
              &nbsp;{user.followers.length}
            </h3>
            <hr/>
            <h3>
              <Link to={"/users/" + user.id + "following"}>
                Following:
              </Link>
              &nbsp;{user.following.length}
            </h3>
            <hr/>
          </div>
          <UserLikeIndex userId={user.id}/>
          <hr/>
          <FollowIndex userId={user.id} following={user.following} />
        </div>
      );
    }
  });
})(this);