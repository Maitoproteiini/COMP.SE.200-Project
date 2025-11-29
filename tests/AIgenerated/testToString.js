/*
This file is written by Chat-GPT 5.1 with the following prompt:
    Here is the source file toString.js and here is a test script as a reference.
    Write a thorough test script in similar style and logic as the reference.

Two files were attached to the prompt:
- toString.js (source file to be tested)
- unit_tests/selfdesigned/testToString.js (reference test script)
*/

// unit_tests/testToString.js
import assert from 'assert';
import toString from '../../COMP.SE.200-2024-2025-1/src/toString.js';

describe('Extended unit tests for toString function', () => {
  //
  // Primitive values
  //
  it('Positive case: convert positive integer to "42"', () => {
    const result = toString(42);
    const answer = '42';
    assert.strictEqual(result, answer);
  });

  it('Positive case: convert negative integer to "-7"', () => {
    const result = toString(-7);
    const answer = '-7';
    assert.strictEqual(result, answer);
  });

  it('Positive case: convert floating point number to "3.14"', () => {
    const result = toString(3.14);
    const answer = '3.14';
    assert.strictEqual(result, answer);
  });

  it('Positive case: convert true to "true"', () => {
    const result = toString(true);
    const answer = 'true';
    assert.strictEqual(result, answer);
  });

  it('Positive case: convert false to "false"', () => {
    const result = toString(false);
    const answer = 'false';
    assert.strictEqual(result, answer);
  });

  it('Positive case: convert NaN to "NaN"', () => {
    const result = toString(NaN);
    const answer = 'NaN';
    assert.strictEqual(result, answer);
  });

  it('Positive case: convert Infinity to "Infinity"', () => {
    const result = toString(Infinity);
    const answer = 'Infinity';
    assert.strictEqual(result, answer);
  });

  it('Positive case: convert -Infinity to "-Infinity"', () => {
    const result = toString(-Infinity);
    const answer = '-Infinity';
    assert.strictEqual(result, answer);
  });

  it('Positive case: convert empty string to ""', () => {
    const result = toString('');
    const answer = '';
    assert.strictEqual(result, answer);
  });

  it('Positive case: convert non-empty string to same string', () => {
    const result = toString('hello world');
    const answer = 'hello world';
    assert.strictEqual(result, answer);
  });

  //
  // null and undefined
  //
  it('Positive case: convert null to "" (empty string)', () => {
    const result = toString(null);
    const answer = '';
    assert.strictEqual(result, answer);
  });

  it('Positive case: convert undefined to "" (empty string)', () => {
    const result = toString(undefined);
    const answer = '';
    assert.strictEqual(result, answer);
  });

  //
  // Zero handling (including Number objects)
  //
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

  it('Positive case: convert Number object with 0 to "0"', () => {
    const result = toString(new Number(0)); // eslint-disable-line no-new-wrappers
    const answer = '0';
    assert.strictEqual(result, answer);
  });

  it('Positive case: convert Number object with -0 to "-0"', () => {
    const result = toString(new Number(-0)); // eslint-disable-line no-new-wrappers
    const answer = '-0';
    assert.strictEqual(result, answer);
  });

  //
  // Arrays (flat, nested, and mixed)
  //
  it('Positive case: convert simple number array [1, 2, 3] to "1,2,3"', () => {
    const result = toString([1, 2, 3]);
    const answer = '1,2,3';
    assert.strictEqual(result, answer);
  });

  it('Negative case: convert [1, null, 3] to "1,,3"', () => {
    const result = toString([1, null, 3]);
    const answer = '1,,3';
    assert.strictEqual(result, answer);
  });

  it('Negative case: convert [null, undefined, null] to ",,"', () => {
    const result = toString([null, undefined, null]);
    const answer = ',,';
    assert.strictEqual(result, answer);
  });

  it('Positive case: convert nested array [1, [2, 3]] to "1,2,3"', () => {
    const result = toString([1, [2, 3]]);
    const answer = '1,2,3';
    assert.strictEqual(result, answer);
  });

  it('Positive case: convert deeply nested array [1, [2, [3]]] to "1,2,3"', () => {
    const result = toString([1, [2, [3]]]);
    const answer = '1,2,3';
    assert.strictEqual(result, answer);
  });

  it('Positive case: convert mixed array [1, "2", true, null] to "1,2,true,"', () => {
    const result = toString([1, '2', true, null]);
    const answer = '1,2,true,';
    assert.strictEqual(result, answer);
  });

  //
  // Symbols
  //
  it('Positive case: convert symbol to "Symbol(description)"', () => {
    const sym = Symbol('test');
    const result = toString(sym);
    const answer = 'Symbol(test)';
    assert.strictEqual(result, answer);
  });

  it('Positive case: convert global symbol Symbol.for("shared") to "Symbol(shared)"', () => {
    const sym = Symbol.for('shared');
    const result = toString(sym);
    const answer = 'Symbol(shared)';
    assert.strictEqual(result, answer);
  });

  //
  // Objects and other non-primitive types
  //
  it('Positive case: convert plain object to "[object Object]"', () => {
    const obj = { a: 1, b: 2 };
    const result = toString(obj);
    const answer = '[object Object]';
    assert.strictEqual(result, answer);
  });

  it('Positive case: convert array containing object [1, {a: 2}] to "1,[object Object]"', () => {
    const value = [1, { a: 2 }];
    const result = toString(value);
    const answer = '1,[object Object]';
    assert.strictEqual(result, answer);
  });

  it('Positive case: convert function inside array to its string representation in array', () => {
    const fn = function example() {};
    const value = [fn];
    const result = toString(value);
    // We only assert that the result starts with "function" to avoid
    // environment-specific function string differences.
    assert.ok(
      result.startsWith('function') || result.startsWith('() =>') || result.startsWith('example'),
      `Expected function string, got "${result}"`
    );
  });

  //
  // Idempotence / stability checks
  //
  it('Positive case: convert result of toString again and get same string', () => {
    const initial = [1, 2, null];
    const once = toString(initial);
    const twice = toString(once);
    const answer = '1,2,';
    assert.strictEqual(once, answer);
    assert.strictEqual(twice, answer);
  });

  it('Negative case: ensure different inputs produce different outputs where expected', () => {
    const zero = toString(0);
    const negZero = toString(-0);
    assert.notStrictEqual(zero, negZero);
  });
});
