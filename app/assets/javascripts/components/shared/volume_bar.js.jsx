(function (root) {
  if (root.VolumeBar === "undefined") {
    root.VolumeBar = {};
  }

  root.VolumeBar = React.createClass({
    getInitialState: function () {
      return {volume: 75};
    },
    componentDidMount: function () {
      TrackStore.addVolumeListener(this.setVolume);
    },
    componentWillUnmount: function () {
      TrackStore.removeVolumeListener(this.setVolume);
    },
    setVolume: function () {
      this.setState({volume: (TrackStore.getVolume() * 100)});
    },
    changeVolume: function (e) {
      TrackActions.changeVolume(parseFloat(e.target.value / 100));
    },
    render: function () {
      var volume = this.state.volume;
      return (
        <div className="volume-bar-container">
          <input className="volume" onChange={this.changeVolume}
                 type="range" 
                 min="0" 
                 max="100" 
                 value={volume} />
        </div>
      );
    }
  });
})(this);