import React, { Component, PropTypes } from 'react';
import Tree from 'components/Tree';
import styles from 'styles/tree.css';
require('styles/tree.css');

export default class Pipeline extends Component {
  render() {

    const options = {
        margin: {top: 20, left: 100, right: 100, bottom: 20},
        width: 500,
        height: 175,
        fill: "#F00",
        stroke: "#3E90F0",
        r: 30,
        animate: {
            type: 'oneByOne',
            duration: 200,
            fillTransition: 3
        },
        label: {
            fontFamily: 'Arial',
            fontSize: 12,
            bold: true,
            fill: '#34495E'
        }
    }

    return (
      <div className={styles.shadow_box}>
	<div>{ this.props.pipelineName }</div>
      	<Tree data={ this.props.data } options={ options } pipelineName={ this.props.pipelineName }/>
      </div>
    );
  }
}

Pipeline.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object.isRequired,
  pipelineName: PropTypes.string.isRequired
};

Pipeline.defalutProps = {
  data: {},
  options: {
	margin: {
		left: 80,
		top: 20,
		right: 80,
		bottom: 20
	},
  height: 600,
  width: 600,
  r: 20
  }
};
