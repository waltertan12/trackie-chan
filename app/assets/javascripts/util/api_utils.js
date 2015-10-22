(function (root) {
  if (typeof root.ApiUtils === "undefined") {
    root.ApiUtils = {};
  }

  root.ApiUtils = {
    fetchUser: function (userId, callback) {
      $.ajax({
        url: "/api/users/" + userId,
        type: "GET",
        dataType: "json",
        success: function (user) {
          callback(user);
        },
        error: function (err) {
          console.log(err.responseText);
        }
      })
    },
    updateUser: function (userId, params, callback) {
      $.ajax({
        url: "/api/users/" + userId,
        type: "PUT",
        dataType: "json",
        data: {user: params},
        success: function (user) {
          callback(user);
        },
        error: function (err) {
          console.log(err.responseText);
        }
      })
    },
    deleteUser: function (user) {
      $.ajax({
        url: "/api/users/" + user.id,
        type: "DELETE",
        dataType: "json",
        success: function (user) {

        },
        error: function (err) {
          console.log(err.responseText);
        }
      })
    },
    destroySession: function() {
      $.ajax({
        url: "sessions",
        dataType: "json",
        type: "DELETE",
        success: function(response) {
          window.location.assign("/");
        },
        error: function (err) {
          console.log(err.responseText);
        }
      })
    },
    followUser: function (user, callback) {
      $.ajax({
        type: "POST",
        url: "/api/followings",
        data: {followed_id: user.id},
        success: function (currentUser) {
          callback(currentUser);
        },
        error: function (err) {
          console.log(err.responseText)
        }
      })
    },
    unfollowUser: function (user, callback) {
      $.ajax({
        type: "DELETE",
        url: "/api/followings",
        data: {followed_id: user.id},
        success: function (currentUser) {
          callback(currentUser);
        },
        error: function (err) {
          console.log(err.responseText)
        }
      })
    },
    fetchTracks: function (userId, callback) {
      $.ajax({
        url: "api/tracks",
        data: {user_id: userId},
        type: "GET",
        dataType: "json",
        success: function (tracks) {
          callback(userId, tracks);
        },
        error: function(err) {
          console.log(err.responseText);
        }
      })
    },
    fetchTrack: function (trackId, callback) {
      $.ajax({
        url: "api/tracks/" + trackId,
        type: "GET",
        dataType: "json",
        success: function (track) {
          callback(track.user_id, track);
        },
        error: function(err) {
          console.log(err.responseText);
        }
      })
    },
    uploadTrackToCloudinary: function (uploadData, callback, uploadCallback) {
      var utils = this,
          metadata = uploadData.metadata,
          audio = uploadData.audio,
          image;

      metadata.tags = uploadData.tags;

      if (typeof uploadData.image !== "undefined") {
        image = uploadData.image;
      }

      $.ajax({
        url: "https://api.cloudinary.com/" + 
              window.CLOUDINARY_VERSION + 
              "/" + 
              window.CLOUDINARY_NAME +
              "/video/upload",
        type: "POST",
        dataType: "json",
        processData: false,
        contentType: false,
        data: audio,
        xhr: function() {
          var xhr = new window.XMLHttpRequest();

          xhr.upload.addEventListener("progress", function(evt){
            if (evt.lengthComputable) {
              var percentComplete = evt.loaded / evt.total;
              uploadCallback(percentComplete * 100);
            }
          }, false);

          return xhr;
        },
        success: function (cloudinaryResponse) {
          console.log(cloudinaryResponse);
          metadata.track_url = cloudinaryResponse.url;
          utils.uploadTrack(metadata, callback);
        },
        error: function (cloudinaryResponse) {
          console.log(cloudinaryResponse.responseText);
        }
      })
    },
    uploadTrack: function (audioData, callback) {
      $.ajax({
        url: "/api/tracks",
        type: "POST",
        dataType: "json",
        data: {track: audioData},
        success: function (track) {
          callback(track);
        },
        error: function (err) {
          console.log(err.responseText);
        }
      })
    },
    updateTrack: function (trackData, callback, redirect) {
      $.ajax({
        url: "/api/tracks/" + trackData.id,
        type: "PUT",
        dataType: "json",
        data: {track: trackData},
        success: function (track) {
          console.log("response");
          console.log(track);
          callback(track);
          var uri = "/users/" + track.user_id +
                    "/tracks/" + track.id;
          redirect(uri);
        },
        error: function (err) {
          ErrorActions.receiveErrors(err.responseJSON);
        }
      })
    },
    createComment: function (comment, trackId, callback) {
      $.ajax({
        url: "/api/comments",
        type: "POST",
        data: {comment: comment},
        dataType: "json",
        success: function (comment) {
          callback(comment, trackId);
        },
        error: function (err) {
          console.log(err.responseText);
        }
      })
    },
    fetchComments: function (trackId, callback) {
      $.ajax({
        url: "/api/comments",
        type: "GET",
        dataType: "json",
        data: {track_id: trackId},
        success: function (comments) {
          callback(comments, trackId);
        },
        error: function (err) {
          console.log(err.responseText);
        }
      })
    }
  };
})(this);