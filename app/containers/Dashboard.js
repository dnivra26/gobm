import React from 'react';
import parse from 'parsers/DashboardParser';
import {valueStreamParser, valueStreamMapper} from 'parsers/ValueStreamParser';
import Pipeline from 'components/Pipeline';
import _ from 'lodash';


class Dashboard extends React.Component {

  constructor() {
    super();
    this.state = {valueMap: []};
  }

  componentDidMount() {
    fetch('/api/dashboard'
    ).then((resolve) => {
      return resolve.json();
    }).then((text) => {
      _.each(parse(text), ({ name, label }) => {
        fetch(`/go/pipelines/value_stream_map/${name}/${label}`)
          .then((resolve) => {
            return resolve.json();
          })
          .then((finalText) => {
            const valueStream = valueStreamParser(finalText);
            let data = this.state.valueMap;
            data.push(valueStreamMapper(valueStream, name));
            this.setState({
              valueMap: data,
            });
          });
      });

    });
  }

  getPipelines(valueMap) {
    return _.map(valueMap, (map) => <Pipeline data={ map }/>);
  }

  render() {
    return (<div>{this.getPipelines(this.state.valueMap)}</div>);
  }
}

Dashboard.propTypes = {};
Dashboard.defaultProps = {};

export default Dashboard;
