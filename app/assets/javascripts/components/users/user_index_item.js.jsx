(function (root) {
  if (root.UserIndexItem === "undefined") {
    root.UserIndexItem = {};
  }

  var Link = ReactRouter.Link;

  root.UserIndexItem = React.createClass({
    render: function () {
      var user = this.props.user;
      return (
        <li className="user-index-item">
          <Link to={"/users/" + user.id}>
            <img src={user.image_url} />
            {user.username}
          </Link>
        </li>
      );
    }
  });
})(this);