import { generateRepIntensity, generateSets, generateWeightDistribution } from './weights';

describe('generateRepIntensity', () => {
  it('fails if not passed the correct parameters', () => {
    expect(generateRepIntensity()).toEqual(false);
    expect(generateRepIntensity(2)).toEqual(false);
    expect(generateRepIntensity(false,2)).toEqual(false);
  });

  it("doesn't return intensity for >3 or < 1 sets on week 4", () => {
    expect(generateRepIntensity(4, 4)).toEqual(false);
    expect(generateRepIntensity(4, 10)).toEqual(false);
    expect(generateRepIntensity(4, 2000)).toEqual(false);
    expect(generateRepIntensity(4, 0)).toEqual(false);
    expect(generateRepIntensity(4, -1)).toEqual(false);
    expect(generateRepIntensity(4, -9001)).toEqual(false);
  });

  it("doesn't return intensity for > 6 or < 1 sets on weeks 1-3", () => {
    expect(generateRepIntensity(1, 666)).toEqual(false);
    expect(generateRepIntensity(2, 7)).toEqual(false);
    expect(generateRepIntensity(3, 2000)).toEqual(false);
    expect(generateRepIntensity(3, 0)).toEqual(false);
    expect(generateRepIntensity(2, -9001)).toEqual(false);
    expect(generateRepIntensity(1, -666)).toEqual(false);
  });

  it("fails on weeks out of bounds", () => {
    expect(generateRepIntensity(-1, 1)).toEqual(false);
    expect(generateRepIntensity(0, 1)).toEqual(false);
    expect(generateRepIntensity(5, 1)).toEqual(false);
  });

  it('returns the correct intensity for week 1', () => {
    expect(generateRepIntensity(1, 1)).toEqual(0.4);
    expect(generateRepIntensity(1, 2)).toEqual(0.5);
    expect(generateRepIntensity(1, 3)).toEqual(0.6);
    expect(generateRepIntensity(1, 4)).toEqual(0.65);
    expect(generateRepIntensity(1, 5)).toEqual(0.75);
    expect(generateRepIntensity(1, 6)).toEqual(0.85);
  });

  it('returns the correct intensity for week 2', () => {
    expect(generateRepIntensity(2, 1)).toEqual(0.45);
    expect(generateRepIntensity(2, 2)).toEqual(0.55);
    expect(generateRepIntensity(2, 3)).toEqual(0.65);
    expect(generateRepIntensity(2, 4)).toEqual(0.7);
    expect(generateRepIntensity(2, 5)).toEqual(0.8);
    expect(generateRepIntensity(2, 6)).toEqual(0.9);
  });

  it('returns the correct intensity for week 3', () => {
    expect(generateRepIntensity(3, 1)).toEqual(0.5);
    expect(generateRepIntensity(3, 2)).toEqual(0.6);
    expect(generateRepIntensity(3, 3)).toEqual(0.7);
    expect(generateRepIntensity(3, 4)).toEqual(0.75);
    expect(generateRepIntensity(3, 5)).toEqual(0.85);
    expect(generateRepIntensity(3, 6)).toEqual(0.95);
  });

  it('returns the correct intensity for week 4', () => {
    expect(generateRepIntensity(4, 1)).toEqual(0.4);
    expect(generateRepIntensity(4, 2)).toEqual(0.5);
    expect(generateRepIntensity(4, 3)).toEqual(0.6);
  });
})

describe('generateSets', () => {
  it('generates the correct sets for week 1', () => {
    expect(generateSets(1)).toEqual(['5x', '5x', '3x', '5x', '5x', '5+']);
  });

  it('generates the correct sets for week 2', () => {
    expect(generateSets(2)).toEqual(['5x', '5x', '3x', '3x', '3x', '3+']);
  });

  it('generates the correct sets for week 3', () => {
    expect(generateSets(3)).toEqual(['5x', '5x', '3x', '5x', '3x', '1+']);
  });

  it('generates the correct sets for week 4', () => {
    expect(generateSets(4)).toEqual(['5x', '5x', '5x']);
  });
})

// TODO: tests for weight distribution
