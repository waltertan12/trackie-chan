(function (root) {
  if (typeof root.UserShow === "undefined") {
    root.userShow = {};
  }

  root.UserShow = React.createClass({
    getInitialState: function () {
      return ({user: root.UserStore.user()});
    },
    componentDidMount: function () {
      UserStore.addChangeListener(this.setUser);
      this.getUser(this.props);
    },
    componentWillUnmount: function () {
      UserStore.removeChangeListener(this.setUser);
    },
    componentWillReceiveProps: function (nextProps) {
      this.getUser(nextProps);
    },
    getUser: function (props) {
      ApiActions.receiveSingleUser(props.params.userId);
    },
    setUser: function () {
      this.setState({user: root.UserStore.user()});
    },
    render: function () {
      var user;
      if (this.state.user === null) {
        user = {followed: [], tracks: []};
      } else {
        user = this.state.user;
      }
      console.log("user show");
      console.log(user);
      return (
        <div className="user-show row">
          <div className="jumbotron">
            <h1>{user.username}</h1>
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