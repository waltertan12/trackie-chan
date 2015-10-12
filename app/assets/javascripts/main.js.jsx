var landingPage = (
  <div>
    <div className="jumbotron">
      <h1>Excellent Website</h1>
    </div>
    <h3>Reviews</h3>
    <ul>
      <li>"It is an excellent website" - Anonymous</li>
    </ul>
  </div>
);

console.log(document.getElementById("content"));

$(function () {
  React.render(
    landingPage,
    document.getElementById("content")
  );
});
