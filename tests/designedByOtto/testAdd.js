import assert from 'assert';
import add from '../../COMP.SE.200-2024-2025-1/src/add.js';

describe('Unit tests for add function', () => {
  it('Base positive case: adds 1 + 2 to equal 3', () => {
    const result = add(1, 2);
    const answer = 3;
    assert.strictEqual(result, answer);
  });
  it('Base positive case: adds -1 + -1 to equal -2', () => {
    const result = add(-1, -1);
    const answer = -2;
    assert.strictEqual(result, answer);
  });
  it('Positive case: adds 0 + 0 to equal 0', () => {
    const result = add(0, 0);
    const answer = 0;
    assert.strictEqual(result, answer);
  });
  it('Positive case: adds 2.5 + 2.5 to equal 5.0', () => {
    const result = add(2.5, 2.5);
    const answer = 5.0;
    assert.strictEqual(result, answer);
  });
  it('Negative case: adds null + 5 to equal 5', () => {
    const result = add(null, 5);
    const answer = 5;
    assert.strictEqual(result, answer);
  });
  it('Negative case: adds null + null to equal 0', () => {
    const result = add(null, null);
    const answer = 0;
    assert.strictEqual(result, answer);
  });
  it('Negative case: adds string numbers "3" + "4" to equal 7', () => {
    const result = add("3", "4");
    const answer = 7;
    assert.strictEqual(result, answer);
  });
  it('Positive case: adds large numbers 1e+10 + 1e+10 to equal 2e+10', () => {
    const result = add(1e+10, 1e+10);
    const answer = 2e+10;
    assert.strictEqual(result, answer);
  });
  it('Negative case: adds undefined + 5 should return NaN', () => {
    const result = add(undefined, 5);
    assert.ok(isNaN(result));
  });
  it('Negative case: adds "a" + 5 should return NaN', () => {
    const result = add("a", 5);
    assert.ok(isNaN(result));
  });

});