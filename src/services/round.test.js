import { round } from './round';

it('fails if not passed the required parameter', () => {
  expect(round()).toEqual(false);
});

it('defaults the rounding value to 2.5', () => {
  expect(round(4)).toEqual(5);
  expect(round(2)).toEqual(2.5);
});

it('fails if passed negative rounding values because who does that', () => {
  expect(round(10, -1)).toEqual(false);
});

it('works with other, sensible, respectable rounding values', () => {
  expect(round(30, 10)).toEqual(30);
  expect(round(650, 333)).toEqual(666);
  expect(round(1.66, 3)).toEqual(3);
  expect(round(68.69, 1)).toEqual(69); // nice
  expect(round(-12.5, 3)).toEqual(-12);
});

it('works with a bunch of ludicrous edge cases that will obviously never happen', () => {
  expect(round(0.500000000000001, 0.5)).toEqual(0.5);
  expect(round(0.5, 0.500000000000001)).toEqual(0.500000000000001);
  expect(round(99999999999999, 10)).toEqual(100000000000000)
});
