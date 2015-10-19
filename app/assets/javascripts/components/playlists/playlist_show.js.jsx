(function (root) {
  if (typeof root.PlaylistShow === "undefined") {
    root.PlaylistShow = {};
  }

  root.PlaylistShow = React.createClass({
    getInitialState: function () {
      return {playlist: PlaylistStore.findPlaylist(-1, -1)};
    },
    componentDidMount: function () {

    },
    componentWillUnmount: function () {

    },
    componentWillReceiveProps: function () {

    },
    render: function () {
      var playlist = this.state.playlist;
      return (
        <div className="playlist-show row">
          <div className="jumbotron playlist-show-header">
            <h1>{playlist.title}</h1>
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