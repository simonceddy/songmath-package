const Fraction = require('fraction.js/fraction');

/**
 * FrequencyCalculator
 *
 * The FrequencyCalculator can be used to calculate the frequency of notes relative
 * to the reference frequency. It uses the equal tempered hertz scale (aka standard
 * piano tuning).
 *
 * @param {number} referenceHz The reference frequency to base calculations on. Default is 440
 * @param {number} precision The decimal precision of returned values. Default is 3
 * @param {object} options Options passed to the constructor
 */
function FrequencyCalculator(referenceHz = 440, precision = 3, options = {}) {
  if (!(this instanceof FrequencyCalculator)) {
    return new FrequencyCalculator(referenceHz, precision, options);
  }
  this.referenceHz = new Fraction(referenceHz);
  this.precision = precision;

  this.twelthRootOfTwo = 2 ** (1 / 12);
}

function refHz() {
  return this.referenceHz.valueOf();
}

function calculateStepHz(steps, precision = null) {
  if (!steps || steps === 0) return this.referenceHz.valueOf();

  const hz = (this.referenceHz * (this.twelthRootOfTwo ** steps));
  const fraction = new Fraction(hz);

  return fraction.round(precision || this.precision).valueOf();
}

FrequencyCalculator.prototype.refHz = refHz;
FrequencyCalculator.prototype.calculateStepHz = calculateStepHz;

module.exports = FrequencyCalculator;
