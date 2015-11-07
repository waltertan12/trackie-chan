(function (root) {
  if (typeof root.CommentIndexItem === "undefined") {
    root.CommentIndexItem = {};
  }

  var Link = ReactRouter.Link;
  root.CommentIndexItem = React.createClass({
    render: function () {
      var comment = this.props.comment;
      return (
        <li className="comment-index-item">
          {comment.body}
          <p className="comment-index-item-description">
            Made by&nbsp;
            <Link to={"/users/" + comment.user_id}>
              {comment.username}
            </Link>
          </p>
        </li>
      );
    }
  });
})(this);