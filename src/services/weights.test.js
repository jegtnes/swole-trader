import { percentageLift } from './weights';

it('fails if not passed the correct parameters', () => {
  expect(percentageLift()).toEqual(false);
  expect(percentageLift(2)).toEqual(false);
  expect(percentageLift(false,2)).toEqual(false);
});

it("doesn't return percentages for >3 or < 1 sets on week 4", () => {
  expect(percentageLift(4, 4)).toEqual(false);
  expect(percentageLift(4, 10)).toEqual(false);
  expect(percentageLift(4, 2000)).toEqual(false);
  expect(percentageLift(4, 0)).toEqual(false);
  expect(percentageLift(4, -1)).toEqual(false);
  expect(percentageLift(4, -9001)).toEqual(false);
});

it("doesn't return percentages for > 6 or < 1 sets on weeks 1-3", () => {
  expect(percentageLift(1, 666)).toEqual(false);
  expect(percentageLift(2, 7)).toEqual(false);
  expect(percentageLift(3, 2000)).toEqual(false);
  expect(percentageLift(3, 0)).toEqual(false);
  expect(percentageLift(2, -9001)).toEqual(false);
  expect(percentageLift(1, -666)).toEqual(false);
});

it("fails on weeks out of bounds", () => {
  expect(percentageLift(-1, 1)).toEqual(false);
  expect(percentageLift(0, 1)).toEqual(false);
  expect(percentageLift(5, 1)).toEqual(false);
});

it('returns the correct percentages for week 1', () => {
  expect(percentageLift(1, 1)).toEqual(0.4);
  expect(percentageLift(1, 2)).toEqual(0.5);
  expect(percentageLift(1, 3)).toEqual(0.6);
  expect(percentageLift(1, 4)).toEqual(0.65);
  expect(percentageLift(1, 5)).toEqual(0.75);
  expect(percentageLift(1, 6)).toEqual(0.85);
});

it('returns the correct percentages for week 2', () => {
  expect(percentageLift(2, 1)).toEqual(0.45);
  expect(percentageLift(2, 2)).toEqual(0.55);
  expect(percentageLift(2, 3)).toEqual(0.65);
  expect(percentageLift(2, 4)).toEqual(0.7);
  expect(percentageLift(2, 5)).toEqual(0.8);
  expect(percentageLift(2, 6)).toEqual(0.9);
});

it('returns the correct percentages for week 3', () => {
  expect(percentageLift(3, 1)).toEqual(0.5);
  expect(percentageLift(3, 2)).toEqual(0.6);
  expect(percentageLift(3, 3)).toEqual(0.7);
  expect(percentageLift(3, 4)).toEqual(0.75);
  expect(percentageLift(3, 5)).toEqual(0.85);
  expect(percentageLift(3, 6)).toEqual(0.95);
});

it('returns the correct percentages for week 4', () => {
  expect(percentageLift(4, 1)).toEqual(0.4);
  expect(percentageLift(4, 2)).toEqual(0.5);
  expect(percentageLift(4, 3)).toEqual(0.6);
});
