(function (root) {
  if (root.LikeButton === "undefined") {
    root.LikeButton = {};
  }

  root.LikeButton = React.createClass({
    getInitialState: function () {
      return {likeState: ""};
    },
    componentWillMount: function () {
      var likeState;
      if (this.props.likeState) {
        likeState = "Unlike";
      } else {
        likeState = "Like";
      }
      this.setState({likeState: likeState});
    },
    componentWillReceiveProps: function (nextProps) {
      var likeState;
      if (nextProps.likeState) {
        likeState = "Unlike";
      } else {
        likeState = "Like";
      }
      this.setState({likeState: likeState});
    },
    likeOrUnlike: function () {
      var likableType = this.props.likableType
          likableId   = this.props.likableId;
      if (this.state.likeState === "Like") {
        LikeActions.like(likableType, likableId);
      } else {
        LikeActions.unlike(likableType, likableId);
      }
    },
    render: function () {
      var likeState = this.state.likeState;
      return (
        <button className={"btn " + likeState} onClick={this.likeOrUnlike} >
          {likeState}
        </button>
      );
    }
  });
})(this);