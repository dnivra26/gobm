import _ from 'lodash';
const parse = (valueStreamData) => {
  return _.chain(valueStreamData.levels)
    .flatMap((level) => level.nodes)
    .reduce((result, node) => {
      result[node.id] = node.dependents;
      return result;
    }, {}).value();
}

export default parse;