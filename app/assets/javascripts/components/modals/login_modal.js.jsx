(function (root) {
  'use strict';
  
  root.LoginModal = React.createClass({
    getInitialState: function () {
      return ({
        login: '',
        signup: '',          
      });
    },
    componentDidMount: function () {
      ModalStore.addChangeListener(this.getClassNames);
    },
    componentWillUnmount: function () {
      ModalStore.removeChangeListener(this.getClassNames);
    },
    getClassNames: function () {
      this.setState(ModalStore.getClasses());
      console.log(this.state);
    },
    render: function () {
      console.log(this.state);
      var login = this.state.login,
          signup = this.state.signup;
      return (
        <div id='login-modal' className='login-modal'>
          <ul className='nav nav-tabs' role='tablist'>
            <li role='presentation' className={login}>
              <a href='#login' aria-controls='login' 
                 role='tab'   data-toggle='tab'>
                 Sign In
              </a>
            </li>
            <li role='presentation' className={signup}>
              <a href='#signup' aria-controls='signup' 
                 role='tab'      data-toggle='tab'>
                 Sign Up
              </a></li>
          </ul>
          <div className='tab-content'>
            <div role='tabpanel' className={'tab-pane ' + login} 
                 id='login'>
              <LoginForm />
            </div>
            <div role='tabpanel' className={'tab-pane ' + signup} 
                 id='signup'>
              <SignUpForm />
            </div>
          </div>
        </div>
      );
    }
  });
})(this);