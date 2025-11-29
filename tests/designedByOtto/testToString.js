// unit_tests/base_test.js
import assert from 'assert';
import toString from '../../COMP.SE.200-2024-2025-1/src/toString.js';

describe('Unit tests for toString function', () => {
  it('Base positive case: convert 1 to "1"', () => {
    const result = toString(1);
    const answer = '1';
    assert.strictEqual(result, answer);
  });
  it('Positive case: convert [1, 2, 3] to "1,2,3"', () => {
    const result = toString([1, 2, 3]);
    const answer = '1,2,3';
    assert.strictEqual(result, answer);
  });
  it('Positive case: convert null to ""', () => {
    const result = toString(null);
    const answer = '';
    assert.strictEqual(result, answer);
  });
  it('Positive case: convert positive zero to "0"', () => {
    const result = toString(0);
    const answer = '0';
    assert.strictEqual(result, answer);
  });
  it('Positive case: convert negative zero to "-0"', () => {
    const result = toString(-0);
    const answer = '-0';
    assert.strictEqual(result, answer);
  });
  it('Negative case: convert [1, null, 3] to 1,,3', () => {
    const result = toString([1, null, 3]);
    const answer = '1,,3';
    assert.strictEqual(result, answer);
  });
  it('Negative case: convert [null, undefined, null] to ,,', () => {
    const result = toString([null, undefined, null]);
    const answer = ',,';
    assert.strictEqual(result, answer);
  });
  it('Negative case: convert 1 as string to 1 as string', () => {
    const result = toString('1');
    const answer = '1';
    assert.strictEqual(result, answer);
  });
});
