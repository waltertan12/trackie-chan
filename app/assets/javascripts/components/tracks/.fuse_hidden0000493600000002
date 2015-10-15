(function (root) {
  if (typeof root.TrackUpload === "undefined") {
    root.TrackUpload = {};
  }

  root.TrackUpload = React.createClass({
    getInitialState: function () {
      return (
        {
          title: "",
          description: "",
          tags: ""
        }
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
          imageFormData = new FormData();

      audioFormData.append("upload_preset", window.CLOUDINARY_PRESET);
      audioFormData.append("file", audioFile);

      if (typeof this.imageFile !== "undefined") {
        imageFormData.append("upload_preset", window.CLOUDINARY_PRESET);
        imageFormData.append("file", imageFile);
      } else {
        imageFormData = undefined;
      }

      ApiActions.uploadTrack({
        metadata: this.state,
        audio: audioFormData,
        image: imageFormData
      });
    },
    render: function () {
      console.log("State");
      console.log(this.state);
      return (
        <div className="container track-upload col-md-6 col-md-offset-3">
          <h1>Upload a new Track!</h1>
          <form onSubmit={this._onSubmit}>
            <div class="form-group">
              <label for="title">Title</label><br/>
              <input type="text"
                     className="form-control"
                     onChange={this.updateTitle}/>
            </div><br/><br/>

            <div class="form-group">
              <label for="tags">Tags</label><br/>
              <input type="text"
                     className="form-control"
                     onChange={this.updateTags}/>
            </div><br/><br/>

            <div class="form-group">
              <label for="description">Description</label><br/>
              <textarea rows="5"
                        className="form-control"
                        onChange={this.updateDescription}/>
            </div><br/><br/>



            <div class="form-group">
              <label for="file">Choose a file</label><br/>
              <input type="file"
                     className="track-upload-input"
                     accept="audio/*"
                     onChange={this.updateTrackFile}/>
            </div><br/><br/>

            <div class="form-group">
              <label for="file">Upload an image <em>(optional)</em></label><br/>
              <input type="file"
                     accept="image/*"
                     onChange={this.updateImageFile}/>
            </div><br/><br/>

            <input type="submit" 
                   className="btn btn-success" 
                   value="Upload!"/>
          </form>
        </div>
      )
    }
  });
})(this);