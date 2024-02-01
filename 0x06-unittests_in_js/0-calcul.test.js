const assert = require('assert');
const { it, describe } = require('mocha');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should round the numbers and return the sum', () => {
    assert.equal(calculateNumber(1, 3), 4);
  });

  it('should round the numbers and return the sum', () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  });

  it('should round the numbers and return the sum', () => {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });

  it('should round the numbers and return the sum', () => {
    assert.equal(calculateNumber(1.5, 3.6), 6);
  });

  it('should round the numbers and return the sum', () => {
    assert.equal(calculateNumber(1.4, 2.6), 4);
  });

  it('should handle negative numbers and return the sum', () => {
    assert.equal(calculateNumber(-3.5, 2.3), -1);
  });

  it('checking if numbers round', () => {
    assert.strictEqual(calculateNumber(-1.6, -1.7), -4);
  });

  it('should handle zero and return the sum', () => {
    assert.equal(calculateNumber(0, 0), 0);
  });
});
