const { assert } = require('chai');
const ScaleBuilder = require('../ScaleBuilder');

const calc = new ScaleBuilder();

describe('ScaleBuilder', () => {
  describe('#makeOctaveRange()', () => {
    it('should calculate the frequencies of each note for the given octave range', () => {
      assert.equal(calc.makeOctaveRange(4, 5).length, 24);
      assert.equal(calc.makeOctaveRange(0, 8).length, 108);
      assert.equal(calc.makeOctaveRange(2, 5)[0].note, 'C2');
    });
  })
  describe('#makePiano()', () => {
    it('should return octaves between 0 and 8', () => {
      const piano = calc.makePiano(); 
      assert.equal(piano.length, 108);
      assert.equal(piano[0].note, 'C0');
      assert.equal(piano[107].note, 'B8');
      assert.equal(piano[107].hz, 7902.133);
    });
    
  })
  
})
