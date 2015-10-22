(function (root) {
  if (root.ExploreFeed) {
    root.ExploreFeed = {};
  }

  root.ExploreFeed = React.createClass({
    render: function () {
      return (
        <div>
          <h1>Trending tracks and playlists</h1>
          <FeedIndex type="explore" />
        </div>
      );
    }
  });
})(this);