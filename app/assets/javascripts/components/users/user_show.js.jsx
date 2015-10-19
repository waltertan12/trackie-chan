(function (root) {
  if (typeof root.UserShow === "undefined") {
    root.userShow = {};
  }

  root.UserShow = React.createClass({
    getInitialState: function () {
      var userId = this.props.params.userId;
      return ({
        user: UserStore.findUser(userId),
        tracks: TrackStore.findUserTracks(userId)
      });
    },
    componentDidMount: function () {
      UserStore.addChangeListener(this.setUser);
      TrackStore.addChangeListener(this.setUserTracks);

      if (parseInt(this.props.params.userId) !== this.state.user.id) {
        this.getUser(this.props);
        this.getUserTracks(this.props);
      } else {
        UserActions.updateUserShow(this.state.user);
        if (this.state.user.tracks.length !== this.state.tracks.length) {
          this.getUserTracks(this.props);
        } else {
          TrackActions.resetPlaylist(this.state.tracks);
        }
      }
    },
    componentWillUnmount: function () {
      UserStore.removeChangeListener(this.setUser);
      TrackStore.removeChangeListener(this.setUserTracks);
    },
    componentWillReceiveProps: function (nextProps) {
      var newUser = UserStore.findUser(parseInt(nextProps.params.userId));
      
      // Check if the user is found in the store
      if (parseInt(nextProps.params.userId) === newUser.id) {
        UserActions.updateUserShow(newUser);
        this.setUser(newUser.id);
        // Check if TrackStore has newUser's tracks
        var trackStoreCache = TrackStore.findUserTracks(newUser.id);
        if (trackStoreCache.length === newUser.tracks.length) {
          this.setUserTracks(newUser.id);
          TrackActions.resetPlaylist(newUser.tracks);
        } else {
          this.getUserTracks(nextProps);
        }
      } else {
        this.getUser(nextProps);
        this.getUserTracks(nextProps);
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
    getUserTracks: function (props) {
      TrackActions.receiveTracks(props.params.userId);
    },
    setUserTracks: function (optionalUserId) {
      if (typeof optionalUserId === "undefined") {
        var userId = this.props.params.userId
        this.setState({tracks: TrackStore.findUserTracks(userId)});
      } else {
        this.setState({tracks: TrackStore.findUserTracks(optionalUserId)});
      }
    },
    render: function () {
      var user = this.state.user;
      var tracks = this.state.tracks;

      return (
        <div className="user-show row">
          <div className="jumbotron user-header">
            <h1>{user.username}</h1>
            <img className="profile-image"
                 src={user.image_url} 
                 height="100" 
                 width="100"/>
            <FollowButton 
              user={user} 
              followState={UserStore.doesCurrentUserFollow(user)} />
          </div>
          <div className="user-feed-container col-md-8">
            <div className="track-index">
              <TrackIndex tracks={tracks} />
            </div>
          </div>
          <UserSidebar user={user}/>
        </div>
      );
    }
  });
})(this);