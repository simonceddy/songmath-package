const { WesternChromaticScale } = require('./scales');
const FrequencyCalculator = require('./FrequencyCalculator');

function ScaleCalculator(frequencyCalc, options = {}) {
  this.referenceNote = options.referenceNote || 'A';

  this.scale = options.scale || WesternChromaticScale;

  this.referenceOctave = options.referenceOctave || 4;

  this.referenceNoteKey = this.scale.indexOf(this.referenceNote);

  this.frequencyCalc = frequencyCalc || new FrequencyCalculator();
}

function calculateOctaveRange(min, max) {
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

function calculatePiano() {
  return this.calculateOctaveRange(0, 8);
}

ScaleCalculator.prototype.calculateOctaveRange = calculateOctaveRange;
ScaleCalculator.prototype.calculatePiano = calculatePiano;

module.exports = ScaleCalculator;
