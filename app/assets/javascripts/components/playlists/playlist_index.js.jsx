(function (root) {
  if (typeof root.PlaylistIndex === "undefined") {
    root.PlaylistIndex = {};
  }

  root.PlaylistIndex = React.createClass({
    getInitialState: function () {
      return {playlists: []};
    },
    componentDidMount: function () {
      PlaylistStore.addChangeListener(this.setPlaylists);
      PlaylistActions.receivePlaylists(this.props.userId);
    },
    componentWillUnmount: function () {
      PlaylistStore.removeChangeListener(this.setPlaylists);
    },
    componentWillReceiveProps: function (nextProps) {
      var playlists = PlaylistStore.findUserPlaylists(nextProps.userId);
      // if (typeof playlists === "undefined") {
      if (playlists.length === 0) {
        this.getPlaylists(nextProps);
      } else {
        this.setPlaylists({playlists: playlists});
      }
    },
    getPlaylists: function (props) {
      PlaylistActions.receivePlaylists(props.userId);
    },
    setPlaylists: function (optionalUserId) {
      var playlists = PlaylistStore.findUserPlaylists(this.props.userId);
      this.setState({playlists: playlists})
    },
    render: function () {
      if (this.state.playlists.length === 0) {
        return <div/>
      } else {
        return (
          <div className="playlist-index">
            {
              this.state.playlists.map( function (playlist) {
                return <PlaylistIndexItem key={playlist.id} 
                                          playlist={playlist} />;
              })
            }
          </div>
        );
      }
    }
  });
})(this);