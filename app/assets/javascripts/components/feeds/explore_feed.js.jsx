(function (root) {
  if (root.ExploreFeed) {
    root.ExploreFeed = {};
  }

  root.ExploreFeed = React.createClass({
    render: function () {
      return (
        <div className='container'>
          <h1>Trending tracks and playlists</h1>
          <FeedIndex type='explore' />
        </div>
      );
    }
  });
})(this);