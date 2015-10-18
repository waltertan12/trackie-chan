(function (root) {
  if (typeof root.TrackLikeIndexItem === "undefined") {
    root.TrackLikeIndexItem = {};
  }

  var Link = ReactRouter.Link;
  root.TrackLikeIndexItem = React.createClass({
    render: function () {
      var like = this.props.like;
      return (
        <li className="track-like-index-item">
          <Link to={"/users/" + like.user_id}>
            <img src={like.image_url} height="25" width="25"/>&nbsp;
            {like.username}
          </Link>
        </li>
      );
    }
  });
})(this);