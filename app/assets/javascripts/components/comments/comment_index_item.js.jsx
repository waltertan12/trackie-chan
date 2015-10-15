(function (root) {
  if (typeof root.CommentIndexItem === "undefined") {
    root.CommentIndexItem = {};
  }

  root.CommentIndexItem = React.createClass({
    render: function () {
      var comment = this.props.comment;
      return (
        <li className="comment-index-item">
          {comment.body}
          <p>
            Made by 
            <Link to={"/users/" + comment.user_id}>
              {comment.username}
            </Link>
          </p>
        </li>
      );
    }
  });
})(this);