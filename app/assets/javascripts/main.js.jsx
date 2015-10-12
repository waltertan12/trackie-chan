var landingPage = (
  <div className="jumbotron">
    <h1>Trackie Chan</h1>
  </div>
);

console.log(document.getElementById("content"));

$(function () {
  React.render(
    landingPage,
    document.getElementById("content")
  );
});
