(function (root) {
  if (typeof root.FollowIndex === "undefined") {
    root.FollowIndex = {};
  }

  var Link = ReactRouter.Link;

  root.FollowIndex = React.createClass({
    render: function () {
      var following = this.props.following,
          content;
      if (following.length === 0) {
        content = <li>No follows yet...</li>;
      } else {
        content = (
          <div>
            {
              following.map( function (followedUser, index) {
                if (index < 5) {
                  return (
                    <FollowIndexItem key={followedUser.id} 
                                     followedUser={followedUser} />
                    );
                }
              })
            }
          </div>
        );
      }
      return (
        <div className="follow-index">
          <Link to={"/users/" + this.props.userId + "/following"}>
              <h3>
              Following
              </h3>
          </Link>
          <ul>
            {content}
          </ul>
        </div>
      );
    }
  });
})(this);