(function (root) {
  if (typeof root.FollowIndexItem === "undefined") {
    root.FollowIndexItem = {};
  }
  
  var Link = ReactRouter.Link;

  root.FollowIndexItem = React.createClass({
    render: function () {
      var user = this.props.followedUser;
      return (
        <div className="follow-index-item">
          <li className="follow-index-item">
            <Link to={"/users/" + user.id}>
              <img alt={user.username} 
                   src={user.image_url} 
                   height="20" 
                   width="20"/>&nbsp;
              {user.username}
            </Link>
          </li>
        </div>
      );
    }
  });
})(this);