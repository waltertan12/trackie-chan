(function (root) {
  if (root.TrackEdit) {
    root.TrackEdit = {};
  }

  var Link = ReactRouter.Link;

  root.TrackEdit = React.createClass({
    mixins: [ReactRouter.History],
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
      ErrorStore.addChangeListener(this.setErrors);

      this.tagInput = new Taggle("tag-field", 
        {duplicateTagClass: 'bounce'}
      );
      
      var userId = window.CURRENT_USER_ID,
          trackId = parseInt(this.props.params.trackId),
          newTrack = TrackStore.findTrack(userId, trackId);

      if (newTrack.id === -1) {
        this.getTrack(this.props);
      } else {
        this.setTrack();
      }
    },
    componentWillUnmount: function () {
      ErrorStore.removeChangeListener(this.setErrors);
    },
    componentWillReceiveProps: function (nextProps) {
      var userId = window.CURRENT_USER_ID,
          trackId = parseInt(nextProps.params.trackId),
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

      this.processTags(track.tags);

      this.setState(track)
    },
    getTrack: function (props) {
      TrackActions.receiveSingleTrack(props.params.trackId);
    },
    setErrors: function  () {
      var node = React.findDOMNode(document.getElementById("errors"));
      React.render(<ErrorDisplay errors={ErrorStore.all()}/>, node);
      this.setState({errors: ErrorStore.all()});
    },
    _onSubmit: function (e) {
      e.preventDefault();
      var hist = this.props.history,
          tags = this.tagInput.getTagValues(),
          track = this.state;
          redirect = function (optionalPath) {
            if (typeof optionalPath === "undefined") {
              hist.goBack();
            } else {
              hist.pushState(null, optionalPath);
            }
          };

      track.tags = tags;

      TrackActions.updateTrack(track, redirect);
    },
    handleCancel: function (e) {
      e.preventDefault();
      this.props.history.goBack();
    },
    handleDestroy: function (e) {
      e.preventDefault();
      console.log(":(");
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
      var value = e.target.value,
          newState = this.state;
      newState.image_url = value;
      this.setState(newState);
    },
    render: function () {
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
              <label>Update Image Link</label><br/>
              <input type="text"
                     className="form-control"
                     value={this.state.image_url}
                     onChange={this.updateImageFile} />
            </div><br/><br/>

            <input type="submit" 
                   className="btn btn-success"
                   value="Save"/>&nbsp;
            <button onClick={this.handleCancel} 
                    className="btn btn-warning">Cancel</button>&nbsp;
            <button onClick={this.handleDestroy}
                    className="btn btn-danger">Destroy Track :(</button>
          </form>
        </div>
      );
    }
  });
})(this);