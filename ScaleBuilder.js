const { WesternChromaticScale } = require('./scales');
const FrequencyCalculator = require('./FrequencyCalculator');

function ScaleBuilder(frequencyCalc, options = {}) {
  this.referenceNote = options.referenceNote || 'A';

  this.scale = options.scale || WesternChromaticScale;

  this.referenceOctave = options.referenceOctave || 4;

  this.referenceNoteKey = this.scale.indexOf(this.referenceNote);

  this.frequencyCalc = frequencyCalc || new FrequencyCalculator();
}

function makeOctaveRange(min, max) {
  const totalOctaves = min < max ? max - min + 1 : 1;

  const totalSteps = totalOctaves * this.scale.length;

  const refStep = (this.referenceOctave - min) * this.scale.length + this.referenceNoteKey;

  const firstStep = 0 - refStep;

  let currentStep = firstStep;

  const notes = [];

  for (let i = 0; i < totalSteps; i++) {
    const currentLoopOctave = Math.floor(i / this.scale.length);

    const currentOctave = currentLoopOctave + min;

    const key = i - (currentLoopOctave * this.scale.length);

    const currentNote = this.scale[key];

    notes.push({
      note: `${currentNote}${currentOctave}`,
      step: i,
      hz: this.frequencyCalc.calculateStepHz(currentStep)
    });
    currentStep++;
  }

  return notes;
}

function makePiano() {
  return this.makeOctaveRange(0, 8);
}

ScaleBuilder.prototype.makeOctaveRange = makeOctaveRange;
ScaleBuilder.prototype.makePiano = makePiano;

module.exports = ScaleBuilder;