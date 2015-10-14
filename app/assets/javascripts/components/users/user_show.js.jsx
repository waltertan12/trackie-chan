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
    // shouldComponentUpdate: function (nextProp, nextState) {
    //   console.log()
    //   if (this.props.params.userId !== nextProp.params.userId) {
    //     this.getUser();
    //     return true;
    //   }
    //   return false;
    // },
    getUser: function (props) {

      ApiActions.receiveSingleUser(props.params.userId);
    },
    setUser: function () {
      this.setState({user: root.UserStore.user()});
    },
    render: function () {
      console.log(this);
      var user = (this.state.user === null ? {tracks: []} : this.state.user)
      return (
        <div className="user-show row">
          <div className="jumbotron">
            <h1>{user.username}</h1>
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