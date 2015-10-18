(function (root) {
  if (typeof root.Tags === "undefined") {
    root.Tags = {};
  }

  root.Tags = React.createClass({
    render: function () {
      return (
        <div className="tags-index">
          {
            this.props.tags.map(function (tag) {
              return <li className="tag">{tag.name}</li>
            })
          }
        </div>
      );
    }
  });
})(this);