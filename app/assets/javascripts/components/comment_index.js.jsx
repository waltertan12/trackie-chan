(function (root) {
  if (typeof root.CommentIndex === "undefined") {
    root.CommentIndex = {};
  }

  root.CommentIndex = React.createClass({
    render: function () {
      return (
        <div className="container comment-index">
          <h2>Comments</h2>
          <ul>
            <CommentIndexItem />
          </ul>
        </div>
      );
    }
  });
})(this);