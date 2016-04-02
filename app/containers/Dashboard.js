import React from 'react';
import parse from 'parsers/DashboardParser';
import Pipeline from 'components/Pipeline';

const pdata = {
  'name': 'Root',
  'children': [
    {
      'name': 'Acre',
      'children': [
        {
          'name': 'Schumm'
        },
        {
          'name': 'Considine'
        }
      ]
    },
    {
      'name': 'Minas Gerais',
      'children': [
        {
          'name': 'Lubowitz'
        },
        {
          'name': 'Schmitt'
        },
        {
          'name': 'Oberbrunner'
        }
      ]
    }
  ]
};

class Dashboard extends React.Component {

  componentDidMount() {
    fetch('/api/dashboard'
    ).then((resolve) => {
      console.log('...', resolve);
      return resolve.text();
    }).then((text) => {
      console.log(' text ..........', text);
    });
  }

  render() {
    return (
      <Pipeline data={ pdata } />
    );
  }
}

Dashboard.propTypes = {};
Dashboard.defaultProps = {};

export default Dashboard;
