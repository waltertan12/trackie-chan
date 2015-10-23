(function (root) {
  if (typeof root.TrackLikeIndex === "undefined") {
    root.TrackLikeIndex = {};
  }

  root.TrackLikeIndex = React.createClass({
    componentWillReceiveProps: function (nextProps) {

    },
    render: function () {
      var likeItems;
      if (this.props.likes.length === 0) {
        likeItems = <li>No likes</li>
      } else {
        likeItems = (
          this.props.likes.map( function (like, index) {
            if (index < 5) {
              return <TrackLikeIndexItem key={like.id} like={like} />
            }
          })
        );
      }
      return (
        <div className="track-like-index">
          <h3>Likes</h3>
          <hr/>
          <ul>
            {likeItems}
          </ul>
        </div>
      )
    }
  });
})(this);