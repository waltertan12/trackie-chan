(function (root) {
  'use strict';
  if (typeof root.FollowButton === "undefined") {
    root.FollowButton = {};
  }

  root.FollowButton = React.createClass({
    getInitialState: function () {
      return {followState: ""};
    },
    componentWillReceiveProps: function (nextProps) {
      var followState;
      if (nextProps.followState) {
        followState = "Unfollow";
      } else {
        followState = "Follow";
      }
      this.setState({followState: followState});
    },
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
      if (this.state.followState === "Follow") {
        ApiActions.followUser(this.props.user);
        this.setState({followState: "Unfollow"});
      } else {
        ApiActions.unfollowUser(this.props.user);
        this.setState({followState: "Follow"});
      }
      var id = SessionStore.getUserId();
      FeedActions.receiveUserFeed();
      ApiActions.receiveSingleUserData(id);
      ApiActions.receiveSingleUser(this.props.user.id);
      ApiActions.receiveCurrentUser(id);
    },
    render: function () {
      if (SessionStore.getUserId() === this.props.user.id) {
        return <div></div>;
      } else {
        return (
          <button className={"btn " + this.state.followState + ' transition'}
                  onClick={this.followOrUnfollow}>
            {this.state.followState}
          </button>
        );
      }
    }
  });
})(this);