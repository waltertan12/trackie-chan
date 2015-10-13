var root = document.getElementById("content");
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var Link = ReactRouter.Link;
var IndexRoute = ReactRouter.IndexRoute;

var App = (
  <div>
    <Navbar />
    <div className="jumbotron">
      <h1>Trackie Chan</h1>
    </div>
  </div>
);

console.log(document.getElementById(root));

$(function () {
  React.render(
    App,
    document.getElementById("content")
  );
});
