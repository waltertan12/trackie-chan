$(function () {
  console.log("REACT reloading???");
  var root = document.getElementById("content");
  var Route = ReactRouter.Route;
  var Router = ReactRouter.Router;
  var Link = ReactRouter.Link;
  var IndexRoute = ReactRouter.IndexRoute;

  var App = React.createClass({
    render: function () {
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
      <IndexRoute component={Dashboard} />
      <Route path="users/:userId" component={UserShow}/>
    </Route>
  );

  React.render(
    <Router currentUser={window.currentUser}>{routes}</Router>,
    root
  );
});