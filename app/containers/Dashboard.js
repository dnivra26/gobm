import React from 'react';
import parse from 'parsers/DashboardParser';

class Dashboard extends React.Component {

  componentDidMount() {
    fetch('/api/dashboard')
      .then(resolve => resolve.json())
      .then((json) => {
        const data = parse(json);
        console.log('==========>>>>> data', data);
      });
  }

  render() {
    return (
        <div>Dashboard</div>
    );
  }
}

Dashboard.propTypes = {};
Dashboard.defaultProps = {};

export default Dashboard;
