const { assert } = require('chai');
const FrequencyCalculator = require('../FrequencyCalculator');

describe('FrequencyCalculator', () => {
  describe('#calculateStepHz()', () => {
    it('should return the reference frequency when given no args', () => {
      assert.equal(FrequencyCalculator().calculateStepHz(), 440);
    });
    it('should return the correct frequency for the given steps', () => {
      assert.equal(FrequencyCalculator().calculateStepHz(-1), 415.305);
    });
    it('should return the frequency rounded to the given precision', () => {
      assert.equal(FrequencyCalculator().calculateStepHz(1, 2), 466.16);
    });
    
  })
  
})
