(function (root) {
  if (typeof root.CommentIndex === "undefined") {
    root.CommentIndex = {};
  }

  root.CommentIndex = React.createClass({
    render: function () {
      console.log("Props for comment index");
      console.log(this.props);
      var commentItems = "hi";
      if (this.props.comments.length === 0) {
        commentItems = <li>No comments yet...</li>;
      } else {
        commentItems = (
          this.props.comments.map( function (comment) {
            return <CommentIndexItem comment={comment}/>;
          })
        );
      }
      return (
        <div className="comment-index">
          <CommentForm />
          <h2>Comments</h2>
          <ul>
            {commentItems}
          </ul>
        </div>
      );
    }
  });
})(this);