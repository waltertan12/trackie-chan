/* global $, ErrorActions, console */

(function (root) {
  "use strict";
  if (typeof root.TrackUtils === "undefined") {
    root.TrackUtils = {};
  }

  root.TrackUtils = {
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
          ErrorActions.receiveErrors(err.responseJSON);
        }
      });
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
          ErrorActions.receiveErrors(err.responseJSON);
        }
      });
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
          metadata.track_url = cloudinaryResponse.url;
          utils.uploadTrack(metadata, callback);
        },
        error: function (cloudinaryResponse) {
          console.log(cloudinaryResponse.responseText);
        }
      });
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
          if (err.responseText === "Not logged in error") {
            // window.location.assign("/sign_in");
            ModalActions.showLoginModal();
          } else {
            ErrorActions.receiveErrors(err.responseJSON);
          }
        }
      });
    },
    updateTrack: function (trackData, callback, redirect) {
      $.ajax({
        url: "/api/tracks/" + trackData.id,
        type: "PUT",
        dataType: "json",
        data: {track: trackData},
        success: function (track) {
          callback(track);
          var uri = "/users/" + track.user_id +
                    "/tracks/" + track.id;
          redirect(uri);
        },
        error: function (err) {
          if (err.responseText === "Not logged in error") {
            // window.location.assign("/sign_in");
            ModalActions.showLoginModal(); 
          } else {
            ErrorActions.receiveErrors(err.responseJSON);
          }
        }
      });
    },
    destroyTrack: function (trackData, callback, redirect) {
      $.ajax({
        url: "/api/tracks/" + trackData.id,
        type: "DELETE",
        dataType: "json",
        success: function (track) {
          callback(track);
          redirect();
        },
        error: function (err) {
          if (err.responseText === "Not logged in error") {
            // window.location.assign("/sign_in"); 
            ModalActions.showLoginModal();
          } else {
            ErrorActions.receiveErrors(err.responseJSON);
          }
        }
      });
    }
  };
})(this);