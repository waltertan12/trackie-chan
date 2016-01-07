(function (root) {
  'use strict';

  if (typeof root.ModalStore === 'undefined') {
    root.ModalStore = {};
  }

  root.ModalStore = $.extend({}, EventEmitter, {
    showLoginModal: function () {
      var loginModal = document.getElementById('login-modal');
      var signup = document.getElementById('login-modal-signup');
      var login = document.getElementById('login-modal-login');
      loginModal.style.marginTop = '0%';
      signup.className = '';
      login.className = 'active';
    },

    hideLoginModal: function () {
      var loginModal = document.getElementById('login-modal');
      loginModal.style.marginTop = '-70%';
    },

    showSignUpModal: function () {
      var signUpModal = document.getElementById('login-modal');
      var signup = document.getElementById('login-modal-signup');
      var login = document.getElementById('login-modal-login');
      signup.className = 'active';
      login.className = '';
      signUpModal.style.marginTop = '0%';
      console.log('wow');
    },

    hideSignUpModal: function () {
      var signUpModal = document.getElementById('login-modal');
      signUpModal.style.marginTop = '-70%';
    },

    dispatchId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case root.ModalConstants.SHOW_LOGIN_MODAL:
          root.ModalStore.showLoginModal();
          break;
        case root.ModalConstants.HIDE_LOGIN_MODAL:
          root.ModalStore.hideLoginModal();
          break;
        case root.ModalConstants.SHOW_SIGNUP_MODAL:
          console.log('showing signup modal');
          root.ModalStore.showSignUpModal();
          break;
        case root.ModalConstants.HIDE_SIGNUP_MODAL:
          root.ModalStore.hideSignUpModal();
          break;
      }
    })
  });
})(this);