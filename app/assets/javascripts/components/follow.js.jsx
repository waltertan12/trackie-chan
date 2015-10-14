(function (root) {
  if (typeof root.FollowButton === "undefined") {
    root.FollowButton = {};
  }

  root.FollowButton = React.createClass({
    getInitialState: function () {
      var followState;
      if (this.props.followState) {
        followState = "Unfollow";
      } else {
        followState = "Follow";
      }
      return {followState: followState};
    },
    followOrUnfollow: function () {
      console.log("click");
      if (this.state.followState === "Follow") {
        this.setState({followState: "Unfollow"});
      } else {
        this.setState({followState: "Follow"});
      }
    },
    render: function () {
      return (
        <button className={"btn " + this.followState}
                onClick={this.followOrUnfollow}>
          {this.state.followState}
        </button>
      );
    }
  });
})(this);