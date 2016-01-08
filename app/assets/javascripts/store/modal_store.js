(function (root) {
  'use strict';

  if (typeof root.ModalStore === 'undefined') {
    root.ModalStore = {};
  }

  var CHANGE_EVENT = 'CHANGE_EVENT',
      _classes = {login: '', signup: ''},
      _setClasses = function (name) {
        switch (name) {
          case 'SIGNUP':
            _classes = {login: '', signup: 'active'};
            break;
          case 'LOGIN':
            _classes = {login: 'active', signup: ''};
            break;
        }
      };

  root.ModalStore = $.extend({}, EventEmitter.prototype, {
    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    showLoginModal: function () {
      _setClasses('LOGIN');
      var loginModal = document.getElementById('login-modal');
      loginModal.style.marginTop = '0%';
    },

    hideLoginModal: function () {
      var loginModal = document.getElementById('login-modal');
      loginModal.style.marginTop = '-100%';
    },

    showSignUpModal: function () {
      _setClasses('SIGNUP');
      var signUpModal = document.getElementById('login-modal');
      signUpModal.style.marginTop = '0%';
    },

    hideSignUpModal: function () {
      var signUpModal = document.getElementById('login-modal');
      signUpModal.style.marginTop = '-100%';
    },

    getClasses: function () {
      return _classes;
    },

    dispatchId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case root.ModalConstants.SHOW_LOGIN_MODAL:
          root.ModalStore.showLoginModal();
          ModalStore.emit(CHANGE_EVENT);
          break;
        case root.ModalConstants.HIDE_LOGIN_MODAL:
          root.ModalStore.hideLoginModal();
          break;
        case root.ModalConstants.SHOW_SIGNUP_MODAL:
          root.ModalStore.showSignUpModal();
          ModalStore.emit(CHANGE_EVENT);
          break;
        case root.ModalConstants.HIDE_SIGNUP_MODAL:
          root.ModalStore.hideSignUpModal();
          break;
      }
    })
  });
})(this);