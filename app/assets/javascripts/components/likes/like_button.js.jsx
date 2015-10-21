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
      this.unlike = <span className="glyphicon glyphicon-heart"/>;
      this.like = <span className="glyphicon glyphicon-heart-empty"/>;
      this.setLike();
    },
    componentWillReceiveProps: function (nextProps) {
      this.setLike(nextProps);
    },
    componentWillUnmount: function () {
      UserStore.removeChangeListener(this.setLike);
    },
    setLike: function (props) {
      if (typeof props === "undefined") {
        props = this.props;
      }
      var likableType = props.likableType,
          likableId   = props.likableId;
      if (UserStore.doesCurrentUserLike(likableType, likableId)) {
        this.setState({likeState: this.unlike});
      } else {
        this.setState({likeState: this.like});
      }
    },
    likeOrUnlike: function () {
      var likableType = this.props.likableType
          likableId   = this.props.likableId;

      if (this.state.likeState === this.like) {
        LikeActions.like(likableType, likableId);
        switch(likableType) {
          case "Track":
            TrackActions.receiveSingleTrack(likableId);
            break;
          case "Playlist":
            PlaylistActions.receivePlaylist(likableId);
            break;
        }
        this.setState({likeState: this.unlike});
      } else {
        LikeActions.unlike(likableType, likableId);
        switch(likableType) {
          case "Track":
            TrackActions.receiveSingleTrack(likableId);
            break;
          case "Playlist":
            PlaylistActions.receivePlaylist(likableId);
            break;
        }

        this.setState({likeState: this.like});
      }
      ApiActions.receiveCurrentUser(window.CURRENT_USER_ID);
    },
    render: function () {
      var likeState = this.state.likeState,
          classname;
      if (likeState === this.like) {
        classname = "Like";
      } else {
        classname = "Liked"
      }
      return (
        <button className={"btn " + classname} onClick={this.likeOrUnlike} >
          {likeState} {classname}
        </button>
      );
    }
  });
})(this);