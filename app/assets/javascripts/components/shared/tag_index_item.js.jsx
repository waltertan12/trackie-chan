(function (root) {
  if (typeof root.TagIndexItem === "undefined") {
    root.TagIndexItem = {};
  }

  root.TagIndexItem = React.createClass({
    mixins: [ReactRouter.History],
    handleClick: function (e) {
      console.log("click");
      SearchActions.setOption("tags");

      var query = {
        query: this.props.tag.name,
        options: SearchStore.option()
      };

      SearchActions.receiveQuery(query)
      this.history.pushState(null, "/search", query);
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