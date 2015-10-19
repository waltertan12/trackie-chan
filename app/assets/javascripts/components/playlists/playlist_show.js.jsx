(function (root) {
  if (typeof root.PlaylistShow === "undefined") {
    root.PlaylistShow = {};
  }

  root.PlaylistShow = React.createClass({
    getInitialState: function () {
      return {playlist: PlaylistStore.findPlaylist(-1, -1)};
    },
    componentDidMount: function () {
      PlaylistStore.addChangeListener(this.setPlaylist);
      this.getPlaylist();
    },
    componentWillUnmount: function () {
      PlaylistStore.addChangeListener(this.setPlaylist);
    },
    componentWillReceiveProps: function (nextProps) {

    },
    getPlaylist: function () {
      var userId = this.props.params.userId,
          playlistId = this.props.params.playlistId;
      PlaylistActions.receivePlaylist(userId, playlistId);
    },
    setPlaylist: function () {
      var userId = this.props.params.userId,
          playlistId = this.props.params.playlistId,
          playlist = PlaylistStore.findPlaylist(userId playlistId);

      this.setState({playlist: playlist});
    },
    render: function () {
      var playlist = this.state.playlist;
      return (
        <div className="playlist-show row">
          <div className="jumbotron playlist-show-header">
            <h1>{playlist.title}</h1>
            <h3>Description</h3>
            <p>{playlist.description}</p>
            <h3>Tags</h3>
            <Tags tags={playlist.tags}/>
          </div>
          <div className="playlist-show-container col-md-8">
            <div className="track-index">
              <TrackIndex tracks={playlist.tracks} />
            </div>
          </div>
          <TrackSidebar likes={playlist.likes}/>
        </div>
      );
    }
  });
})(this);