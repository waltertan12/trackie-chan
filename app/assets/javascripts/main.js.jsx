var root = document.getElementById("content");
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var Link = ReactRouter.Link;
var IndexRoute = ReactRouter.IndexRoute;

var App = React.createClass({
  render: function () {
    console.log(this.props);
    return (
      <div>
        <Navbar currentUser={window.currentUser}/>
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
    <Route path="users/:userId" component={UserShow}/>
    <IndexRoute component={Dashboard} />
  </Route>
);

$(function () {
  React.render(
    <Router currentUser={window.currentUser}>{routes}</Router>,
    document.getElementById("content")
  );
});
