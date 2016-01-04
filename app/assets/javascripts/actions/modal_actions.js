(function (root) {
  'use strict';
  if (typeof root.ModalActions === 'undefined') {
    root.ModalActions = {};
  }

  root.ModalActions.showLoginModal = function () {
    AppDispatcher.dispatch({
      actionType: ModalConstants.SHOW_LOGIN_MODAL
    });
  };

  root.ModalActions.hideLoginModal = function () {
    AppDispatcher.dispatch({
      actionType: ModalConstants.HIDE_LOGIN_MODAL
    });
  };
})(this);