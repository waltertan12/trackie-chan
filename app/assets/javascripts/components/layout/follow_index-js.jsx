(function (root) {
  if (typeof root.FollowIndex === "undefined") {
    root.FollowIndex = {};
  }

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
              following.map( function (followedUser) {
                return <FollowIndexItem key={followedUser.id} followedUser={followedUser} />;
              })
            }
          </div>
        );
      }
      return (
        <div className="follow-index">
          <h3>Following</h3>
          <ul>
            {content}
          </ul>
        </div>
      );
    }
  });
})(this);