(function (root) {
  if (typeof root.UserShow === "undefined") {
    root.userShow = {};
  }

  root.UserShow = React.createClass({
    getInitialState: function () {
      return ({user: root.UserStore.user()});
    },
    componentDidMount: function () {
      this.getUser();
      UserStore.addChangeListener(this.setUser);
    },
    componentWillUnmount: function () {
      UserStore.removeChangeListener(this.setUser);
    },
    getUser: function () {
      ApiActions.receiveSingleUser(this.props.routeParams.userId);
      this.setUser({user: root.UserStore.user()});
    },
    setUser: function () {
      this.setState({user: root.UserStore.user()});
    },
    render: function () {
      var user = (this.state.user === null ? {} : this.state.user)

      return (
        <div className="user-show row">
          <div className="jumbotron">
            <h1>{user.username}</h1>
          </div>
          <div className="user-feed-container col-md-8">
            <div className="track-index">
              track index placeholder
            </div>
          </div>
          <UserSidebar user={this.state.user}/>
        </div>
      );
    }
  });
})(this);