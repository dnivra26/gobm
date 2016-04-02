import React, { Component, PropTypes } from 'react';
import { Tree } from 'react-pathjs-chart';

export default class Pipeline extends Component {
  render() {
    return (
      <Tree data={ this.props.data } />
    );
  }
}

Pipeline.propTypes = {
  data: PropTypes.object.isRequired,
};

Pipeline.defalutProps = {
  data: {},
};
