import React, { Component, PropTypes } from 'react';
import 'styles/App.css';

export default class Pipeline extends Component {
  render() {
    return (
      <div>
        <div className="boxed">
          {this.props.name}
        </div>
      </div>
    );
  }
}

Pipeline.propTypes = {
  name: PropTypes.object.isRequired,
};

Pipeline.defalutProps = {
  name: {},
};
