(function (root) {
  if (typeof root.UserShow === "undefined") {
    root.userShow = {};
  }

  root.UserShow = React.createClass({
    getInitialState: function () {
      var userId = this.props.params.userId;
      return ({user: root.UserStore.findUser(userId)});
    },
    componentDidMount: function () {
      UserStore.addChangeListener(this.setUser);
      if (parseInt(this.props.params.userId) !== this.state.user.id) {
        this.getUser(this.props);
      } 
    },
    componentWillUnmount: function () {
      UserStore.removeChangeListener(this.setUser);
    },
    componentWillReceiveProps: function (nextProps) {
      var newUser = UserStore.findUser(nextProps.params.userId);
      if (parseInt(nextProps.params.userId) === newUser.id) {
        this.setUser(newUser.id);
      } else {
        this.getUser(nextProps);
      }
    },
    getUser: function (props) {
      ApiActions.receiveSingleUser(props.params.userId);
    },
    setUser: function (optionalUserId) {
      if (typeof optionalUserId === "undefined") {
        this.setState({user: root.UserStore.user()});
      } else {
        this.setState({user: UserStore.findUser(optionalUserId)});
      }
    },
    render: function () {
      var user = this.state.user;
      return (
        <div className="user-show row">
          <div className="jumbotron user-header">
            <h1>{user.username}</h1>
            <img className="profile-image"
                 src={user.image_url} 
                 height="100" 
                 width="100"/>
            <FollowButton user={user} 
                          followState={user.is_current_user_following} />
          </div>
          <div className="user-feed-container col-md-8">
            <div className="track-index">
              <TrackIndex tracks={user.tracks} />
            </div>
          </div>
          <UserSidebar user={user}/>
        </div>
      );
    }
  });
})(this);