import React, { PropTypes, Component } from 'react';
import Pipeline from 'components/Pipeline';
import _ from 'lodash';

class PipelineTree extends Component {
  render() {
    return (
      <div className="pipeline-tree">
	<div>=============================================</div>
      	<Pipeline name={this.props.data.name} />
      	{ this.getDisplayTree(this.props.data, []) }
	<div>=============================================</div>
      </div>
    );
  }
  getDisplayTree(data, tree) {
    tree.push(<div>---></div>);
    _.map(data.children, (child) => tree.push(<Pipeline key={data.name + child.name} name={ child.name } />));
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
