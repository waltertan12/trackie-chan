(function (root) {
  if (typeof root.FollowButton === "undefined") {
    root.FollowButton = {};
  }

  root.FollowButton = React.createClass({
    getInitialState: function () {
      return {followState: ""};
    },
    // componentWillReceiveProps: function (nextProps) {
    //   var followState;
    //   if (this.nextProps.followState) {
    //     followState = "Unfollow";
    //   } else {
    //     followState = "Follow";
    //   }
    //   this.setState({followState: followState});
    // },
    componentWillMount: function () {
      var followState;
      if (this.props.followState) {
        followState = "Unfollow";
      } else {
        followState = "Follow";
      }
      this.setState({followState: followState});
    },
    followOrUnfollow: function () {
      console.log("click");
      if (this.state.followState === "Follow") {
        ApiActions.followUser(this.props.user);
        this.setState({followState: "Unfollow"});
      } else {
        ApiActions.unfollowUser(this.props.user);
        this.setState({followState: "Follow"});
      }
    },
    render: function () {
      if (window.CURRENT_USER_ID === this.props.user.id) {
        return <div></div>;
      } else {
        return (
          <button className={"btn " + this.followState}
                  onClick={this.followOrUnfollow}>
            {this.state.followState}
          </button>
        );
      }
    }
  });
})(this);