/* globals React, console */
(function (root) {
  'use strict';

  root.SignUpForm = React.createClass({
    getInitialState: function () {
      return ({
        username: '',
        email: '',
        password: '',
        password_confirmation: '' 
      });
    },
    updateUsername: function (e) {
      e.preventDefault();
      this.setState({username: e.target.value})
    },
    updateEmail: function (e) {
      e.preventDefault();
      this.setState({email: e.target.value})
    },
    updatePassword: function (e) {
      e.preventDefault();
      this.setState({password: e.target.value})
    },
    updatePasswordConfirmation: function (e) {
      e.preventDefault();
      this.setState({password_confirmation: e.target.value})
    },
    signup: function (e) {
      e.preventDefault();
      var user = this.state;
      SessionActions.createUser(user);
    },
    cancel: function (e) {
      if (typeof e !== 'undefined') e.preventDefault();
      this.setState({
        username: '', 
        email: '', 
        password: '', 
        password_confirmation: ''
      });
      ModalActions.hideLoginModal();
    },
    demo: function (e) {
      e.preventDefault();
      SessionActions.demoLogin();
      this.cancel();
    },
    render: function () {
      return (
        <div>
          <h3>Create an Account!</h3>
          <form className='form-group'>
            <label>Username</label><br/>
            <input className='form-control'
                   type='text' 
                   value={this.state.username}
                   onChange={this.updateUsername}/>
            <br/><br/>

            <label>Email</label><br/>
            <input className='form-control'
                   type='text' 
                   value={this.state.email}
                   onChange={this.updateEmail}/>
            <br/><br/>

            <label>Password</label><br/>
            <input className='form-control'
                   type='password'
                   value={this.state.password}
                   onChange={this.updatePassword}/>
            <br/><br/>

            <label>Password Confirmation</label><br/>
            <input className='form-control'
                   type='password'
                   value={this.state.password_confirmation}
                   onChange={this.updatePasswordConfirmation}/>
            <br/><br/>

            <input className='btn btn-success transition'
                   type='submit' 
                   value='Sign Up!'
                   onClick={this.signup}/>

            <input className='btn btn-primary transition'
                   type='submit' 
                   value='Demo Account'
                   onClick={this.demo}/>

            <input className='btn btn-danger transition'
                   type='submit' 
                   value='Cancel :('
                   onClick={this.cancel}/>
          </form>
        </div>
      );
    }
  });
})(this);