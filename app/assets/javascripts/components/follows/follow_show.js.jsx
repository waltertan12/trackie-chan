(function (root) {
  if (typeof root.FollowShow) {
    root.FollowShow = {};
  }

  var Link = ReactRouter.Link;

  root.FollowShow = React.createClass({
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
      var pathname = this.props.location.pathname,
          title, follows;
      if (pathname.search(/\/followers/) > -1) {
        title = "Followers";
        follows = this.state.followers.slice();
      } else if (pathname.search(/\/following/) > -1) {
        title = "Following";
        follows = this.state.following.slice();
      }

      return (
        <div>
          <h1>
            {title} for&nbsp;
            <Link to={"/users/" + this.state.id}>{this.state.username}</Link>
          </h1>
          <ul className="follower-show-index">
            {
              follows.map( function (follow, index) {
                return <UserIndexItem key={index} user={follow} />;
              })
            }
          </ul>
        </div>
      );
    }
  });
})(this);