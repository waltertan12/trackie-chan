(function (root) {
  if (typeof root.TagIndexItem === "undefined") {
    root.TagIndexItem = {};
  }

  root.TagIndexItem = React.createClass({
    mixins: [ReactRouter.History],
    handleClick: function (e) {
      console.log("click");
      SearchActions.receiveQuery(this.props.tag.name, "tags")
      this.history.pushState(null, "/search");
    },
    render: function () {
      return (
        <li key={this.props.tag.id} className="tag">
          <div onClick={this.handleClick}>{this.props.tag.name}</div>
        </li>
      );
    }
  });
})(this);