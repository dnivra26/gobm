import { expect } from 'chai';
import {valueStreamParser, valueStreamMapper} from '../../app/parsers/ValueStreamParser';
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
    const actualData = valueStreamParser(rawValueStreamMap);
    expect(actualData).to.be.deep.equal(expected);
  });
});


describe('mapper', ()=> {
  context('map value stream to tree data', () => {

    const data = {
      "1dbbb903b32b5bbe2c56144d20e508b04e0f8a35234e9fd195e3040d89d3e34c": ["sphinx-ws"],
      "sphinx-ws": ["sphinx-functional-test", "dell"],
      "sphinx-functional-test": ["deploy-sphinx"],
      "deploy-sphinx": [],
      "dell": []
    };

    const expected = {
      'name': 'sphinx-ws',
      'children': [
        {
          'name': 'sphinx-functional-test',
          'children': [
            {
              'name': 'deploy-sphinx'
            }
          ]
        },
        {
          name: 'dell',
        }
      ]
    };

    it('should convert value stream data to tree data', () => {
      expect(valueStreamMapper(data, 'sphinx-ws')).to.be.deep.eql(expected);
    });
  });
});

