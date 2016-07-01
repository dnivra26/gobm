import React, { PropTypes, Component } from 'react';
import Pipeline from 'components/Pipeline';
import _ from 'lodash';

class PipelineTree extends Component {
  render() {
    console.log('this.props.data:', this.props.data);
    return (
      <Pipeline name={this.props.data.name} />
    );
  }
  getDisplayTree(data, tree) {
    tree.push(<div>---></div>);
    _.map(data.children, (child) => tree.push(<Pipeline name={ child.name } />));
    _.map(data.children, (child) => this.getDisplayTree(child, tree));
    return tree;
  }
}

PipelineTree.propTypes = {
  data: PropTypes.object.isRequired,
};
PipelineTree.defaultProps = {
  data: {},
};

export default PipelineTree;
