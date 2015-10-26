(function (root) {
  if (typeof root.LikeShow) {
    root.LikeShow = {};
  }

  var Link = ReactRouter.Link;

  root.LikeShow = React.createClass({
    getInitialState: function () {
      var userId = parseInt(this.props.params.userId);
      return ({
        likes: [], 
        user: {
          id: -1, 
          tracks: [], 
          followers: [], 
          following: [],
          likes: [],
          playlists: []
        }
      });
    },
    componentDidMount: function () {
      UserLikeStore.addChangeListener(this.setLikes);
      UserStore.addChangeListener(this.setUser);
      var userId = this.props.params.userId,
          likes = UserLikeStore.findLikes(userId);
      if (typeof likes === "undefined") {
        this.getLikes(this.props);
        this.getUser(this.props);
      } else {
        this.setLikes();
        this.setUser();
      }
    },
    componentWillUnmount: function () {
      UserLikeStore.removeChangeListener(this.setLikes);
      UserStore.removeChangeListener(this.setUser);
    },
    componentWillReceiveProps: function (nextProps) {
      var userId = nextProps.params.userId,
          likes = UserLikeStore.findLikes(userId);
      if (typeof likes === "undefined") {
        this.getUser(nextProps);
        this.getUser(nextProps);
      } else {
        this.setUser();
        this.setLikes();
      }
    },
    getLikes: function (props) {
      var userId = props.params.userId;
      LikeActions.receiveUserLikes(userId);
    }, 
    setLikes: function () {
      var userId = parseInt(this.props.params.userId);
      this.setState({likes: UserLikeStore.findLikes(userId)});
    },
    getUser: function (props) {
      var userId = props.params.userId;
      ApiActions.receiveSingleUser(userId);
    },
    setUser: function () {
      var userId = parseInt(this.props.params.userId);
      this.setState({user: UserStore.findUser(userId)});
    },
    render: function () {
      var likes = this.state.likes,
          user = this.state.user;

      return (
        <div className="likes-show-index">
          <h1>
            Likes for&nbsp;
            <Link to={"/users/" + user.id}>{user.username}</Link>
          </h1>
          <ul>
            {
              likes.map( function (like, index) {
                return (
                  <div key={index}>
                    <h4>
                      <Link to={"/users/" + 
                                like.artist_id + "/" + 
                                like.likable_type  + "s/" +
                                like.likable_id}>
                        {like.title}
                      </Link>
                      &nbsp;by&nbsp;
                      <Link to={"/users/" + like.artist_id}>
                        {like.artist}
                      </Link>
                    </h4>
                  </div>
                );
              })
            }
          </ul>
        </div>
      );
    }
  });
})(this);