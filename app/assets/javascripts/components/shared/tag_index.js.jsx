(function (root) {
  "use strict";
  
  if (typeof root.Tags === "undefined") {
    root.Tags = {};
  }

  root.Tags = React.createClass({
    render: function () {
      return (
        <div className="tags-index">
          {
            this.props.tags.map(function (tag) {
              return (
                <TagIndexItem key={tag.id} tag={tag} />
              );
            })
          }
        </div>
      );
    }
  });
})(this);