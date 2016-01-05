(function (root) {
  'use strict'; 

  if (typeof root.ApiUtils === 'undefined') {
    root.ApiUtils = {};
  }

  root.ApiUtils = {
    fetchUser: function (userId, callback) {
      $.ajax({
        url: '/api/users/' + userId,
        type: 'GET',
        dataType: 'json',
        success: function (user) {
          callback(user);
        },
        error: function (err) {
          ErrorActions.receiveErrors(err.responseJSON);
        }
      })
    },
    updateUser: function (userId, params, callback, redirect) {
      $.ajax({
        url: '/api/users/' + userId,
        type: 'PUT',
        dataType: 'json',
        data: {user: params},
        success: function (user) {
          callback(user);
          redirect();
        },
        error: function (err) {
          if (err.responseText === 'Not logged in error') {
            // window.location.assign('/sign_in');
            ModalActions.showLoginModal();
          } else {
            ErrorActions.receiveErrors(err.responseJSON);
          }
        }
      })
    },
    deleteUser: function (user) {
      $.ajax({
        url: '/api/users/' + user.id,
        type: 'DELETE',
        dataType: 'json',
        success: function (user) {

        },
        error: function (err) {
          if (err.responseText === 'Not logged in error') {
            window.location.assign('/sign_in'); 
          } else {
            ErrorActions.receiveErrors(err.responseJSON);
          }
        }
      })
    },
    destroySession: function() {
      $.ajax({
        url: 'sessions',
        dataType: 'json',
        type: 'DELETE',
        success: function(response) {
          window.location.assign('/');
        },
        error: function (err) {
          ErrorActions.receiveErrors(err.responseJSON);
        }
      })
    },
    followUser: function (user, callback) {
      $.ajax({
        type: 'POST',
        url: '/api/followings',
        data: {followed_id: user.id},
        success: function (currentUser) {
          callback(currentUser);
        },
        error: function (err) {
          if (err.responseText === 'Not logged in error') {
            window.location.assign('/sign_in'); 
          } else {
            ErrorActions.receiveErrors(err.responseJSON);
          }
        }
      })
    },
    unfollowUser: function (user, callback) {
      $.ajax({
        type: 'DELETE',
        url: '/api/followings',
        data: {followed_id: user.id},
        success: function (currentUser) {
          callback(currentUser);
        },
        error: function (err) {
          if (err.responseText === 'Not logged in error') {
            window.location.assign('/sign_in'); 
          } else {
            ErrorActions.receiveErrors(err.responseJSON);
          }
        }
      })
    },

    createComment: function (comment, trackId, callback) {
      $.ajax({
        url: '/api/comments',
        type: 'POST',
        data: {comment: comment},
        dataType: 'json',
        success: function (comment) {
          callback(comment, trackId);
        },
        error: function (err) {
          if (err.responseText === 'Not logged in error') {
            // window.location.assign('/sign_in'); 
            ModalActions.showLoginModal();
          } else {
            ErrorActions.receiveErrors(err.responseJSON);
          }
        }
      })
    },
    fetchComments: function (trackId, callback) {
      $.ajax({
        url: '/api/comments',
        type: 'GET',
        dataType: 'json',
        data: {track_id: trackId},
        success: function (comments) {
          callback(comments, trackId);
        },
        error: function (err) {
          if (err.responseText === 'Not logged in error') {
            // window.location.assign('/sign_in');
            ModalActions.showLoginModal(); 
          } else {
            ErrorActions.receiveErrors(err.responseJSON);
          }
        }
      })
    }
  };
})(this);