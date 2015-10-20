(function (root) {
  if (root.PlaylistForm === "undefined") {

  }

  root.PlaylistForm = React.createClass({
    mixings: [ReactRouter.History],
    getInitialState: function () {
      var userId = window.CURRENT_USER_ID;
      return {playlists: PlaylistStore.findUserPlaylists(userId)}
    },
    componentDidMount: function () {
      PlaylistStore.addChangeListener(this.setPlaylists);
      this.getPlaylists();
    },
    componentWillUnmount: function () {
      PlaylistStore.removeChangeListener(this.setPlaylists);
    },
    componentWillReceiveProps: function (nextProps) {

    },
    getPlaylists: function () {
      PlaylistActions.receivePlaylists(window.CURRENT_USER_ID);
    },
    setPlaylists: function () {
      var userId = window.CURRENT_USER_ID;
      this.setState({playlists: PlaylistStore.findUserPlaylists(userId)})
    },
    handleCancel: function () {
      this.history.back();
    },
    render: function () {
      console.log(this);
      var playlists = this.state.playlists,
          trackId = this.props.params.trackId,
          playlistComponents;

      if (playlists.length === 0 ) {
        playlistComponents = <li>You have no playlists</li>
      } else {
        playlistComponents = (
          playlists.map( function (playlist) {
            return (
              <PlaylistFormIndexItem trackId={trackId}
                                     key={playlist.id} 
                                     playlist={playlist}/>
            );
          })
        );
      }
      return (
        <div className="navbar">
          <ul className="nav nav-tabs">
            <li role="presentation" className="active">
              <a href="#add" data-toggle="tab">
                Add to Playlist
              </a>
            </li>
            <li role="presentation">
              <a href="#create" data-toggle="tab">
                Create New
              </a>
            </li>
          </ul>

          <div className="tab-content">
            <div className="tab-pane active" id="add">
              <h1>Add to Existing Playlist</h1>
              <ul>
                {playlistComponents}
                <br/><br/>
                <button className="btn btn-danger" 
                        onClick={this.handleCancel}>
                  Cancel
                </button>
              </ul>
            </div>
            <div className="tab-pane" id="create">
              <h1>Create New</h1>
            </div>
          </div>
        </div>
      );
    }
  });
})(this);