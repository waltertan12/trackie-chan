(function (root) {
  if (typeof root.LikeShow) {
    root.LikeShow = {};
  }

  var Link = ReactRouter.Link;

  root.LikeShow = React.createClass({
    getInitialState: function () {
      var userId = parseInt(this.props.params.userId);
      return UserStore.findUser(userId);
    },
    componentDidMount: function () {
      UserStore.addChangeListener(this.setUser);
      var userId = this.props.params.userId,
          user = UserStore.findUser(userId);
      if (user.id !== -1) {
        this.getUser(this.props);
      } else {
        this.setUser();
      }
    },
    componentWillUnmount: function () {
      UserStore.addChangeListener(this.setUser);
    },
    componentWillReceiveProps: function (nextProps) {
      var userId = nextProps.params.userId,
          user = UserStore.findUser(userId);
      if (user.id !== -1) {
        this.getUser(nextProps);
      } else {
        this.setUser();
      }
    },
    getUser: function (props) {
      var userId = props.params.userId;
      ApiActions.receiveSingleUser(userId);
    },  
    setUser: function () {
      var userId = this.props.params.userId;
      this.setState(UserStore.findUser(userId));
    },
    render: function () {
      var likes = this.state.likes;

      return (
        <div>
          <h1>
            Likes for&nbsp;
            <Link to={"/users/" + this.state.id}>{this.state.username}</Link>
          </h1>
          <ul className="likes-show-index">
            {
              likes.map( function (like, index) {
                switch (like.type) {
                  case "Track":
                    break;
                  case "Playlist":
                    break;
                }
              })
            }
          </ul>
        </div>
      );
    }
  });
})(this);