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
    },
    setUser: function () {
      this.setState({user: root.UserStore.user()});
    },
    render: function () {
      var user = (this.state.user === null ? {} : this.state.user)

      return (
        <div>
          <div className="jumbotron">
            <h1>{user.username}</h1>
          </div>
        </div>
      );
    }
  });
})(this);