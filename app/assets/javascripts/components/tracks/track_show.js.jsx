(function (root) {
  if (typeof root.TrackShow === "undefined") {
    root.TrackShow = {}
  }

  root.TrackShow = React.createClass({
    render: function () {
      return (
        <div className="container track-show row">
          <h1>Track!!!!!!!</h1>
          <div className="track-show-container col-md-8">
            <TrackHeader />
          </div>
          <CurrentUserSidebar currentUser={UserStore.currentUser()}/>
        </div>
      );
    }
  });
})(this);