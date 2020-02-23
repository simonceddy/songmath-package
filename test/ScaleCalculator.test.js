const { assert } = require('chai');
const ScaleCalculator = require('../ScaleCalculator');

const calc = new ScaleCalculator();

describe('ScaleCalculator', () => {
  describe('#calculateOctaveRange()', () => {
    it('should calculate the frequencies of each note for the given octave range', () => {
      assert.equal(calc.calculateOctaveRange(4, 5).length, 24);
      assert.equal(calc.calculateOctaveRange(0, 8).length, 108);
      assert.equal(calc.calculateOctaveRange(2, 5)[0].note, 'C2');
    });
  })
  describe('#calculatePiano()', () => {
    it('should return octaves between 0 and 8', () => {
      const piano = calc.calculatePiano(); 
      assert.equal(piano.length, 108);
      assert.equal(piano[0].note, 'C0');
      assert.equal(piano[107].note, 'B8');
    });
    
  })
  
})
