(function (root) {
  if (root.CommentForm === "undefined") {
    root.CommentForm = {};
  }

  root.CommentForm = React.createClass({
    getInitialState: function () {
      return {body: ""};
    },
    _onSubmit: function (e) {
      e.preventDefault();
      var commentData = this.state;
      commentData.track_id = this.props.trackId;
      CommentActions.createComment(commentData, this.props.trackId);
      this.setState({body: ""});
    },
    updateBody: function (e) {
      this.setState({body: e.target.value})
    },
    render: function () {
      console.log(this.state);
      return (
        <div className="comment-form">
          <h3>Add a comment</h3>
          <form onSubmit={this._onSubmit}>
            <div className="form-group">
              <input type="text"
                     className="form-control"
                     onChange={this.updateBody}
                     value={this.state.body} />
            </div>

            <input type="submit" 
                   className="btn btn-primary"
                   value="Submit"/>

          </form>
        </div>
      );
    }
  });
})(this);