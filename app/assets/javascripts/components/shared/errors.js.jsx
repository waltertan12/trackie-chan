(function (root) {
  if (typeof root.ErrorDisplay === "undefined") {
    root.ErrorDisplay = {};
  }

  root.ErrorDisplay = React.createClass({
    componentDidMount: function () {

      asdf = this;
    },
    _onClick: function () {
      console.log("click");
      var mountNode = React.findDOMNode(document.getElementById("errors"));
      var unmount = React.unmountComponentAtNode(mountNode);
    },
    render: function () {
      var errors = this.props.errors;
      if (errors.length === 0) {
        return <div></div>
      } else {
        return (
          <div className="errors-container container alert-danger">
            <div onClick={this._onClick} className="errors-container-close">
              X
            </div>
            <ul className="errors-list">
              {
                errors.map( function (error) {
                  return <li className="errors-list-item">{error}</li>
                })
              }
            </ul>
          </div>
        );
      }
    }
  });
})(this);