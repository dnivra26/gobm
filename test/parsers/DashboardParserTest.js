import { expect } from 'chai';
import parse from '../../app/parsers/DashboardParser';
import data from './dashboard';


describe('Dashboard Parser', () => {
  const expectedPipeline1 = { name: 'sphinx-ui', label: '218' };
  const expectedPipeline2 = { name: 'sphinx-functional-test', label: '77' };

  it('should parse the Dashboard json and give the data we need', () => {
    const rawDashboard = data;
    const actualData = parse(rawDashboard);
    expect(actualData.length).to.be.equal(2);

    expect(actualData[0]).to.be.deep.equal(expectedPipeline1);
    expect(actualData[1]).to.be.deep.equal(expectedPipeline2);
  });
});
