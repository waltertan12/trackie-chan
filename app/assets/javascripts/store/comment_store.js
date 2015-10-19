(function (root) {
  if (typeof root.CommentStore === "undefined") {
    root.CommentStore = {};
  }

  var _comments = {},
      findCommentIndex = function (trackId, commentId) {
        if (typeof _comments[trackId] === "undefined") {
          return -1;
        } else {
          for (var i = 0; i < _comments.length; i++) {
            if (_comments[i].id === commentId) {
              return i;
            }
          };
          return -1;
        }
      },
      // For getting all track comments
      resetComments = function (trackId, comments) {
        _comments[trackId] = comments;
      },
      // For adding comments
      pushComment = function (trackId, comment) {
        if (typeof _comments[trackId] === "undefined") {
          _comments[trackId] = [comment];
        } else {
          _comments[trackId].push(comment);
        }
      },
      // For editing a comment
      resetSingleComment = function (trackId, commentId, comment) {
        var oldComment; 
        if (typeof _comments[trackId] === "undefined") {
          _comments[trackId] = [comment];
        } else {
          oldCommentIndex = findCommentIndex(trackId, commentId);
          if (oldCommentIndex === null) {
            pushComment(trackId, comment);
          } else {
            _comments[trackId][oldCommentIndex] = comment;
          }
        }
      },
      CHANGE_EVENT = "CHANGE_EVENT";

  root.CommentStore = $.extend({}, EventEmitter.prototype,{
    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback)
    },
    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },
    trackCommentsAreStored: function (trackId) {
      if (typeof trackId === "undefined") {
        return false;
      } else {
        return typeof _comments[trackId] !== "undefined";
      }
    },
    hasCommentsForTrack: function (trackId) {
      return typeof _comments[trackId] !== "undefined";
    },
    getComments: function (trackId) {
      if (this.trackCommentsAreStored(trackId)) {
        return _comments[trackId];
      } else {
        return [];
      }
    },
    all: function () {
      return _comments;
    },  
    dispatcherId: AppDispatcher.register(function (payload) {
      if (payload.actionType === CommentConstants.COMMENTS_RECEIVED) {
        resetComments(payload.trackId, payload.comments);
        root.CommentStore.emit(CHANGE_EVENT);
      }
      if (payload.actionType === CommentConstants.COMMENT_CREATED) {
        console.log("COMMENT CREATED - comment store");
        console.log(payload);
        pushComment(payload.trackId, payload.comment);
        root.CommentStore.emit(CHANGE_EVENT);
      }
    })
  });
})(this);