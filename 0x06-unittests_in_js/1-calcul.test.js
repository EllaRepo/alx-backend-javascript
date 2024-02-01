const assert = require('assert');
const { it, describe } = require('mocha');
const calculate = require('./1-calcul');

describe('calculate function', () => {
  it('should add two whole numbers when type is SUM', () => {
    assert.strictEqual(calculate('SUM', 3, 4), 7);
  });

  it('should subtract two whole numbers when type is SUBTRACT', () => {
    assert.strictEqual(calculate('SUBTRACT', 8, 3), 5);
  });

  it('should divide two whole numbers when type is DIVIDE', () => {
    assert.strictEqual(calculate('DIVIDE', 10, 2), 5);
  });

  it('should return "Error" when attempting to divide by 0', () => {
    assert.strictEqual(calculate('DIVIDE', 7, 0), 'Error');
  });

  it('should handle negative whole numbers correctly', () => {
    assert.strictEqual(calculate('SUM', -3, 4), 1);
    assert.strictEqual(calculate('SUBTRACT', -8, -3), -5);
    assert.strictEqual(calculate('DIVIDE', -10, 2), -5);
  });

  it('should add two decimal numbers when type is SUM', () => {
    assert.strictEqual(calculate('SUM', 3.5, 2.5), 7);
  });

  it('should subtract two decimal numbers when type is SUBTRACT', () => {
    assert.strictEqual(calculate('SUBTRACT', 8.7, 3.2), 6);
  });

  it('should divide two decimal numbers when type is DIVIDE', () => {
    assert.strictEqual(calculate('DIVIDE', 11.5, 2.5), 4);
  });

  it('should divide two decimal numbers when type is DIVIDE', () => {
    assert.strictEqual(calculate('DIVIDE', 1.4, 4.5), 0.2);
  });
});
