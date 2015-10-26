(function (root) {
  if (root.FeedIndex) {
    root.FeedIndex = {};
  }

  var Link = ReactRouter.Link;

  root.FeedIndex = React.createClass({
    getInitialState: function () {
      return {feedItems: []};
    },
    componentDidMount: function () {
      FeedStore.addChangeListener(this.setFeedItems);
      FeedActions.startPolling(this.props.type);
      this.setFeedItems();
    },
    componentWillReceiveProps: function (nextProps) {
      FeedActions.startPolling(nextProps.type);
    },
    componentWillUnmount: function () {
      FeedStore.removeChangeListener(this.setFeedItems);
    },
    setFeedItems: function () {
      switch(this.props.type) {
        case "user":
          this.setState({feedItems: FeedStore.userFeed()});
          break;
        case "explore":
          this.setState({feedItems: FeedStore.exploreFeed()});
          break;
      }
    },
    trackOrPlaylistRender: function (source, key) {
      switch(source.type) {
        case "Track":
          return (
            <TrackIndexItem key={key} 
                            track={source} 
                            makeLink={true}/>
          );
        case "Playlist":
          return (
            <PlaylistIndexItem key={key} 
                               playlist={source}/>
          );
      }
    },
    render: function () {
      var feedItems;
      if (this.state.feedItems.length === 0) {
        feedItems = (
          <li>
            There is nothing in your feed. 
            Try checking out the <Link to="/explore">explore</Link> page!
          </li>
        );
      } else {
        feedItems = this.state.feedItems.map( function (item, index) {
          item = this.trackOrPlaylistRender(item, index);
          return item;
        }.bind(this));
      }

      return (
        <ul className="feed-list">
          {feedItems}
        </ul>
      );
    }
  });
})(this);