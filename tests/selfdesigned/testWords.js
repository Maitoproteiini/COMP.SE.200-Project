import assert from 'assert';
import words from '../../COMP.SE.200-2024-2025-1/src/words.js';

describe('Unit tests for words function', () => {
  it("Base positive case: words('fred, barney, & pebbles') should return ['fred', 'barney', 'pebbles']", () => {
    const result = words('fred, barney, & pebbles');
    const answer = ['fred', 'barney', 'pebbles'];
    assert.deepStrictEqual(result, answer);
  });
    it("Base positive case: words('fred, barney, & pebbles', /[^, ]+/g) should return ['fred', 'barney', '&', 'pebbles']", () => {
    const result = words('fred, barney, & pebbles', /[^, ]+/g);
    const answer = ['fred', 'barney', '&', 'pebbles'];
    assert.deepStrictEqual(result, answer);
  });
    it("Positive case with numbers: words('hello world! 123') should return ['hello', 'world', '123']", () => {
    const result = words('hello world! 123');
    const answer = ['hello', 'world', '123'];
    assert.deepStrictEqual(result, answer);
  });
    it("Positive with special characters: words('über Beyoncé') should return ['über', 'Beyoncé']", () => {
    const result = words('über Beyoncé');
    const answer = ['über', 'Beyoncé'];
    assert.deepStrictEqual(result, answer);
  });
  it("Negative case: words('!!! $$$ %%%') should return []", () => {
    const result = words('!!! $$$ %%%');
    const answer = [];
    assert.deepStrictEqual(result, answer);
  });
  it("Negative case with pattern: words('hello world', /\\d+/g) should return []", () => {
    const result = words('hello world', /\d+/g);
    const answer = [];
    assert.deepStrictEqual(result, answer);
  });
});