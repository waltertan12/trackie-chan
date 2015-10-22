(function (root) {
  if (root.TrackEdit) {
    root.TrackEdit = {};
  }

  var Link = ReactRouter.Link;

  root.TrackEdit = React.createClass({
    getInitialState: function () {
      return {
        id: -1, 
        track_url: "",
        title: "",
        description: "",
        image_url: "http://ak-hdl.buzzfed.com/static/enhanced/webdr05/2013/8/1/11/enhanced-buzz-29314-1375372673-18.jpg",
        username: "",
        comments: [],
        likes: [],
        tags: [],
        errors: []
      };
    },
    componentDidMount: function () {
      TrackStore.addChangeListener(this.setTrack);

      this.tagInput = new Taggle("tag-field", 
        {duplicateTagClass: 'bounce'}
      );
      
      var userId = this.props.params.userId,
          trackId = this.props.params.trackId,
          newTrack = TrackStore.findTrack(userId, trackId);
      
      if (newTrack.id === -1) {
        this.getTrack(this.props);
      } else {
        this.setTrack();
      }
    },
    componentWillReceiveProps: function (nextProps) {
      var userId = nextProps.params.userId,
          trackId = nextProps.params.trackId,
          newTrack = TrackStore.findTrack(userId, trackId);
      
      if (newTrack.id === -1) {
        this.getTrack(nextProps);
      } else {
        this.setTrack();
      }
    },
    processTags: function (tags) {
      var tagNames = [];
      for (var i = 0; i < tags.length; i++) {
        this.tagInput.add(tags[i].name);
      };
      return tagNames;
    },
    setTrack: function () {
      var userId = parseInt(this.props.params.userId),
          trackId = parseInt(this.props.params.trackId);

      var track = TrackStore.findTrack(userId, trackId);
      console.log(track);
      
      this.processTags(track.tags);

      this.setState(track)
    },
    getTrack: function (props) {
      TrackActions.receiveSingleTrack(props.params.trackId);
    },
    _onSubmit: function (e) {
      e.preventDefault();
      console.log("click");
    },
    updateTitle: function (e) {
      var value = e.target.value,
          newState = this.state;
      newState.title = value;
      this.setState(newState);
    },
    updateDescription: function (e) {
      var value = e.target.value,
          newState = this.state;
      newState.description = value;
      this.setState(newState);
    },
    updateImageFile: function (e) {
      this.imageFile = e.target;
    },
    render: function () {
      console.log(this.state);
      return (
        <div className="track-edit col-md-offset-3 col-md-6">
          <h1>Edit Track</h1>

          <form onSubmit={this._onSubmit}>
            <div className="form-group">
              <label>Title</label><br/>
              <input type="text"
                     className="form-control"
                     onChange={this.updateTitle}
                     value={this.state.title}/>
            </div><br/><br/>

            <div>
              <label>Tags</label><br/>
              <div id="tag-field"
                   className="textarea input clearfix"
                   placeholder="enter tag">
              </div>
            </div><br/><br/>

            <div className="form-group">
              <label>Description</label><br/>
              <textarea rows="5"
                        className="form-control"
                        onChange={this.updateDescription}
                        value={this.state.description}/>
            </div><br/><br/>

            <div className="form-group">
              <label>Upload an image <em>(optional aka it does not work)</em></label><br/>
              <input type="file"
                     accept="image/*"
                     onChange={this.updateImageFile} />
            </div><br/><br/>

            <input type="submit" 
                   className="btn btn-success"
                   value="Save"/>&nbsp;OR&nbsp;
            <Link to="/" className="btn btn-danger">Destroy Track :(</Link>
          </form>
        </div>
      );
    }
  });
})(this);