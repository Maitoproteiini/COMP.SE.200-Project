import assert from 'assert';
import every from '../../COMP.SE.200-2024-2025-1/src/every.js';

describe('Unit tests for every function', () => {
  it('Base positive case: every([2, 4, 6], isEven) should return true', () => {
    const isEven = (n) => n % 2 === 0;
    const result = every([2, 4, 6], isEven);
    const answer = true;
    assert.strictEqual(result, answer);
  });
    it("Base positive case: every([true, 1, null, 'yes'], isBoolean) should return false", () => {
    const isBoolean = (n) => Boolean(n);
    const result = every([true, 1, null, 'yes'], isBoolean);
    const answer = false;
    assert.strictEqual(result, answer);
  });
    it('Positive case: every([], isEven) should return true', () => {
    const isEven = (n) => n % 2 === 0;
    const result = every([], isEven);
    const answer = true;
    assert.strictEqual(result, answer);
  });
    it('Positive case: every([1, 2, 3], isPositive) should return true', () => {
    const isPositive = (n) => n > 0;
    const result = every([1, 2, 3], isPositive);
    const answer = true;
    assert.strictEqual(result, answer);
  });
  it('Negative case: every([1, 2, 3], isLessThan3) should return false', () => {
    isLessThan3 = (n) => n < 3;
    const result = every([1, 2, 3], isLessThan3);
    const answer = false;
    assert.strictEqual(result, answer);
  });
  it('Negative case: every([NaN, NaN], isFinite) should return false', () => {
    isFinite = (n) => Number.isFinite(n);
    const result = every([NaN, NaN], isFinite);
    const answer = false;
    assert.strictEqual(result, answer);
  });
});