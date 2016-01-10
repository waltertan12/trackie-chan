(function (root) {
  if (typeof root.AddToPlaylistButton === "undefined") {

  }

  var Link = ReactRouter.Link;
  
  root.AddToPlaylistButton = React.createClass({
    render: function () {
      if (!SessionStore.isLoggedIn()) {
        return (
          <a className="btn btn-warning btn-add-to-playlist"
             onClick={ModalActions.showLoginModal}>
            +Playlist
          </a>
        );
      } else {
        var trackId = this.props.trackId,
            userId = this.props.userId,
            link = "/users/" +  
                    userId + 
                    "/tracks/" +  
                    trackId + 
                    "/playlist-form";
        return (
          <Link className="btn btn-warning btn-add-to-playlist"
                to={"/users/" +  
                    userId + 
                    "/tracks/" +  
                    trackId + 
                    "/playlist-form"} >
            +Playlist
          </Link>
        );
      }
    }
  });
})(this);