(function (root) {
  'use strict';
  
  root.LoginModal = React.createClass({
    getInitialState: function () {
      return ({
        email: '',
        password: ''
      });
    },
    updateEmail: function (e) {
      e.preventDefault();
      this.setState({email: e.target.value})
    },
    updatePassword: function (e) {
      e.preventDefault();
      this.setState({password: e.target.value})
    },
    login: function (e) {
      e.preventDefault();
      SessionActions.login(this.state);
      // this.cancel(e);
      // this.setState({email: '', password: ''});
      // hide modal
    },
    cancel: function (e) {
      e.preventDefault();
      this.setState({email: '', password: ''});
      // hide modal
    },
    render: function () {
      return (
        <div className='login-modal'>
          <h3>Login</h3>
          <form className='form-group'>
            <label>Email</label><br/>
            <input className='form-control'
                   type='text' 
                   onChange={this.updateEmail}/>
            <br/><br/>

            <label>Password</label><br/>
            <input className='form-control'
                   type='password' 
                   onChange={this.updatePassword}/>
            <br/><br/>

            <input className='btn btn-success transition'
                   type='submit' 
                   value='Login'
                   onClick={this.login}/>

            <input className='btn btn-danger transition'
                   type='submit' 
                   value='Cancel'
                   onClick={this.cancel}/>
          </form>
        </div>
      );
    }
  });
})(this);