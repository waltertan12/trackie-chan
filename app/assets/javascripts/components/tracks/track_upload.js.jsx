(function (root) {
  if (typeof root.TrackUpload === "undefined") {
    root.TrackUpload = {};
  }

  var Link = ReactRouter.Link;
  root.TrackUpload = React.createClass({
    mixins: [ReactRouter.History],
    getInitialState: function () {
      return (
        {
          title: "",
          description: "",
          tags: ""
        }
      );
    },
    componentDidMount: function () {
      this.tagInput = new Taggle("tag-field", 
        {tags: [
          "wow", 
          "such track", 
          "very sound",
          "much cloud"
        ]}
      );
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
    updateTrackFile: function (e) {
      this.audioFile = e.target;
    },
    updateImageFile: function (e) {
      this.imageFile = e.target;
    },
    _onSubmit: function (e) {
      e.preventDefault();
      var audioFile = this.audioFile.files[0],
          audioFormData = new FormData(),
          imageFormData = new FormData(),
          tags = this.tagInput.getTagValues();
      console.log(tags);

      audioFormData.append("upload_preset", window.CLOUDINARY_PRESET);
      audioFormData.append("file", audioFile);

      if (typeof this.imageFile !== "undefined") {
        imageFormData.append("upload_preset", window.CLOUDINARY_PRESET);
        imageFormData.append("file", imageFile);
      }

      console.log(imageFormData);

      TrackActions.uploadTrack({
        metadata: this.state,
        audio: audioFormData,
        tags: tags
      });

      this.history.pushState(null, "/tracks/progress");
    },
    render: function () {
      var cancel = "No, I don't want to share my awesome tunes :(";
      return (
        <div className="container track-upload col-md-6 col-md-offset-3">
          <h1>Upload a new Track!</h1>
          <form onSubmit={this._onSubmit}>
            <div className="form-group">
              <label>Title</label><br/>
              <input type="text"
                     className="form-control"
                     onChange={this.updateTitle}/>
            </div><br/><br/>

            <div>
              <label>Tags</label><br/>
              <div id="tag-field"
                   className="textarea input"
                   onChange={this.handleChange}
                   placeholder="enter tag">
              </div>
            </div><br/><br/>

            <div className="form-group">
              <label>Description</label><br/>
              <textarea rows="5"
                        className="form-control"
                        onChange={this.updateDescription}/>
            </div><br/><br/>

            <div className="form-group">
              <label>Choose a file</label><br/>
              <input type="file"
                     className="track-upload-input"
                     accept="audio/*"
                     onChange={this.updateTrackFile}/>
            </div><br/><br/>

            <div className="form-group">
              <label>Upload an image <em>(optional)</em></label><br/>
              <input type="file"
                     accept="image/*"
                     onChange={this.updateImageFile}/>
            </div><br/><br/>

            <input type="submit" 
                   className="btn btn-success"
                   value="Upload!"/>&nbsp;
            <Link to="/" className="btn btn-danger">{cancel}</Link>
          </form>
        </div>
      )
    }
  });
})(this);