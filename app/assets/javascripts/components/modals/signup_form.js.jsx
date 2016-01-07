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
      // SessionActions.login(this.state);
      this.cancel();
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
    render: function () {
      return (
        <div>
          <h3>Create an Account!</h3>
          <form className='form-group'>
            <label>Username</label><br/>
            <input className='form-control'
                   type='text' 
                   value={this.state.username}
                   onChange={this.username}/>
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
                   value={this.state.password}
                   onChange={this.updatePasswordConfirmation}/>
            <br/><br/>

            <input className='btn btn-success transition'
                   type='submit' 
                   value='Create an Account!'
                   onClick={this.login}/>

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