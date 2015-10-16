(function (root) {
  if (typeof root.CommentIndex === "undefined") {
    root.CommentIndex = {};
  }

  root.CommentIndex = React.createClass({
    getInitialState: function () {
      var trackId = parseInt(this.props.trackId);
      return {comments: CommentStore.getComments(trackId)};
    },
    componentDidMount: function () {
      CommentStore.addChangeListener(this.setComments);
      this.getComments(this.props);
    },
    componentWillUnmount: function () {
      CommentStore.removeChangeListener(this.setComments);
    },
    getComments: function (props) {
      CommentActions.receiveComments(props.trackId);
    },
    setComments: function () {
      this.setState({comments: CommentStore.getComments(this.props.trackId)})
    },
    render: function () {
      var commentItems;
      if (this.state.comments.length === 0) {
        commentItems = (
          <li className="comment-index-item">No comments yet...</li>
        );
      } else {
        commentItems = (
          this.state.comments.map( function (comment) {
            return <CommentIndexItem key={comment.id} comment={comment}/>;
          })
        );
      }
      return (
        <div className="comment-index">
          <CommentForm trackId={this.props.trackId}/>
          <h2>Comments</h2>
          <ul>
            {commentItems}
          </ul>
        </div>
      );
    }
  });
})(this);