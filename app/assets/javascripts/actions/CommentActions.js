(function (root) {
  if (typeof root.CommentActions === "undefined") {
    root.CommentActions = {};
  }

  root.CommentActions = {
    receiveComments: function (trackId) {
      var dispatchCallback = function (comments, trackId) {
        AppDispatcher.dispatch({
          actionType: CommentConstants.COMMENTS_RECEIVED,
          trackId: trackId,
          comments: comments
        });
      }

      ApiUtils.fetchComments(trackId, dispatchCallback);
    },
    createComment: function (comment, trackId) {
      var dispatchCallback = function (comment, trackId) {
        AppDispatcher.dispatch({
          actionType: CommentConstants.COMMENT_CREATED,
          trackId: trackId,
          comment: comment
        });
      }

      ApiUtils.createComment(comment, trackId, dispatchCallback);
    }
  };
})(this);