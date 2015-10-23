(function (root) {
  if (typeof root.UserSettings === "undefined") {
    root.UserSettings = {};
  }

  root.UserSettings = React.createClass({
    mixins: [ReactRouter.History],
    getInitialState: function () {
      return ({
        username: "",
        email: "",
        image_url: "",
        password: "",
        password_confirmation: ""
      });
    },
    componentDidMount: function () {
      UserStore.addChangeListener(this.setCurrentUser);
      this.getCurrentUser();
    },
    getCurrentUser: function () {
      ApiActions.receiveCurrentUser(window.CURRENT_USER_ID);
    },
    setCurrentUser: function () {
      this.currentUser = UserStore.currentUser();
      this.setState({
        username: this.currentUser.username,
        email: this.currentUser.email,
        image_url: this.currentUser.image_url,
        password: "",
        password_confirmation: ""
      });
    },
    updateUsername: function (e) {
      var currentState = this.state;
      currentState.username = e.target.value;
      this.setState(currentState);
    },
    updateEmail: function (e) {
      var currentState = this.state;
      currentState.email = e.target.value;
      this.setState(currentState);
    },
    updateImageURL: function (e) {
      var currentState = this.state;
      currentState.image_url = e.target.value;
      this.setState(currentState);
    },
    updatePassword: function (e) {
      var currentState = this.state;
      currentState.password = e.target.value;
      this.setState(currentState);
    },
    updatePasswordConfirmation: function (e) {
      var currentState = this.state;
      currentState.password_confirmation = e.target.value;
      this.setState(currentState);
    },
    _onSubmit: function (e) {
      e.preventDefault();
      var hist = this.props.history;
      var redirect = function (optionalUrl) {
        if (typeof optionalUrl === "undefined") {
          hist.pushState(null, "/");
        } else {
          hist.pushState(null, optionalUrl);
        }
      }
      ApiActions.updateUser(this.currentUser.id, this.state);
    },
    render: function () {
      console.log(this.currentUser);
      console.log(this.state);
      return (
        <div className="col-md-6 col-md-offset-3">
          <div className="user-settings-header">
            <h1>User Settings</h1>
            <p>
              Type in password and password confirmation before saving changes
            </p>
          </div>
          <form className="form" onSubmit={this._onSubmit}>
            <div className="form-group">
              <label for="username">Username</label>
              <input className="form-control" 
                     type="text" 
                     onChange={this.updateUsername}
                     value={this.state.username}/>
            </div><br/><br/>

            <div className="form-group">
              <label for="email">Email</label>
              <input className="form-control" 
                     type="text" 
                     onChange={this.updateEmail}
                     value={this.state.email}/>
            </div><br/><br/>

            <div className="form-group">
              <label for="image_url">Profile Picture</label>
              <input className="form-control" 
                     type="text" 
                     onChange={this.updateImageURL}
                     value={this.state.image_url}/>
            </div><br/><br/>

            <div className="form-group">
              <label for="password">
                Password <em>(only fill this in to change your password)</em>
              </label>
              <input className="form-control" 
                     type="password" 
                     onChange={this.updatePassword}/>
            </div><br/><br/>

            <div className="form-group">
              <label for="password_confirmation">Password Confirmation</label>
              <input className="form-control" 
                     type="password" 
                     onChange={this.updatePasswordConfirmation}/>
            </div><br/><br/>

            <input className="btn btn-success" type="submit" value="Save"/>
          </form>
        </div>
      );
    }
  });
})(this);