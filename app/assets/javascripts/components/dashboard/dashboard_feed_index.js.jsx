(function (root) {
  if (root.DashboardFeedIndex) {

  }
  root.DashboardFeedIndex = React.createClass({
    render: function () {
      return (
        <div className="dashboard-feed-index col-md-8">
          <FeedIndex type={"user"}/>
        </div>
      );
    }
  });
})(this);