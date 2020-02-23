const { assert } = require('chai');
const ScaleCalculator = require('../ScaleCalculator');

describe('ScaleCalculator', () => {
  describe('#calculateOctaveRange()', () => {
    it('should calculate the frequencies of each note for the given octave range', () => {
      assert.equal(new ScaleCalculator().calculateOctaveRange(4, 5).length, 24);
      assert.equal(new ScaleCalculator().calculateOctaveRange(0, 8).length, 108);
    });
  })
  
})
