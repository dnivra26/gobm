import { expect } from 'chai';
import parse from '../../app/parsers/ValueStreamParser';
import data from './valueStreamMap';

describe('Value Stream Parser', () => {
  const expected = {
    b7d782dc7f7792974d99b76bcd7b77712dab63dfa1c0e5e138f73f4da9394bc5: ['shark-ui'],
    'shark-ui': ['shark-functional-test'],
    'shark-functional-test': ['deploy-shark'],
    'deploy-shark': [],
  };

  it('should parse the Value Stream json', () => {
    const rawValueStreamMap = data;
    const actualData = parse(rawValueStreamMap);
    expect(actualData).to.be.deep.equal(expected);
  });
});

