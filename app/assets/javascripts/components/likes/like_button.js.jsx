(function (root) {
  if (root.LikeButton === "undefined") {
    root.LikeButton = {};
  }

  root.LikeButton = React.createClass({
    getInitialState: function () {
      return {likeState: ""};
    },
    componentDidMount: function () {
      UserStore.addChangeListener(this.setLike);
      // this.getLike();
      this.setLike();
    },
    componentWillReceiveProps: function (nextProps) {
      this.setLike(nextProps);
    },
    componentWillUnmount: function () {
      UserStore.removeChangeListener(this.setLike);
    },
    getLike: function () {

    },
    setLike: function (props) {
      if (typeof props === "undefined") {
        props = this.props;
      }
      var likableType = props.likableType,
          likableId   = props.likableId;
      if (UserStore.doesCurrentUserLike(likableType, likableId)) {
        this.setState({likeState: "</3"});
      } else {
        this.setState({likeState: "<3"});
      }
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