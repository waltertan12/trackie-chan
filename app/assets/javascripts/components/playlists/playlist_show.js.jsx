(function (root) {
  if (typeof root.PlaylistShow === "undefined") {
    root.PlaylistShow = {};
  }

  root.PlaylistShow = React.createClass({
    getInitialState: function () {

    },
    render: function () {
      return (
        <div className="playlist-show row">
          <div className="jumbotron playlist-show-header">
            <h1>PLAYISTLISTLSITLSI</h1>
          </div>
          <div className="playlist-show-container col-md-8">
            <div className="track-index">
              <TrackIndex tracks={[]} />
            </div>
          </div>
          <TrackSidebar likes={[]}/>
        </div>
      );
    }
  });
})(this);