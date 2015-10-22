(function (root) {
  if (root.PlaylistForm === "undefined") {

  }

  root.PlaylistForm = React.createClass({
    mixings: [ReactRouter.History],
    getInitialState: function () {
      var userId = window.CURRENT_USER_ID;
      return ({
        playlists: PlaylistStore.findUserPlaylists(userId),
        title: "",
        description: "",
        trackId: -1
      });
    },
    componentDidMount: function () {
      PlaylistStore.addChangeListener(this.setPlaylists);
      this.tagInput = new Taggle("playlist-tag-field");
      this.setState({trackId: this.props.trackId});
      this.getPlaylists();
      ts = this;
      hist = this.props.history;
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
    createPlaylist: function (e) {
      e.preventDefault();
      var data = {
        playlist: {
          title: this.state.title,
          description: this.state.description
        },
        track_id: this.props.params.trackId,
        tags: this.tagInput.getTagValues()
      };
      
      PlaylistActions.createPlaylist(data);
      this.props.history.goBack();
    },
    handleCancel: function () {
      var userId = this.props.params.userId,
          trackId = this.props.params.trackId;
      this.props.history.goBack();
    },
    updateTitle: function (e) {
      this.setState({title: e.target.value});
    },
    updateDescription: function (e) {
      this.setState({description: e.target.value});
    },
    render: function () {
      var playlists = this.state.playlists,
          userId = this.props.params.userId,
          trackId = this.props.params.trackId,
          playlistComponents;

      if (playlists.length === 0 ) {
        playlistComponents = <li>You have no playlists</li>
      } else {
        playlistComponents = (
          playlists.map( function (playlist) {
            return (
              <PlaylistFormIndexItem trackId={trackId}
                                     userId={userId}
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
              <div className="col-md-6 col-md-offset-3">
                <h1>Add to Existing Playlist</h1>
                <ul className="playlist-form-index">
                  {playlistComponents}
                  <br/><br/>
                  <button className="btn btn-danger" 
                          onClick={this.handleCancel}>
                    Cancel
                  </button>
                </ul>
              </div>
            </div>

            <div className="tab-pane" id="create">
              <div className="col-md-6 col-md-offset-3">
              <h1>Create a New Playlist</h1>
                <form onSubmit={this.createPlaylist}>
                  <div className="form-group">
                    <label>Title</label><br/>
                    <input className="form-control"
                           onChange={this.updateTitle}
                           type="text"/>
                  </div>

                  <div className="form-group">
                    <label>Description</label><br/>
                    <textarea className="form-control"
                           onChange={this.updateDescription}
                              type="text"
                              rows="5"/>
                  </div>

                  <div>
                    <label>Tags</label><br/>
                    <div id="playlist-tag-field"
                         className="textarea input clearfix"
                         placeholder="enter tag">
                    </div>
                  </div><br/>

                  <input className="btn btn-success"
                         type="submit" 
                         value="Create Playlist"/>
                  &nbsp;
                  <button className="btn btn-danger" 
                          onClick={this.handleCancel}>
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });
})(this);