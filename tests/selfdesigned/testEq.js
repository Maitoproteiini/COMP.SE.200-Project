import assert from 'assert';
import eq from '../../COMP.SE.200-2024-2025-1/src/eq.js';

describe('Unit tests for eq function', () => {
  it('Base positive case: eq(1, 1) should return true', () => {
    const result = eq(1, 1);
    const answer = true;
    assert.strictEqual(result, answer);
  });
    it('Base positive case: eq(1, "1") should return false', () => {
    const result = eq(1, "1");
    const answer = false;
    assert.strictEqual(result, answer);
  });
    it('Positive case: eq(NaN, NaN) should return true', () => {
    const result = eq(NaN, NaN);
    const answer = true;
    assert.strictEqual(result, answer);
  });
    it('Positive case: eq({}, {}) should return true', () => {
    const result = eq({}, {});
    const answer = true;
    assert.strictEqual(result, answer);
  });
    it('Positive case: eq("test", "test") should return true', () => {
    const result = eq("test", "test");
    const answer = true;
    assert.strictEqual(result, answer);
  });
  it('Positive case: eq(null, undefined) should return false', () => {
    const result = eq(null, undefined);
    const answer = false;
    assert.strictEqual(result, answer);
  });
  it('Positive case: eq([], []) should return true', () => {
    const result = eq([], []);
    const answer = true;
    assert.strictEqual(result, answer);
  });
  it('Positive case: eq(0, -0) should return false', () => {
    const result = eq(0, -0);
    const answer = false;
    assert.strictEqual(result, answer);
  });
});