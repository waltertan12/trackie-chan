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
      var trackId = parseInt(this.props.trackId);
      CommentStore.addChangeListener(this.setComments);
      if (CommentStore.hasCommentsForTrack(trackId)) {
        this.setComments();
      } else {
        this.getComments(this.props);
      }
    },
    componentWillReceiveProps: function (nextProps) {
      if (CommentStore.hasCommentsForTrack(nextProps.trackId)) {
        this.setComments();
      } else {
        this.getComments(this.props);
      }
    },
    componentWillUnmount: function () {
      CommentStore.removeChangeListener(this.setComments);
    },
    getComments: function (props) {
      CommentActions.receiveComments(props.trackId);
    },
    setComments: function (optionalTrackId) {
      if (typeof optionalTrackId === "undefined") {
        var trackId = this.props.trackId;
        this.setState({comments: CommentStore.getComments(trackId)})
      } else {
        this.setState({comments: CommentStore.getComments(optionalTrackId)});
      }
    },
    render: function () {
      var commentItems;
      if (this.state.comments.length === 0) {
        commentItems = (
          <div>
            <hr/>
            <li className="comment-index-item">No comments yet...</li>
          </div>
        );
      } else {
        commentItems = (
          this.state.comments.map( function (comment) {
            return (
              <div key={comment.id}>
                <hr/>
                <CommentIndexItem comment={comment}/>
              </div>
            );
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