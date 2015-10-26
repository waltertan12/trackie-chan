(function (root) {
  if (root.DashboardFeedIndex) {

  }
  root.DashboardFeedIndex = React.createClass({
    componentDidMount: function () {
      document.addEventListener('scroll', this.requery);
    },
    componentWillUnmount: function () {
      document.removeEventListener('scroll', this.requery);
    },
    requery: function (event) {
      if (document.body.scrollHeight == 
          document.body.scrollTop +        
          window.innerHeight) {
          alert("Bottom!");
      }
    },
    render: function () {
      return (
        <div className="dashboard-feed-index col-md-8">
          <FeedIndex type={"user"}/>
        </div>
      );
    }
  });
})(this);