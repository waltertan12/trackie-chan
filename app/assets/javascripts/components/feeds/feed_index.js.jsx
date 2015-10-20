(function (root) {
  if (root.FeedIndex) {
    root.FeedIndex = {};
  }

  root.FeedIndex = React.createClass({
    getInitialState: function () {
      return {feedItems: []};
    },
    componentDidMount: function () {
      FeedStore.addChangeListener(this.setFeedItems);
      FeedActions.startPolling(this.props.type);
      this.setFeedItems();
    },
    componentWillReceiveProps: function () {
      FeedActions.startPolling(this.props.type);
    },
    componentWillUnmount: function () {
      FeedStore.removeChangeListener(this.setFeedItems);
    },
    setFeedItems: function () {
      this.setState({feedItems: FeedStore.userFeed()});
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
        feedItems = <li>There is nothing in your feed</li>
      } else {
        console.log(this.state);
        asdfasdfadsf = this.state;
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