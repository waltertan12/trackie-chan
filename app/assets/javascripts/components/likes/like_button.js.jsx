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
        likeState = "</3";
      } else {
        likeState = "<3";
      }
      this.setState({likeState: likeState});
    },
    componentWillReceiveProps: function (nextProps) {
      var likeState;
      if (nextProps.likeState) {
        likeState = "</3";
      } else {
        likeState = "<3";
      }
      this.setState({likeState: likeState});
    },
    likeOrUnlike: function () {
      var likableType = this.props.likableType
          likableId   = this.props.likableId;
      if (this.state.likeState === "<3") {
        LikeActions.like(likableType, likableId);
        this.setState({likeState: "</3"});
      } else {
        LikeActions.unlike(likableType, likableId);
        this.setState({likeState: "<3"});
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