(function (root) {
  if (typeof root.FollowIndex === "undefined") {
    root.FollowIndex = {};
  }

  root.FollowIndex = React.createClass({
    render: function () {
      console.log(this.props);
      var followedUsers = this.props.followedUsers;
          content;
      var content = "hi";
      if (followedUsers.length === 0) {
        content = <li>No follows yet...</li>;
      } else {
        content = (
          <div>
            {
              followedUsers.map( function (followedUser) {
                return <FollowIndexItem key={followedUser.id} followedUser={followedUser} />;
              })
            }
          </div>
        );
      }
      return (
        <div className="follow-index">
          <ul>
            {content}
          </ul>
        </div>
      );
    }
  });
})(this);