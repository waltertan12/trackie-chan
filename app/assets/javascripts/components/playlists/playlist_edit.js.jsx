(function (root) {
  if (root.PlaylistEdit === "undefined") {
    root.PlaylistEdit = {};
  }

  root.PlaylistEdit = React.createClass({
    mixins: [ReactRouter.History],
    getInitialState: function () {
      return ({
        title: "",
        description: "",
        trackId: -1,
        errors: [],
        tags: []
      });
    },
    componentDidMount: function () {
      PlaylistStore.addChangeListener(this.setPlaylist);
      ErrorStore.addChangeListener(this.setErrors);

      this.tagInput = new Taggle("playlist-tag-field");

      var userId = parseInt(this.props.params.userId),
          playlistId = parseInt(this.props.params.playlistId),
          newPlaylist = PlaylistStore.findPlaylist(userId, playlistId);

      if (newPlaylist.id === -1) {
        this.getPlaylist();
      } else {
        this.setPlaylist()
      }
    },
    componentWillUnmount: function () {
      ErrorStore.removeChangeListener(this.setErrors);
    },
    processTags: function (tags) {
      var tagNames = [];
      for (var i = 0; i < tags.length; i++) {
        this.tagInput.add(tags[i].name);
      };
      return tagNames;
    },
    getPlaylist: function () {
      var playlistId = parseInt(this.props.params.playlistId);
      PlaylistActions.receivePlaylist(playlistId);
    },
    setPlaylist: function () {
      var userId = parseInt(this.props.params.userId),
          playlistId = parseInt(this.props.params.playlistId),
          newPlaylist = PlaylistStore.findPlaylist(userId, playlistId);

      this.processTags(newPlaylist.tags);

      this.setState(PlaylistStore.findPlaylist(userId, playlistId));
    },
    setErrors: function  () {
      var node = React.findDOMNode(document.getElementById("errors"));
      React.render(<ErrorDisplay errors={ErrorStore.all()}/>, node);
      this.setState({errors: ErrorStore.all()});
    },
    handleCancel: function () {
      this.props.history.goBack();
    },
    updateTitle: function (e) {
      this.setState({title: e.target.value});
    },
    updateDescription: function (e) {
      this.setState({description: e.target.value});
    },
    handleCancel: function (e) {
      e.preventDefault();
      this.props.history.goBack();
    },
    handleDestroy: function (e) {
      e.preventDefault();
      var playlistId = parseInt(this.props.params.playlistId),
          hist = this.props.history;
     redirect = function (optionalPath) {
        if (typeof optionalPath === "undefined") {
          hist.goBack();
        } else {
          hist.pushState(null, optionalPath);
        }
      };
      PlaylistActions.destroyPlaylist(playlistId, redirect);
    },_onSubmit: function (e) {
      e.preventDefault();
      var hist = this.props.history,
          tags = this.tagInput.getTagValues(),
          playlist = this.state,
          hist = this.props.history;
          redirect = function (optionalPath) {
            if (typeof optionalPath === "undefined") {
              hist.goBack();
            } else {
              hist.pushState(null, optionalPath);
            }
          };

      playlist.tags = tags;

      PlaylistActions.updatePlaylist(playlist, redirect);
    },
    render: function () {
      return (
        <div className="col-md-6 col-md-offset-3">
          <h1>Edit Playlist</h1>
          <form onSubmit={this._onSubmit}>
            <div className="form-group">
              <label>Title</label><br/>
              <input className="form-control"
                     onChange={this.updateTitle}
                     type="text"
                     value={this.state.title}/>
            </div>

            <div className="form-group">
              <label>Description</label><br/>
              <textarea className="form-control"
                     onChange={this.updateDescription}
                        type="text"
                        rows="5"
                        value={this.state.description}/>
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
                   value="Save"/>
            &nbsp;
            <button className="btn btn-warning"
                    onClick={this.handleCancel}>
              Cancel
            </button>
            &nbsp;
            <button className="btn btn-danger" 
                    onClick={this.handleDestroy}>
              Destroy Playlist
            </button>
          </form>
        </div>
      );
    }
  })
})(this);