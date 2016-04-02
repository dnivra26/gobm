import _ from 'lodash';
export const valueStreamParser = (valueStreamData) => {
  return _.chain(valueStreamData.levels)
    .flatMap((level) => level.nodes)
    .reduce((result, node) => {
      result[node.id] = node.dependents;
      return result;
    }, {}).value();
};

export const valueStreamMapper = (valueStream, key, acc = {}) => {

  acc['name'] = key;
  if (_.isEmpty(valueStream[key]))
    return acc;

  acc['children'] = _.map(valueStream[key], (childKey) => {
    return valueStreamMapper(valueStream, childKey);
  });

  return acc;
};