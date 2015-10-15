(function (root) {
  if (typeof root.CommentIndexItem === "undefined") {
    root.CommentIndexItem = {};
  }

  root.CommentIndexItem = React.createClass({
    render: function () {
      return (
        <li className="comment-index-item">
          A comment!
        </li>
      );
    }
  });
})(this);