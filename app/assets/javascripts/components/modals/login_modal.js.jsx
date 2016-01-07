(function (root) {
  'use strict';
  
  root.LoginModal = React.createClass({
    render: function () {
      return (
        <div id='login-modal' className='login-modal'>
          <ul className='nav nav-tabs' role='tablist'>
            <li role='presentation' id='login-modal-login'>
              <a href='#login' aria-controls='login' 
                 role='tab'   data-toggle='tab'>
                 Sign In
              </a>
            </li>
            <li role='presentation' id='login-modal-signup'>
              <a href='#signup' aria-controls='signup' 
                 role='tab'      data-toggle='tab'>
                 Sign Up
              </a></li>
          </ul>
          <div className='tab-content'>
            <div role='tabpanel' className='tab-pane active' id='login'>
              <LoginForm />
            </div>
            <div role='tabpanel' className='tab-pane' id='signup'>
              <SignUpForm />
            </div>
          </div>
        </div>
      );
    }
  });
})(this);