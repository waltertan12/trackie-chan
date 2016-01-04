(function (root) {
  'use strict';

  if (typeof root.ModalStore === 'undefined') {
    root.ModalStore = {};
  }

  root.ModalStore = $.extend({}, EventEmitter, {
    showLoginModal: function () {
      var loginModal = document.getElementById('login-modal');
      loginModal.style.marginTop = '0%';
    },

    hideLoginModal: function () {
      var loginModal = document.getElementById('login-modal');
      loginModal.style.marginTop = '-70%';
    },

    dispatchId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case root.ModalConstants.SHOW_LOGIN_MODAL:
          root.ModalStore.showLoginModal();
          break;
        case root.ModalConstants.HIDE_LOGIN_MODAL:
          root.ModalStore.hideLoginModal();
          break;
      }
    })
  });
})(this);