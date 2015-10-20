(function (root) {
  if (root.PlaylistFormIndexItem === "undefined") {
    root.PlaylistFormIndexItem = {};
  }

  root.PlaylistFormIndexItem = React.createClass({
    getInitialState: function () {
      return {addState: ""};
    },
    componentDidMount: function () {
      PlaylistStore.addChangeListener(this.setAddState);
      this.setAddState(this.props);
    },
    componentWillUnmount: function () {
      PlaylistStore.removeChangeListener(this.setAddState);
    },
    componentWillReceiveProps: function (nextProps) {
      this.setAddState(nextProps);

    },
    setAddState: function (props) {
      var playlist = this.props.playlist,
          userId = window.CURRENT_USER_ID,
          trackId = parseInt(this.props.trackId),
          playlistId = parseInt(this.props.playlist.id),
          text;

      if (PlaylistStore.isTrackInPlaylist(userId, trackId, playlistId)) {
        this.setState({addState: "Added"});
      } else {
        this.setState({addState: "Add"});
      }
    }, 
    handleClick: function (e) {
      var playlist = this.props.playlist,
          userId = window.CURRENT_USER_ID,
          trackId = parseInt(this.props.trackId),
          playlistId = parseInt(this.props.playlist.id);

      if (this.state.addState === "Add") {
        // Call playlist action to add track to playlist
        PlaylistActions.addTrackToPlaylist(trackId, playlistId);
        this.setState({addState: "Added"});
      } else {
        // Call playlist action to add track to playlist
        PlaylistActions.removeTrackFromPlaylist(trackId, playlistId);
        this.setState({addState: "Add"});
      }
    },
    render: function () {
      var playlist = this.props.playlist,
          addState = this.state.addState;
      return (
        <li>
          {playlist.title}
          <button className="btn btn-primary"
                  onClick={this.handleClick}>
            {addState}
          </button>
        </li>
      );
    }
  });
})(this);