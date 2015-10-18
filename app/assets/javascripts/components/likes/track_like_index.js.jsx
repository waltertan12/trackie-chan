(function (root) {
  if (typeof root.TrackLikeIndex === "undefined") {
    root.TrackLikeIndex = {};
  }

  root.TrackLikeIndex = React.createClass({
    render: function () {
      var likeItems;
      if (this.props.likes.length === 0) {
        likeItems = <li>No likes</li>
      } else {
        likeItems = (
          this.props.likes.map( function (like) {
            return <TrackLikeIndexItem like={like} />
          })
        );
      }
      return (
        <div className="track-like-index">
          <h3>Likes</h3>
          <ul>
            {likeItems}
          </ul>
        </div>
      )
    }
  });
})(this);