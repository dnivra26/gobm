import _ from 'lodash';
const parse = (dashboardData) =>
  _.flatMap(dashboardData._embedded.pipeline_groups, (pipelineGroup) => {
    const filteredPipelines = _.filter(pipelineGroup._embedded.pipelines, (pipeline) => {
      const stages = _.get(pipeline._embedded.instances[0], '_embedded.stages', []);
      return _.some(stages, { status: 'Failed' });
    });

    return _.map(filteredPipelines, (filteredPipeline) => {
      return {
        name: filteredPipeline.name,
        label: filteredPipeline._embedded.instances[0].label,
      };
    });
  });

export default parse;
