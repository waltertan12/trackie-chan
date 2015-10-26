(function (root) {
  if (typeof root.FollowIndex === "undefined") {
    root.FollowIndex = {};
  }

  var Link = ReactRouter.Link;

  root.FollowIndex = React.createClass({
    render: function () {
      var follows = this.props.follows,
          userId = this.props.userId,
          type = this.props.type,
          title,
          content;
      if (follows.length === 0) {
        content = <li>No follows yet...</li>;
      } else {
        content = (
          <div>
            {
              follows.map( function (followedUser, index) {
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

      if (type === "following") {
        title = "Following";
      } else if (type === "followers"){
        title = "Followers";
      }

      return (
        <div className="follow-index">
          <h3>
            <Link to={"/users/" + userId + "/" + this.props.type}>
              {title}:
            </Link>
            &nbsp;{follows.length}
          </h3>
          <ul>
            {content}
          </ul>
        </div>
      );
    }
  });
})(this);