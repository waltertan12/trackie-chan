(function (root) {
  if (root.UserLikeIndexItem === "undefined") {
    root.UserLikeIndexItem = {};
  }

  var Link = ReactRouter.Link;

  root.UserLikeIndexItem = React.createClass({
    render: function () {
      var likableLink = "/users/" + 
                        this.props.like.artist_id +
                        "/" + 
                        this.props.like.likable_type + "s" + 
                        "/" +
                        this.props.like.likable_id;
      var userLink = "/users/" +
                     this.props.like.artist_id

      return (
        <li className="user-like-index-item">
          <Link to={likableLink}>{this.props.like.title}</Link> by&nbsp;
          <Link to={userLink}>{this.props.like.artist}</Link>
        </li>
      );
    }
  });
})(this);